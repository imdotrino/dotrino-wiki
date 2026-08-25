---
title: Los componentes de interfaz
description: Web Components compartidos: la barra superior, el botón de soporte, la tarjeta de perfil, compartir, instalar, volver, avisos y tutoriales.
---

# Los componentes de interfaz

Todas las apps se ven iguales porque **comparten las piezas**, no porque cada una
copie el diseño. Son Web Components: Shadow DOM, sin JavaScript de terceros, sin
cookies, en español e inglés.

## La barra superior

**`@dotrino/topbar`** — repo
[`dotrino-topbar`](https://github.com/imdotrino/dotrino-topbar)

`<dotrino-topbar>` trae la barra entera: marca, botón de volver, un espacio para
las acciones de la app, el selector de idioma, el botón de perfil y la moneda de
soporte. Se importa una cosa en vez de cablear cinco.

```
import '@dotrino/topbar'
```

En una página sin compilación, entra por CDN y **siempre con `+esm`**:

```
<script type="module"
  src="https://cdn.jsdelivr.net/npm/@dotrino/topbar@0.8/+esm"></script>
```

Se personaliza con *slots* (`brand`, `end`), `::part()` y variables CSS. Rearmar
la barra a mano es deuda: si te ves escribiendo un `@media` de topbar, estás
reimplementando el componente.

## Soporte y perfil

**`@dotrino/support`** — repo
[`dotrino-support`](https://github.com/imdotrino/dotrino-support)

`<dotrino-support>`: la moneda y su modal de apoyo, compartir y contacto. Es la
**única** forma de monetización en la interfaz. Ver
[Apoyar el proyecto](/empezar/apoyar/).

**`@dotrino/profile`** — repo
[`dotrino-profile`](https://github.com/imdotrino/dotrino-profile)

`<dotrino-profile>`: la tarjeta de perfil y reputación, la misma en todas partes.
Está prohibido dibujar a mano una tarjeta de perfil o unas estrellas de
calificación; lo que sí vale es una vista previa en una lista que **abra** el
componente.

## Compartir, instalar, volver

**`@dotrino/share`** — repo
[`dotrino-share`](https://github.com/imdotrino/dotrino-share) —
`<dotrino-share>`: el modal de compartir, con el código QR generado en el propio
navegador. Recibe una dirección ya armada (con su `#fragment`).

**`@dotrino/install`** — repo
[`dotrino-install`](https://github.com/imdotrino/dotrino-install) —
`<dotrino-install>`: el botón «Instalar app», incluida la variante de iOS y la
preferencia por la app de Android cuando existe.

**`@dotrino/nav`** — repo
[`dotrino-nav`](https://github.com/imdotrino/dotrino-nav) — el «volver» unificado:
botón físico de Android, gesto de iOS y navegador. Decide por el estado del
historial, no contando eventos.

## Avisos y primeros pasos

**`@dotrino/notifications`** — repo
[`dotrino-notifications`](https://github.com/imdotrino/dotrino-notifications) —
notificaciones del navegador y Web Push (contra la bóveda y el proxy), con acuses
de apertura y su panel.

**`@dotrino/tutorial`** — repo
[`dotrino-tutorial`](https://github.com/imdotrino/dotrino-tutorial) —
`<dotrino-tutorial>`: burbujas de primeros pasos ancladas a la interfaz, que se
ven una vez.

## Para desarrollar

**`@dotrino/inspector`** — repo
[`dotrino-inspector`](https://github.com/imdotrino/dotrino-inspector) — el
inspector del ecosistema: mirar por dentro lo que una app está haciendo contra los
pilares mientras la desarrollas.
