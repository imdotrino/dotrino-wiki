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
*qué cajón*, **qué comando está ejecutando y desde qué carpeta**, y decides:
**Aprobar** entrega las claves —al proceso que pidió, solo en memoria— y **Denegar**
corta sin reintentos. Lo que nadie atiende vence a los 5 minutos. Todo queda en la
bitácora (`dotrino-vault activity`).

## Qué comando está pidiendo

Saber que «el aparato 904C-1002 pide el cajón claude» no alcanza para decidir: no
distingue el arranque que acabas de lanzar de cualquier otra cosa de esa máquina. Así
que el pedido dice **el comando entero y la carpeta desde la que corre**:

```
Está ejecutando   node server.js --port 8080
desde             /srv/mi-app
                  comprobado en la máquina de la bóveda
```

Esa última línea importa. Si quien pide está en la **misma máquina que la bóveda**,
ella no se lo cree: lo lee del sistema (del propio proceso) y lo compara con lo que
dijo. Si no cuadra, el pedido se deniega. Si pide desde **otra máquina** no hay nada
que leer, y entonces lo verás marcado como *lo dice el propio aparato, sin comprobar*.

El comando y la carpeta **no viajan a la vista de nadie**: van cifrados desde la
bóveda hasta tu teléfono, y solo los abre la llave de tu aparato.

## Aprobar vale una hora, y se renueva

**Aprobar no es solo esta vez.** Ese mismo comando, desde esa misma carpeta, entra
durante **una hora — que vuelve a empezar cada vez que lo pide**. Un servicio que
sigue pidiendo la mantiene viva mientras viva él; una hora entera sin pedir y caduca.

Cualquier otra cosa vuelve a preguntarte: cambia un argumento, cambia la carpeta, y
es otro comando. En la misma pantalla, debajo de los pedidos, ves **lo que está
aprobado ahora mismo** y lo puedes quitar de un botón. Reiniciar la bóveda las borra
todas.

Y si el pedido **no dice** qué está ejecutando —hoy, cuando llega desde otra máquina—
no hay nada con lo que emparejarlo: ese seguirá preguntando en cada petición.

## Para qué sirve de verdad

Con tu PC comprometida, un intruso ya no encuentra credenciales que copiar: solo
puede *pedir* — y cada pedido pasa por tu mano, suena en tu bolsillo y queda anotado.
