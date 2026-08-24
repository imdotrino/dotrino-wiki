#!/usr/bin/env node
/**
 * build.mjs — el generador del wiki (wiki.dotrino.com). Estático de verdad: lee
 * `content/<lang>/<sección>/<página>.md` + `content/manifest.json` y escribe en `dist/`
 * un HTML por página, con sidebar, idioma alterno, SEO y «Editar en GitHub». Sin
 * dependencias: el render de Markdown vive aquí (subset controlado: es NUESTRO contenido,
 * no entrada de usuarios). Mismo patrón que dotrino-index: generar + push = publicar.
 *
 *   node build.mjs          # escribe dist/
 */
import fs from 'node:fs'
import path from 'node:path'
import { execSync } from 'node:child_process'

const ROOT = path.dirname(new URL(import.meta.url).pathname)
const DIST = path.join(ROOT, 'dist')
const SITE = 'https://wiki.dotrino.com'
const REPO = 'https://github.com/imdotrino/dotrino-wiki'
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'content/manifest.json'), 'utf8'))
const COMMIT = (() => { try { return execSync('git rev-parse --short HEAD', { cwd: ROOT }).toString().trim() } catch { return 'dev' } })()

// ---------- Markdown (subset propio) ----------
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
function inline (s) {
  return esc(s)
    .replace(/`([^`]+)`/g, (_, c) => `<code>${c}</code>`)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, t, h) => `<a href="${h}"${/^https?:/.test(h) ? ' rel="noopener"' : ''}>${t}</a>`)
}
export function md (src) {
  const out = []
  const lines = src.split('\n')
  let i = 0, list = null, quote = false
  const closeList = () => { if (list) { out.push(list === 'ul' ? '</ul>' : '</ol>'); list = null } }
  const closeQuote = () => { if (quote) { out.push('</blockquote>'); quote = false } }
  while (i < lines.length) {
    const l = lines[i]
    if (l.startsWith('```')) {
      closeList(); closeQuote()
      const buf = []; i++
      while (i < lines.length && !lines[i].startsWith('```')) buf.push(lines[i++])
      i++
      out.push(`<pre><code>${esc(buf.join('\n'))}</code></pre>`)
      continue
    }
    if (/^\|/.test(l)) {
      closeList(); closeQuote()
      const rows = []
      while (i < lines.length && /^\|/.test(lines[i])) rows.push(lines[i++])
      const cells = (r) => r.replace(/^\||\|$/g, '').split('|').map((c) => inline(c.trim()))
      const head = cells(rows[0])
      const body = rows.slice(rows[1] && /^\|[\s:-]+\|/.test(rows[1] + '|') ? 2 : 1)
      out.push('<div class="tablewrap"><table><thead><tr>' + head.map((c) => `<th>${c}</th>`).join('') + '</tr></thead><tbody>')
      for (const r of body) out.push('<tr>' + cells(r).map((c) => `<td>${c}</td>`).join('') + '</tr>')
      out.push('</tbody></table></div>')
      continue
    }
    const h = /^(#{1,4}) (.*)$/.exec(l)
    if (h) {
      closeList(); closeQuote()
      const n = h[1].length
      const id = h[2].toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
      out.push(`<h${n} id="${id}">${inline(h[2])}</h${n}>`)
      i++; continue
    }
    if (/^> ?/.test(l)) {
      closeList()
      if (!quote) { out.push('<blockquote>'); quote = true }
      out.push(`<p>${inline(l.replace(/^> ?/, ''))}</p>`)
      i++; continue
    }
    const li = /^(\s*)([-*]|\d+\.) (.*)$/.exec(l)
    if (li) {
      closeQuote()
      const kind = /\d/.test(li[2]) ? 'ol' : 'ul'
      if (list !== kind) { closeList(); out.push(kind === 'ul' ? '<ul>' : '<ol>'); list = kind }
      // continuación de ítem (líneas siguientes indentadas)
      let item = li[3]
      while (i + 1 < lines.length && /^\s{2,}\S/.test(lines[i + 1]) && !/^\s*([-*]|\d+\.) /.test(lines[i + 1])) { item += ' ' + lines[++i].trim() }
      out.push(`<li>${inline(item)}</li>`)
      i++; continue
    }
    if (!l.trim()) { closeList(); closeQuote(); i++; continue }
    closeQuote()
    let p = l
    while (i + 1 < lines.length && lines[i + 1].trim() && !/^(#|```|\||> |(\s*)([-*]|\d+\.) )/.test(lines[i + 1])) { p += ' ' + lines[++i].trim() }
    out.push(`<p>${inline(p)}</p>`)
    i++
  }
  closeList(); closeQuote()
  return out.join('\n')
}

// ---------- frontmatter ----------
function page (lang, section, slug) {
  const file = path.join(ROOT, 'content', lang, section, slug + '.md')
  if (!fs.existsSync(file)) return null
  let src = fs.readFileSync(file, 'utf8')
  const meta = { title: slug, description: '' }
  const fm = /^---\n([\s\S]*?)\n---\n/.exec(src)
  if (fm) {
    src = src.slice(fm[0].length)
    for (const line of fm[1].split('\n')) { const m = /^(\w+):\s*(.*)$/.exec(line); if (m) meta[m[1]] = m[2] }
  }
  return { ...meta, html: md(src), file: `content/${lang}/${section}/${slug}.md` }
}

const T = {
  es: { edit: 'Editar en GitHub', lang: 'English', langHref: (u) => '/en' + u, home: 'Portada', search: '', toc: 'En esta sección', updated: 'Parte del ecosistema', missing: 'Esta página aún no está traducida.' },
  en: { edit: 'Edit on GitHub', lang: 'Español', langHref: (u) => u.replace(/^\/en/, '') || '/', home: 'Home', toc: 'In this section', updated: 'Part of the ecosystem', missing: 'This page is not translated yet.' }
}

function urlOf (lang, section, slug) {
  const base = lang === 'en' ? '/en' : ''
  if (!section) return base + '/'
  return `${base}/${section}/${slug === 'index' ? '' : slug + '/'}`
}

function sidebar (lang, cur) {
  const items = manifest.sections.map((sec) => {
    const pages = sec.pages.map((p) => {
      const on = cur.section === sec.slug && cur.slug === p.slug
      return `<li${on ? ' class="on"' : ''}><a href="${urlOf(lang, sec.slug, p.slug)}">${esc(p.title[lang] || p.title.es)}</a></li>`
    }).join('')
    const open = cur.section === sec.slug ? ' open' : ''
    return `<details${open}><summary>${esc(sec.title[lang] || sec.title.es)}</summary><ul>${pages}</ul></details>`
  }).join('')
  return `<nav class="side" aria-label="${lang === 'en' ? 'Topics' : 'Temas'}"><a class="home" href="${urlOf(lang, '', 'index')}">${T[lang].home}</a>${items}</nav>`
}

function layout ({ lang, section, slug, title, description, html, editPath }) {
  const url = SITE + urlOf(lang, section, slug)
  const altLang = lang === 'es' ? 'en' : 'es'
  const altUrl = SITE + urlOf(altLang, section, slug)
  const altPath = urlOf(altLang, section, slug)
  const t = T[lang]
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
<title>${esc(title)} · Dotrino Wiki</title>
<meta name="description" content="${esc(description)}" />
<link rel="canonical" href="${url}" />
<link rel="alternate" hreflang="${altLang}" href="${altUrl}" />
<link rel="icon" href="/icon.svg" />
<meta name="commit" content="${COMMIT}" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Dotrino" />
<meta property="og:locale" content="${lang === 'en' ? 'en_US' : 'es_ES'}" />
<meta property="og:title" content="${esc(title)} · Dotrino Wiki" />
<meta property="og:description" content="${esc(description)}" />
<meta property="og:url" content="${url}" />
<meta property="og:image" content="${SITE}/og.jpg" />
<meta property="og:image:width" content="1200" /><meta property="og:image:height" content="630" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${esc(title)} · Dotrino Wiki" />
<meta name="twitter:description" content="${esc(description)}" />
<meta name="twitter:image" content="${SITE}/og.jpg" />
<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'WebSite', name: 'Dotrino Wiki', url: SITE, description: description, publisher: { '@type': 'Organization', name: 'Dotrino', url: 'https://dotrino.com/' } })}</script>
<style>
:root { --bg:#0b1220; --panel:#101a2c; --line:#223047; --fg:#dbe7f7; --muted:#9fb3c8; --accent:#4f8cff; }
* { box-sizing: border-box; }
body { margin:0; background:var(--bg); color:var(--fg); font:16px/1.65 system-ui, sans-serif; }
a { color:var(--accent); text-decoration:none; } a:hover { text-decoration:underline; }
.wrap { display:flex; gap:32px; max-width:1120px; margin:0 auto; padding:24px 16px 64px; }
.side { flex:0 0 240px; position:sticky; top:76px; align-self:flex-start; max-height:calc(100vh - 90px); overflow:auto; font-size:14.5px; }
.side a.home { display:block; font-weight:600; margin:0 0 10px; color:var(--fg); }
.side details { border-top:1px solid var(--line); padding:6px 0; }
.side summary { cursor:pointer; color:var(--fg); font-weight:600; padding:4px 0; list-style:none; }
.side summary::before { content:'▸ '; color:var(--muted); } .side details[open] summary::before { content:'▾ '; }
.side ul { list-style:none; margin:4px 0 8px; padding:0 0 0 14px; }
.side li { margin:3px 0; } .side li a { color:var(--muted); } .side li.on a { color:var(--accent); font-weight:600; }
main { flex:1; min-width:0; }
main h1 { font-size:1.9em; line-height:1.25; margin:.2em 0 .5em; }
main h2 { margin-top:1.6em; border-bottom:1px solid var(--line); padding-bottom:6px; }
main h3 { margin-top:1.4em; }
pre { background:#0d1521; border:1px solid var(--line); border-radius:10px; padding:12px 14px; overflow-x:auto; font-size:13.5px; }
code { font-family:ui-monospace, SFMono-Regular, Menlo, monospace; }
p code, li code, td code { background:#17233a; border-radius:5px; padding:1px 5px; font-size:.92em; }
blockquote { border-left:3px solid var(--accent); margin:1em 0; padding:2px 14px; color:var(--muted); background:var(--panel); border-radius:0 8px 8px 0; }
.tablewrap { overflow-x:auto; } table { border-collapse:collapse; margin:1em 0; min-width:420px; }
th, td { border:1px solid var(--line); padding:7px 10px; text-align:left; vertical-align:top; }
th { background:var(--panel); }
.pagefoot { margin-top:40px; border-top:1px solid var(--line); padding-top:14px; font-size:14px; color:var(--muted); display:flex; gap:16px; flex-wrap:wrap; }
.menubtn { display:none; }
@media (max-width: 860px) {
  .wrap { flex-direction:column; gap:12px; }
  .side { position:static; max-height:none; flex:none; width:100%; border:1px solid var(--line); border-radius:10px; padding:10px 14px; background:var(--panel); }
}
</style>
</head>
<body>
<dotrino-topbar brand="Dotrino Wiki" icon="/icon.svg" brand-href="${lang === 'en' ? '/en/' : '/'}" no-back lang="${lang}"
  support-repo="imdotrino/dotrino-wiki" support-discord="https://discord.gg/D648uq7cth">
  <a href="https://dotrino.com/" rel="noopener">dotrino.com</a>
</dotrino-topbar>
<script>
// §9: el selector es el toggle ESTÁNDAR del topbar (ES/EN, ambos visibles). Como el wiki
// es multipágina por idioma, cambiar de idioma = navegar a la URL gemela de esta página.
document.querySelector('dotrino-topbar').addEventListener('dotrino-lang', (e) => {
  const l = e.detail && e.detail.lang
  if (l && l !== '${lang}') location.href = '${SITE ? '' : ''}${altPath}'
})
</script>
<div class="wrap">
${sidebar(lang, { section, slug })}
<main>
${html}
<div class="pagefoot">
  <a href="${REPO}/edit/develop/${editPath}" rel="noopener">✏️ ${t.edit}</a>
  <span>${t.updated} <a href="https://dotrino.com/">Dotrino</a> · MIT</span>
</div>
</main>
</div>
<script type="module" src="https://cdn.jsdelivr.net/npm/@dotrino/topbar@0.8/+esm"></script>
<script>window.goatcounter={path:function(p){return location.hostname+p}}</script>
<script data-goatcounter="https://goat.dotrino.com/count" async src="https://goat.dotrino.com/count.js"></script>
</body>
</html>
`
}

// ---------- emitir ----------
fs.rmSync(DIST, { recursive: true, force: true })
fs.mkdirSync(DIST, { recursive: true })
const urls = []
for (const lang of ['es', 'en']) {
  const targets = [{ section: '', slug: 'index' }]
  for (const sec of manifest.sections) for (const p of sec.pages) targets.push({ section: sec.slug, slug: p.slug })
  for (const tgt of targets) {
    const isHome = !tgt.section
    const pg = isHome ? page(lang, '.', 'index') : page(lang, tgt.section, tgt.slug)
    const fallback = isHome ? page('es', '.', 'index') : page('es', tgt.section, tgt.slug)
    const src = pg || fallback
    if (!src) { console.error('missing page:', lang, tgt.section, tgt.slug); continue }
    const html = pg ? src.html : `<p class="muted"><em>${T[lang].missing}</em></p>` + src.html
    const url = urlOf(lang, tgt.section, tgt.slug)
    const dir = path.join(DIST, url)
    fs.mkdirSync(dir, { recursive: true })
    fs.writeFileSync(path.join(dir, 'index.html'), layout({ lang, section: tgt.section, slug: tgt.slug, title: src.title, description: src.description, html, editPath: src.file }))
    urls.push(SITE + url)
  }
}
// estáticos + SEO
for (const f of fs.readdirSync(path.join(ROOT, 'web'))) fs.copyFileSync(path.join(ROOT, 'web', f), path.join(DIST, f))
fs.writeFileSync(path.join(DIST, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`)
fs.writeFileSync(path.join(DIST, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n')}\n</urlset>\n`)
fs.writeFileSync(path.join(DIST, '.nojekyll'), '')
fs.writeFileSync(path.join(DIST, 'CNAME'), 'wiki.dotrino.com\n')
console.log(`wiki: ${urls.length} páginas → dist/  (commit ${COMMIT})`)
