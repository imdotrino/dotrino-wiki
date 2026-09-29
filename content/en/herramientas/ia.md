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
and the agent running on the target machine. The assistant is **Claude Code**, so
that machine needs it installed and signed in.

```
cd ~/my-project
npx @dotrino/ia-agent
```

The first time it asks you to link it to your vault, just like the terminal. Then
open `ia.dotrino.com` on your phone: the machine shows up on its own while the agent
is running.

### Which folder it works in

The assistant works in the **folder you start the agent from**. On startup it tells
you which one (`trabaja en: …`). To pick another without moving, use `IA_CWD`:

```
IA_CWD=~/other-project npx @dotrino/ia-agent
```

### One agent per project

Each agent has a **name** and its own link, just like in
[Terminal](/en/herramientas/terminal/). To have two projects at once, start each one
with its own name; each is linked once and shows up separately in the list:

```
cd ~/project-a && npx @dotrino/ia-agent --name project-a
cd ~/project-b && npx @dotrino/ia-agent --name project-b
npx @dotrino/ia-agent list
```

When you approve them in the vault, give them names you will recognise: those are
the ones you will see on your phone.

### What the assistant can do

Out of the box the assistant can **read and answer**, but not change anything:
whatever needs permission (editing files, running commands) is refused, because
nobody is there to approve it. The exception is whatever you have already allowed in
that machine's Claude Code settings.

> **If you allow everything** (`CLAUDE_FLAGS=--dangerously-skip-permissions`), it
> will do what it is asked without asking, deleting files included. Any device of
> your account that opens the chat can ask for that. If you do it, run it isolated:
> `npx @dotrino/ia-agent init-podman` (or `init-docker`) sets up a container that
> only sees the project folder.

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
