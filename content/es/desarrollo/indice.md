---
title: El índice y las pruebas
description: Dónde se mira el estado real del ecosistema y cómo se prueban las piezas juntas.
---

# El índice y las pruebas

## El índice del ecosistema

[`index.dotrino.com`](https://index.dotrino.com/) · repo
[`dotrino-index`](https://github.com/imdotrino/dotrino-index)

El índice mide el ecosistema entero y lo publica: qué versión de cada pilar pide
cada app, qué convención le falta a quién, quién consume qué, y **qué tan atrás
quedó lo que cuenta cada repo** frente a lo que hace su código (en rojo a los 30
días).

Se regenera, no se edita a mano:

```
node dotrino-index/indice.mjs          # informe local (INDICE.md + ECOSISTEMA.json)
node dotrino-index/indice.mjs --web    # la página pública
```

Mide **los repos que tiene en el disco** y conserva los demás con la fecha de su
última medición, así que se genera sumando. Por eso conviene traer los cambios del
repo antes de generar.

Mírala antes de subir la versión de un pilar o de tocar varias apps a la vez: es
la lista de quién se va a enterar.

## Las pruebas de punta a punta

Repo [`dotrino-test`](https://github.com/imdotrino/dotrino-test)

Aquí se prueba el ecosistema **junto**, no cada pieza por su lado. Cada pieza
corre en su propio contenedor —su caja— y se le habla como le hablaría cualquier
otra: la bóveda al proxy, un aparato a la bóveda, un navegador de verdad a la app.

Cubre tres niveles: el protocolo, cada aparato contra el binario real, y la
interfaz con un navegador automatizado.

Es donde se escribe **cada invariante de seguridad** que no queremos volver a
romper: si algo se rompió una vez en silencio, aquí queda un test que grita.
