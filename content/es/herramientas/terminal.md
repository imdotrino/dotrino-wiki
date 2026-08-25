---
title: Terminal — tu computadora desde el teléfono
description: Abre una consola de tu propia máquina desde el navegador de otro aparato, cifrada de punta a punta.
---

# Terminal — tu computadora desde el teléfono

[`terminal.dotrino.com`](https://terminal.dotrino.com/) · repo
[`dotrino-terminal`](https://github.com/imdotrino/dotrino-terminal)

Terminal abre una consola **de tu propia computadora** desde el navegador de otro
aparato: el teléfono, una tablet, la laptop de la sala.

Entra **solo** un aparato que tú hayas enlazado, y todo lo que se escribe viaja
cifrado de punta a punta.

## Qué hace falta

1. [La bóveda](/vault/instalacion/) instalada en la computadora a la que quieres
   entrar.
2. El agente corriendo en esa computadora:

```
npx @dotrino/terminal-agent
```

   O con [el instalador](/herramientas/instalar/), si prefieres no depender de
   `npx`.

3. El aparato desde el que entras, [enlazado a tu bóveda](/vault/emparejar/).

## Cómo se entra

Abre `terminal.dotrino.com` en el otro aparato. Si el aparato ya está enlazado,
tu máquina aparece sola en la lista: la eliges y ya estás dentro.

## La otra vía: este aparato es la bóveda

Si todavía no tienes bóveda instalada, la propia computadora puede hacer de
bóveda para esto: la app te muestra un **código QR y un código de emparejamiento**
que confirmas desde el otro aparato. Es el mismo patrón de todo el ecosistema —
[el aparato cumple el rol cuando no hay una pieza dedicada](/empezar/identidad/)—
y la bóveda instalada solo añade que siga disponible con la app cerrada.
