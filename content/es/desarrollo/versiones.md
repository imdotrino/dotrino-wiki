---
title: Versiones y actualizaciones
description: Cómo dice cada pieza qué versión es, dónde se registra qué versiones están rotas y cómo se entera una pieza instalada de que hay una nueva.
---

# Versiones y actualizaciones

Una incompatibilidad de versiones no suele dar un error: da **silencio**. El que
llama reintenta para siempre y el que atiende no sabe que le hablan. Tres paquetes
existen para que eso se vea.

## Decir qué versión eres

**`@dotrino/compat`** — repo
[`dotrino-compat`](https://github.com/imdotrino/dotrino-compat)

Cada pieza anuncia `{ product, version, protocol, speaks }` y quien atiende decide
si pueden trabajar. Son funciones puras, sin dependencias y sin red.

```
import { declare, check, incompatibleNotice } from '@dotrino/compat'

const mine = declare({ product: 'vaultd', version: pkg.version, protocol: 3, speaks: [2, 3] })

const v = check({ mine, theirs: p.v, broken: MY_BROKEN })
if (!v.compatible) reply(incompatibleNotice({ mine, theirs: p.v, verdict: v }))
```

- **`protocol`** es un entero que sube solo cuando cambia el formato de los
  mensajes. Decide si dos piezas se entienden.
- **`version`** identifica la build. Decide si esa build concreta está rota.
- **La incompatibilidad se avisa y se ve, pero no bloquea.** El aviso va pegado al
  error que ya ocurre.
- **La lista de rotas va por versión exacta**, nunca por rango.

La lista viaja dentro de cada versión: se cambia publicando otra, y nada en marcha
la puede cambiar a distancia.

## El registro de compatibilidad

**`@dotrino/roadmap`** — repo
[`dotrino-roadmap`](https://github.com/imdotrino/dotrino-roadmap)

Los datos: qué versión va cada pieza, qué necesita de las demás y cuáles se saben
rotas. Viven en `manifests/dotrino.json` y se editan a mano; publicar una versión
de un paquete **no** actualiza el registro.

```
import { loadManifest, currentOf, brokenOf, meets } from '@dotrino/roadmap'

const m = loadManifest()
currentOf(m, 'vaultd')
meets(m, { product: 'vaultd', peer: 'identity', version: '0.80.0' })
brokenOf(m)            // se le pasa tal cual a check() de compat
```

Antes de publicar, cada paquete cruza lo que tiene instalado contra el registro:

```
npx --yes @dotrino/roadmap@latest check
```

Falla si algo instalado está marcado roto o por debajo de lo que exige la ficha
del producto. Va en el `release.yml`, antes del paso que publica.

Los rangos admiten `0.106.2`, `0.106.0+`, `>=0.106.0`, `0.100.0 - 0.106.2` y `*`.
Sin `^` ni `~`: un rango que no se entiende es un «no».

## Enterarse de que hay versión nueva

**`@dotrino/update`** — repo
[`dotrino-update`](https://github.com/imdotrino/dotrino-update)

Todo lo que se instala mira si hay versión nueva y lo dice donde se administra.

```
import { watchForUpdate } from '@dotrino/update'            // un servicio: mira una vez al día
import { printUpdateNotice } from '@dotrino/update/notice'   // un comando: avisa al terminar
```

El aviso de un comando sale por **stderr** y se guarda un día, así que no hace
lenta la orden ni rompe una tubería.

Según cómo esté instalada la pieza:

| Cómo está instalada | Qué se usa | Qué mira |
|---|---|---|
| paquete de npm | `watchForUpdate` | la versión publicada de ese paquete |
| servicio con sus pilares en `node_modules` | `@dotrino/update/deps` (`watchDependencies`, `printDependencyNotices`) | cada `@dotrino/*` instalado contra npm |
| clon de git en un servidor | `@dotrino/update/checkout` (`watchCheckout`) | cuántos commits va por detrás de `main` |
| paquete de npm que se actualiza solo | `@dotrino/update/npm` | baja, verifica e instala |

Lo que se baja **se verifica antes de tocar el disco**. Y «no se pudo mirar» nunca
se enseña como «estás al día»: son dos respuestas distintas.

Nada de esto lo dispara Dotrino. La pieza mira el registro público por su cuenta.
