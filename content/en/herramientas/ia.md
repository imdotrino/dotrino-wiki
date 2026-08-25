---
title: AI assistants on your machine
description: Dotrino IA, the Telegram bot and Middlebot — talking to an AI that runs on your computer, without letting out what should not leave.
---

# AI assistants on your machine

Three pieces around the same idea: the assistant works **on your computer**, not
inside a service's account, and you decide what leaves it.

## Dotrino IA — from the browser

[`ia.dotrino.com`](https://ia.dotrino.com/) · repo
[`dotrino-ia`](https://github.com/imdotrino/dotrino-ia)

Talk from your phone to the assistant running on your own computer, with
conversation memory and end-to-end encryption. Only a device you have
[linked to your vault](/en/vault/emparejar/) gets in.

It needs the same as [Terminal](/en/herramientas/terminal/): the vault installed
and the agent running on the target machine.

## Telegram bot — from the chat you already use

[`telegram-bot.dotrino.com`](https://telegram-bot.dotrino.com/) · repo
[`dotrino-telegram-claude-bot`](https://github.com/imdotrino/dotrino-telegram-claude-bot)

The same assistant, reached over Telegram. It runs on your machine, remembers the
conversation and **only answers you**.

The interesting part is how it connects: no ports to open and no router to
configure, because it goes out through [the tunnel](/en/herramientas/tunel/).

> **Before granting it broad permissions**, read the warning on its page: an
> assistant that can run commands does exactly what it is asked, and that includes
> what you did not mean.

## Middlebot — keeping in what should stay in

[`middlebot.dotrino.com`](https://middlebot.dotrino.com/) · repo
[`dotrino-middlebot`](https://github.com/imdotrino/dotrino-middlebot)

Middlebot sits **in the middle**: the assistant on your computer never talks
straight to an AI. What you ask goes first through another machine you designate,
which blanks out your company's sensitive parts, asks when in doubt and keeps a
record of what happened.

It is a product promise that is **not built yet**: the specification is written and
its page is published. See [Dotrino Enterprise](/en/empresa/que-es/).
