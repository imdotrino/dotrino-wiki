---
title: Aprobación desde el teléfono
description: Un aparato marcado con +permiso solo recibe claves privadas cuando lo apruebas desde la app de Dotrino.
---

# Aprobación desde el teléfono

Liberar claves privadas a un aparato puede exigir el **visto bueno de otro aparato**:
tu teléfono, con la app de Dotrino. Es una propiedad **del aparato, no del cajón** —
el servidor desatendido no pide; la PC en la que trabajas, sí.

Por defecto **nadie pide**. Se fija al enrolar, o después como un permiso más:

```sh
dotrino-vault caps <ID-del-teléfono> +aprueba     # QUIÉN aprueba (no viaja en un QR)
dotrino-vault pair --service claude --approval    # el que entre pedirá permiso
dotrino-vault caps <ID> +permiso | -permiso       # ponerlo o quitarlo después
```

## Cómo se ve

```sh
npx -y @dotrino/env run --ns claude -- node mi-script.js
# [dotrino-env] waiting for approval on your phone…
```

La bóveda apunta el pedido y **timbra tu teléfono** (aviso nativo). En
[vault.dotrino.com/approvals](https://vault.dotrino.com/approvals) ves *quién* pide
*qué cajón* y decides: **Aprobar** entrega las claves —al proceso que pidió, solo en
memoria— y **Denegar** corta sin reintentos. Lo que nadie atiende vence a los 5
minutos. Todo queda en la bitácora (`dotrino-vault activity`).

Pide **en cada petición** — que para un servicio bien hecho es **una por arranque**:
pide al iniciar, se queda las claves en memoria y no vuelve a pedir hasta el
siguiente reinicio.

## Para qué sirve de verdad

Con tu PC comprometida, un intruso ya no encuentra credenciales que copiar: solo
puede *pedir* — y cada pedido pasa por tu mano, suena en tu bolsillo y queda anotado.
