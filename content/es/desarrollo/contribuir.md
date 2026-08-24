---
title: Contribuir
description: Cómo contribuir al ecosistema Dotrino: repos públicos MIT, rama develop, pull request a main.
---

# Contribuir

Todo el ecosistema es **código abierto (MIT)** en la organización
[`imdotrino`](https://github.com/imdotrino).

## El flujo

1. Cada repo tiene dos ramas: **`main`** (protegida: solo entra por *pull request*
   con una aprobación) y **`develop`** (la rama de trabajo, con push directo).
2. Trabaja sobre `develop` (o una rama tuya) y abre el PR hacia `main`.
3. El push a `main` **es** el despliegue: GitHub Actions publica solo.

## Este wiki

El contenido está en `content/<idioma>/<sección>/<página>.md` del repo
[`dotrino-wiki`](https://github.com/imdotrino/dotrino-wiki). Se genera estático con
`node build.mjs` (sin dependencias). Añadir una página = crear el `.md` (español y,
ojalá, inglés) y registrarla en `content/manifest.json`.

## Normas de la casa

- Español **neutro** (tuteo, nunca voseo) e inglés; la copy pública en
  [lenguaje llano](https://github.com/imdotrino).
- El código, las rutas y los logs van **en inglés**; los comentarios pueden ir en español.
- Sin JavaScript de terceros, sin rastreadores, sin cookies. Siempre.
