---
title: Asistentes de IA en tu máquina
description: Dotrino IA, el bot de Telegram y Middlebot: hablar con una IA que corre en tu computadora, sin que salga lo que no debe.
---

# Asistentes de IA en tu máquina

Tres piezas alrededor de la misma idea: el asistente trabaja **en tu computadora**,
no en la cuenta de un servicio, y tú decides qué sale de ahí.

## Dotrino IA — desde el navegador

[`ia.dotrino.com`](https://ia.dotrino.com/) · repo
[`dotrino-ia`](https://github.com/imdotrino/dotrino-ia)

Habla desde el teléfono con el asistente que corre en tu propia computadora, con
memoria de la conversación y cifrado de punta a punta. Entra solo un aparato que
hayas [enlazado a tu bóveda](/vault/emparejar/).

Necesita lo mismo que [Terminal](/herramientas/terminal/): la bóveda instalada y
el agente corriendo en la máquina de destino.

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
