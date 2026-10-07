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

1. [La bóveda](/vault/instalacion/) instalada en alguna de tus computadoras. No tiene
   que ser la misma a la que quieres entrar.
2. El agente corriendo en la computadora a la que quieres entrar:

```
npx @dotrino/terminal-agent
```

   O con [el instalador](/herramientas/instalar/), si prefieres no depender de
   `npx`.

   La primera vez te pide **enlazarla** a tu bóveda: en la computadora de la bóveda
   corre `dotrino-vault pair`, pega la invitación en el agente y aprueba con
   `dotrino-vault approve <código>` el código que te muestra. Solo se hace una vez.

3. El aparato desde el que entras, [enlazado a tu bóveda](/vault/emparejar/).

## Cómo se entra

Abre [`terminal.dotrino.com/consoles`](https://terminal.dotrino.com/consoles) en el otro aparato. Tus computadoras con el agente
**encendido** aparecen solas en la lista, con el nombre que les pusiste al
aprobarlas: eliges una y ya estás dentro.

Si no aparece, lo más probable es que el agente no esté corriendo. Una computadora
apagada no sale en la lista hasta que el agente vuelve a arrancar.

## Cerrar el navegador no cierra la consola

Lo que dejes corriendo sigue corriendo: si recargas, cierras el navegador o se te va la
conexión, la consola sigue viva en tu computadora. Al volver, las pestañas se abren solas
(si solo recargaste) o la app te ofrece **retomar** las consolas que siguen abiertas, desde
este aparato o desde otro. Las ves tal como estaban.

Para cerrar una consola de verdad, pulsa la **×** de su pestaña. Si el agente se reinicia,
las consolas se pierden.

## Las ventanas de tu computadora

Dotrino Terminal también es la terminal de la propia computadora (Linux y macOS): cada ventana
que abres ahí la puedes retomar desde aquí. Cómo se instala la app, los perfiles y cómo se
enrola uno: [Terminal en tu computadora](/herramientas/terminal-escritorio/). En la lista,
esas consolas salen como «ventana abierta en la máquina».

## Más de un agente en la misma computadora

Cada agente tiene un **nombre** y su propio enlace. Si no le das ninguno se llama
`default`, y es lo normal. Para tener otro en la misma computadora, dale su nombre;
se enlaza una vez y aparece aparte en la lista:

```
npx @dotrino/terminal-agent --name casa
npx @dotrino/terminal-agent list      # los que hay en esta computadora
```

Lanzar dos veces el mismo agente no se puede: el segundo se para y te lo dice.

Los enlaces se guardan en `~/.dotrino/agent/terminal-agent/<nombre>/`. Ahí está la
llave de esa computadora: cuídala como una llave SSH.

## Ponerle una clave a una computadora

Por defecto, cualquier aparato de tu cuenta abre consolas en tu computadora. Si quieres
que además haya que escribir una clave (un PIN o una contraseña), se pone **en la propia
computadora**:

```bash
dotrino-terminal lock            # la pone o la cambia
dotrino-terminal lock --off      # la quita
dotrino-terminal lock --status   # dice si hay
```

En la app de escritorio está en el menú **Perfil → Poner o cambiar la clave… / Quitar la
clave**. Con varios perfiles, añade `--name <nombre>`.

- La clave es del perfil: todas sus consolas la comparten.
- La piden solo los otros aparatos (el teléfono, el navegador). Las ventanas de la propia
  computadora no.
- Vale al momento, sin reiniciar nada.
- El teléfono y el navegador la recuerdan mientras sigan abiertos; al cerrarlos, se olvida.
- Tras cinco fallos seguidos hay que esperar, cada vez más.

Hace falta la versión 0.19.0 del agente (`npm install -g @dotrino/terminal-agent`) y la
0.8.9 de la app o de la web.

## La otra vía: este aparato es la bóveda

Si todavía no tienes bóveda instalada, la propia computadora puede hacer de
bóveda para esto: la app te muestra un **código QR y un código de emparejamiento**
que confirmas desde el otro aparato. Es el mismo patrón de todo el ecosistema —
[el aparato cumple el rol cuando no hay una pieza dedicada](/empezar/identidad/)—
y la bóveda instalada solo añade que siga disponible con la app cerrada.
