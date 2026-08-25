---
title: Los servicios del ecosistema
description: Proxy, acortador, sellador de tiempo, resultados, bot social, bots de prueba, formularios y despliegue: qué corre en un servidor y para qué.
---

# Los servicios del ecosistema

Son las contrapartes que corren en un servidor. No se importan como librería: se
les habla por su dominio. Todas sacan sus secretos de
[la bóveda](/vault/secretos/), no de un archivo `.env` en el disco.

## Transporte

**`dotrino-proxy`** — repo
[`dotrino-proxy`](https://github.com/imdotrino/dotrino-proxy) ·
`proxy.dotrino.com`

El servidor del transporte, contraparte de `@dotrino/proxy-client`. Entrega
mensajes por clave pública, guarda los de quien está desconectado, sirve canales y
reparte credenciales TURN para las conexiones directas.

Los nodos **se federan** entre sí: cada instancia lleva un prefijo derivado de su
propia llave, y la malla entre nodos va firmada.

## Utilidades públicas

**`dotrino-shortener`** — repo
[`dotrino-shortener`](https://github.com/imdotrino/dotrino-shortener) ·
`s.dotrino.com`

Acortador de direcciones, con caducidad de un mes. **Solo se usa desde un
servidor** (el bot social): acortar desde el navegador obligaría a incrustar su
llave, y acortar un `#fragment` mandaría al servidor justo lo que no debe llegar
ahí.

**`dotrino-signer`** — repo
[`dotrino-signer`](https://github.com/imdotrino/dotrino-signer) ·
`signer.dotrino.com`

Sella un contenido con la hora: firma `{ hash, ts }` y con eso queda probado
**cuándo** existió algo.

**`dotrino-results`** — repo
[`dotrino-results`](https://github.com/imdotrino/dotrino-results) ·
`results.dotrino.com`

El relevo de resultados deportivos oficiales en vivo que alimenta a
[las apps del Mundial](/apps/deporte/), con correcciones firmadas por el
administrador.

**`dotrino-feedback`** — repo
[`dotrino-feedback`](https://github.com/imdotrino/dotrino-feedback)

Reenvía por correo los formularios públicos (el «solicita una app» del home). Es
un *Worker*, no guarda nada.

## Automatización

**`dotrino-social-bot`** — repo
[`dotrino-social-bot`](https://github.com/imdotrino/dotrino-social-bot)

Publica las novedades de Dotrino. El orden importa: **primero publica en
[Eco](/apps/eco/)**, como un aparato más del acta, y después comparte en las
redes el enlace de ese contenido.

**`dotrino-bots`** — repo
[`dotrino-bots`](https://github.com/imdotrino/dotrino-bots)

Bots sin interfaz que se comportan como usuarios reales (chat, ajedrez, cuarenta)
para probar el ecosistema de punta a punta.

**`dotrino-deploy-listener`** — repo
[`dotrino-deploy-listener`](https://github.com/imdotrino/dotrino-deploy-listener)

El enganche de despliegue por servidor: recibe el aviso de un `git push`
(autenticado con HMAC) y actualiza el servicio.

## Para conectar Dotrino con lo que ya tienes

**`dotrino-sso`** — repo
[`dotrino-sso`](https://github.com/imdotrino/dotrino-sso): usar la identidad de
Dotrino para entrar a aplicaciones ajenas.
**`dotrino-ad-integration`** — repo
[`dotrino-ad-integration`](https://github.com/imdotrino/dotrino-ad-integration):
el camino inverso, que el directorio de la empresa respalde al usuario.

Los dos son, por ahora, **documentos de diseño**: ver
[Documentos de diseño](/desarrollo/diseno/).
