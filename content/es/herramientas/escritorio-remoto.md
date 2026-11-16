---
title: Escritorio remoto — tu escritorio desde otro aparato
description: Usa las ventanas de tu computadora desde el navegador de otro aparato tuyo, nítido, ligero y cifrado de punta a punta.
---

# Escritorio remoto — tu escritorio desde otro aparato

[`remote-desktop.dotrino.com`](https://remote-desktop.dotrino.com/) · repo
[`dotrino-remote-desktop`](https://github.com/imdotrino/dotrino-remote-desktop)

> **En desarrollo.** Por ahora, para computadoras con **Linux** (X11 o Wayland).

Escritorio remoto te deja usar las ventanas **de tu propia computadora** desde el navegador de
otro aparato: el teléfono, una tablet, otra computadora.

No envía una foto de la pantalla. Envía **lo que hay en ella**: las ventanas, los botones, los
menús y los textos, con su sitio. Tu aparato lo dibuja. Por eso el texto se lee perfecto y
funciona con una conexión lenta. Lo que tocas y escribes vuelve a la computadora como si lo
hicieras allí.

Entra **solo** un aparato que tú hayas enlazado, y todo viaja cifrado de punta a punta.

## Lo que se ve y lo que no

- Las ventanas de la mayoría de programas de escritorio (el explorador de archivos, los menús, los
  ajustes, los diálogos) se ven completas.
- **Chrome, VS Code, Slack** y otros programas parecidos solo se ven por dentro si se abrieron
  **después** de arrancar el agente: el agente les pide a los programas que digan qué tienen en
  pantalla, y estos solo lo dicen si se lo piden al abrirse. Si ya estaban abiertos, ciérralos y
  ábrelos otra vez.
- Una **foto, un video, un dibujo o un juego** salen como un recuadro con su nombre: se ve que
  están, pero no su contenido. Poder verlos llegará más adelante.

## Instalar

En la computadora que quieres usar, con [Node](https://nodejs.org/) instalado:

```
npm install -g @dotrino/remote-desktop-agent
dotrino-remote-desktop-agent
```

El agente tiene que correr **dentro de tu sesión de escritorio** (la que ves en pantalla), no
como un servicio del sistema: lee las ventanas de esa sesión.

## Qué hace falta

1. [La bóveda](/vault/instalacion/) instalada en alguna de tus computadoras. No tiene que ser la
   misma que quieres usar.
2. El agente corriendo en la computadora que quieres usar: `dotrino-remote-desktop-agent`.

   La primera vez te pide **enlazarla** a tu bóveda: en la computadora de la bóveda corre
   `dotrino-vault pair`, pega la invitación en el agente y aprueba con
   `dotrino-vault approve <código>` el código que te muestra. Solo se hace una vez.

3. El aparato desde el que entras, [enlazado a tu bóveda](/vault/emparejar/).

## Cómo se entra

Abre [`remote-desktop.dotrino.com/desktops`](https://remote-desktop.dotrino.com/desktops) en el otro
aparato. Tus computadoras con el agente **encendido** aparecen en la lista con el nombre que les
pusiste al aprobarlas: eliges una y ves su escritorio.

- Arriba salen las ventanas abiertas: toca una para verla en grande; **Todo** enseña el
  escritorio entero.
- Un toque es un clic. Con ratón, el clic derecho y la rueda funcionan como en la computadora.
- **Teclado** abre el teclado para escribir en la ventana que tenga el foco.

Para ver cómo se ve sin conectar nada: [el ejemplo](https://remote-desktop.dotrino.com/desktops?demo).

## Que arranque al iniciar sesión

Añade `dotrino-remote-desktop-agent` a los programas que arrancan al iniciar sesión de tu
escritorio (en XFCE: *Configuración → Sesión e inicio → Inicio automático de aplicaciones*).

## Actualizaciones

El agente se actualiza solo y te avisa en tu bóveda cuando lo hace. Si prefieres aprobar cada
actualización: `dotrino-remote-desktop-agent update --approval on`. Nunca se reinicia mientras
alguien está mirando el escritorio.

## Ver qué aparato es

```
dotrino-remote-desktop-agent info
```

Enseña su ID (el mismo que sale en `dotrino-vault members`), su bóveda y sus permisos.
