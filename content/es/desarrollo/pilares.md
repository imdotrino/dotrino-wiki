---
title: Los pilares (@dotrino/*)
description: Identidad, transporte, almacenamiento, reputación y descubrimiento: los paquetes compartidos que toda app del ecosistema usa en vez de reimplementar.
---

# Los pilares

Toda app del ecosistema resuelve identidad, red, almacenamiento y reputación con
**los mismos paquetes**. No se reimplementa el protocolo dentro de una app: eso
duplica los errores y parte el ecosistema en dialectos.

Si a un pilar le falta algo, se le añade **al pilar** y se publica una versión.

## Identidad

**`@dotrino/identity`** — repo
[`dotrino-identity`](https://github.com/imdotrino/dotrino-identity)

La única fuente de identidad y de firma. Clave ECDSA P-256 que **no sale del
aparato**, firma de datos, desafío/respuesta, contactos, cifrado de punta a punta y
los perfiles del aparato. Es la contraparte en el navegador de
[la bóveda](/vault/modelo/).

Trae también un subcamino barato, `@dotrino/identity/avatar`, para el identicon
determinista de una clave pública.

## Transporte

**`@dotrino/proxy-client`** — repo
[`dotrino-proxy-client`](https://github.com/imdotrino/dotrino-proxy-client)

El cliente de `proxy.dotrino.com`: mensajería por clave pública, canales, WebRTC,
Web Push y **cola de mensajes sin conexión** (24 h). La conexión se identifica con
la llave del vault mediante un sobre firmado, así que la identidad de red es la
misma que la de firma.

## Almacenamiento

**`@dotrino/store`** — repo
[`dotrino-store`](https://github.com/imdotrino/dotrino-store)

El almacén del usuario, obligatorio en toda app. Vive en el aparato (IndexedDB) y
sincroniza cifrado, así que **responde sin conexión**: ahí va lo que la app
necesita para arrancar, las preferencias y los índices que crecen.

**`@dotrino/content-client`** — repo
[`dotrino-content`](https://github.com/imdotrino/dotrino-content)

El otro almacén: los **bytes**. Guarda cualquier archivo del usuario en un nodo
suyo, direccionado por el hash del contenido. Se **suma** al store, no lo
sustituye — una app tiene que seguir funcionando con el nodo apagado.

## Reputación y descubrimiento

**`@dotrino/reputation`** — repo
[`dotrino-reputation`](https://github.com/imdotrino/dotrino-reputation)

Atestaciones firmadas y `aggregateTrust`: la red de confianza que hace que pese lo
que dicen las personas en las que confías y no el ruido de cuentas nuevas. Cada eje
de una calificación es **una atestación aparte**.

**`@dotrino/geo`** — repo
[`dotrino-geo`](https://github.com/imdotrino/dotrino-geo)

El índice de puntos georreferenciados: marcas firmadas con caducidad y consulta
por radio. Es lo que hace posible «cerca de mí» en [Eco](/apps/eco/),
[Trueque](/apps/trueque/) y [here](/apps/here/).

**`@dotrino/verifier`** — repo
[`dotrino-verifier`](https://github.com/imdotrino/dotrino-verifier)

Verificación de identidad: prueba pública en los dos sentidos (un sitio web, una
cuenta de GitHub) más una atestación firmada por un verificador tercero federado.
Verificado no es lo mismo que revelado. **Escrito y probado, aún sin publicar.**

## Para servicios y aparatos

**`@dotrino/remote-agent`** — repo
[`dotrino-remote-agent`](https://github.com/imdotrino/dotrino-remote-agent)

Lo que necesita un programa que corre fuera del navegador para ser **un aparato
más** del acta: enrolarse, identificarse, cifrar, renovar su certificado y ser
revocado. Si estás escribiendo un agente, es esto y no otra cosa.

**`@dotrino/lobby`** — repo
[`dotrino-lobby`](https://github.com/imdotrino/dotrino-lobby)

Salas, asientos, turnos y emparejamiento para los juegos, sin interfaz. Reusa
transporte, identidad y reputación.
