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

**`@dotrino/webrtc`** — repo
[`dotrino-webrtc`](https://github.com/imdotrino/dotrino-webrtc)

WebRTC en JavaScript puro, **solo canales de datos**: lo que deja que dos máquinas
tuyas se hablen directo en vez de dar la vuelta por internet. No se importa a mano:
lo carga `@dotrino/proxy-client` si está instalado. Va en `optionalDependencies` de
la pieza de Node, nunca en una app de navegador, que ya trae WebRTC.

## IA con la llave del usuario

**`@dotrino/ai`** — repo
[`dotrino-ai`](https://github.com/imdotrino/dotrino-ai)

Hablar con un modelo de IA **con la llave del usuario**, directo desde su navegador o su PC
al proveedor que él eligió: no pasa por ningún servidor de Dotrino. Sin dependencias.
OpenAI y compatibles (DeepSeek, Groq, OpenRouter, Ollama), Claude y Gemini: preguntar,
pedir JSON y pasar audio a texto. Los errores traen un código distinto según qué hay que
hacer (llave rechazada, tope de uso, sin conexión). Lo usa
[Expenses](/apps/gastos/).

**`@dotrino/dictation`** — repo
[`dotrino-dictation`](https://github.com/imdotrino/dotrino-dictation)

Dictar en vez de escribir: `<dotrino-dictation>` es un botón de micrófono que devuelve texto.
La app elige adónde va la voz: a Whisper **en el propio aparato** (el modelo se descarga una
vez, ~77 MB, y la voz no sale de ahí) o al proveedor de IA del usuario con su llave
(`@dotrino/ai`). Nunca usa el dictado del navegador, que manda la voz a Google o a Apple. Lo
usa [Expenses](/apps/gastos/).

## Cobros

**`@dotrino/pay`** — repo
[`dotrino-pay`](https://github.com/imdotrino/dotrino-pay)

Los cobros del ecosistema en un solo sitio, para que cada servicio que cobra no escriba su
propio cliente del proveedor. Hoy trae PayPal: pago suelto, suscripción, devolver un cobro y
comprobar que un aviso lo mandó PayPal; y el precio con impuestos (`priceWithTax`). Los fallos
llevan un código que dice qué hacer (`payment-declined` es del comprador, `provider-error` del
proveedor). Lo usan [dotrino-names](https://github.com/imdotrino/dotrino-names) y
[dotrino-accounts](https://github.com/imdotrino/dotrino-accounts). Solo en el servidor: la
llave del proveedor nunca va al navegador.

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

**`@dotrino/opaque`** — repo
[`dotrino-opaque`](https://github.com/imdotrino/dotrino-opaque)

Comprobar una contraseña **sin que quien la comprueba la vea nunca**. Es lo que hay
detrás de entrar con usuario y contraseña en un
equipo prestado. Todo entra y sale en base64url:

```
import { client, server } from '@dotrino/opaque'

const l1 = client.loginStart({ password })
const s1 = server.loginStart({ setup, record, request: l1.request, credentialId, identifiers })
const l2 = client.loginFinish({ state: l1.state, response: s1.response, password, identifiers })
const s2 = server.loginFinish({ state: s1.state, finalization: l2.finalization, identifiers })
```

Una contraseña equivocada, un usuario que no existe y un mensaje alterado dan el
mismo error (`login-failed`), a propósito. El paquete no escribe criptografía
propia: compila una librería auditada desde su código fuente.

## Versiones

Cómo dice cada pieza qué versión es y cómo se entera de que hay una nueva:
[Versiones y actualizaciones](/desarrollo/versiones/).
