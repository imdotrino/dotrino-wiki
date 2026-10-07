---
title: Asistentes de IA en tu máquina
description: Dotrino IA, el bot de Telegram y Middlebot: hablar con una IA que corre en tu computadora, sin que salga lo que no debe.
---

# Asistentes de IA en tu máquina

Tres piezas alrededor de la misma idea: el asistente trabaja **en tu computadora**,
no en la cuenta de un servicio, y tú decides qué sale de ahí.

## Dotrino IA — desde el navegador (retirada)

> **Retirada el 2026-10-07.** [Terminal](/herramientas/terminal/) ya hace lo mismo y más:
> consolas, agentes de IA en tu computadora y versión nativa. `ia.dotrino.com` solo
> muestra el aviso y `@dotrino/ia-agent` no recibe más versiones.

[`ia.dotrino.com`](https://ia.dotrino.com/) · repo
[`dotrino-ia`](https://github.com/imdotrino/dotrino-ia)

Habla desde el teléfono con el asistente que corre en tu propia computadora, con
memoria de la conversación y cifrado de punta a punta. Entra solo un aparato que
hayas [enlazado a tu bóveda](/vault/emparejar/).

Necesita lo mismo que [Terminal](/herramientas/terminal/): la bóveda instalada y
el agente corriendo en la máquina de destino. El asistente es **Claude Code**, así
que esa máquina tiene que tenerlo instalado y con tu sesión iniciada.

```
cd ~/mi-proyecto
npx @dotrino/ia-agent
```

La primera vez te pide enlazarlo a tu bóveda, igual que la terminal. Luego abre
`ia.dotrino.com` en el teléfono: la máquina aparece sola mientras el agente esté
corriendo.

### En qué carpeta trabaja

El asistente trabaja en la **carpeta desde la que lanzas el agente**. Al arrancar te
dice cuál es (`trabaja en: …`). Para elegir otra sin moverte, usa `IA_CWD`:

```
IA_CWD=~/otro-proyecto npx @dotrino/ia-agent
```

### Un agente por proyecto

Cada agente tiene un **nombre** y su propio enlace, igual que en
[Terminal](/herramientas/terminal/). Para tener dos proyectos a la vez, lanza cada
uno con su nombre; cada uno se enlaza una vez y aparece aparte en la lista:

```
cd ~/proyecto-a && npx @dotrino/ia-agent --name proyecto-a
cd ~/proyecto-b && npx @dotrino/ia-agent --name proyecto-b
npx @dotrino/ia-agent list
```

Al aprobarlos en la bóveda, ponles nombres que reconozcas: son los que verás en el
teléfono.

### Qué puede hacer el asistente

Tal como viene, el asistente puede **leer y contestar**, pero no cambiar nada: lo
que necesite permiso (editar archivos, ejecutar comandos) se le niega, porque no
hay nadie delante para aprobarlo. La excepción es lo que ya tengas permitido en la
configuración de Claude Code de esa máquina.

> **Si le das permiso para todo** (`CLAUDE_FLAGS=--dangerously-skip-permissions`),
> hará lo que se le pida sin preguntar, incluido borrar archivos. Cualquier aparato
> de tu cuenta que abra el chat puede pedírselo. Si lo haces, córrelo aislado:
> `npx @dotrino/ia-agent init-podman` (o `init-docker`) prepara un contenedor que
> solo ve la carpeta del proyecto.

## Bot de Telegram — desde el chat de siempre

[`telegram-bot.dotrino.com`](https://telegram-bot.dotrino.com/) · repo
[`dotrino-telegram-claude-bot`](https://github.com/imdotrino/dotrino-telegram-claude-bot)

El mismo asistente, pero se le habla por Telegram. Corre en tu máquina, recuerda
la conversación y **solo te responde a ti**.

Lo interesante es cómo se conecta: no hay que abrir puertos ni tocar el router,
porque sale por [el túnel](/herramientas/tunel/).

> **Antes de darle permisos amplios**, lee la advertencia de su página: un
> asistente que puede ejecutar comandos hace exactamente lo que se le pide, y eso
> incluye lo que no querías.

## Middlebot — que no salga lo que no debe

[`middlebot.dotrino.com`](https://middlebot.dotrino.com/) · repo
[`dotrino-middlebot`](https://github.com/imdotrino/dotrino-middlebot)

Middlebot se pone **en medio**: el asistente de tu computadora no le habla directo
a ninguna IA. Lo que preguntas pasa antes por otra máquina que tú designas, que
tacha lo sensible de tu empresa, pregunta cuando hay dudas y deja constancia de lo
que pasó.

Es una promesa de producto **todavía sin programar**: está escrita la
especificación y publicada su página. Ver
[Dotrino Enterprise](/empresa/que-es/).
