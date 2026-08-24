# dotrino-wiki — wiki.dotrino.com

La documentación del ecosistema Dotrino, **generada estática**: Markdown en
`content/<idioma>/<sección>/<página>.md` → `node build.mjs` (sin dependencias) →
HTML por página en `dist/`, con sidebar, es/en, SEO por tema y «Editar en GitHub».
Mismo patrón que `dotrino-index`: el push a `main` publica (GitHub Actions).

## Editar

1. Toca el `.md` en `content/es/...` (y su gemelo en `content/en/...`; si falta, la
   página inglesa muestra la española con un aviso).
2. Página nueva: crea los `.md` y regístrala en `content/manifest.json`.
3. `node build.mjs` para verla en `dist/`; abre un PR a `develop`.

Sin dependencias de runtime, sin JavaScript de terceros (topbar del ecosistema por
CDN y GoatCounter autohosteado). MIT · parte de [Dotrino](https://dotrino.com).
