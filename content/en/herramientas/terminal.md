---
title: Terminal — your computer from your phone
description: Open a console on your own machine from another device's browser, end-to-end encrypted.
---

# Terminal — your computer from your phone

[`terminal.dotrino.com`](https://terminal.dotrino.com/) · repo
[`dotrino-terminal`](https://github.com/imdotrino/dotrino-terminal)

Terminal opens a console **on your own computer** from another device's browser:
your phone, a tablet, the laptop in the living room.

**Only** a device you have linked gets in, and everything typed travels end-to-end
encrypted.

## What you need

1. [The vault](/en/vault/instalacion/) installed on one of your computers. It does not
   have to be the one you want to reach.
2. The agent running on the computer you want to reach:

```
npx @dotrino/terminal-agent
```

   Or with [the installer](/en/herramientas/instalar/), if you would rather not
   depend on `npx`.

   The first time it asks you to **link** it to your vault: on the vault's computer run
   `dotrino-vault pair`, paste the invitation into the agent and approve the code it
   shows with `dotrino-vault approve <code>`. You only do this once.

3. The device you are connecting from, [linked to your vault](/en/vault/emparejar/).

## Getting in

Open `terminal.dotrino.com` on the other device. Your computers with the agent
**running** show up in the list on their own, with the name you gave them when you
approved them: pick one and you are in.

If it does not show up, the agent is most likely not running. A computer that is off
stays out of the list until its agent starts again.

## Closing the browser does not close the console

Whatever you leave running keeps running: if you reload, close the browser or lose the
connection, the console stays alive on your computer. When you come back, the tabs reopen
on their own (if you only reloaded), or the app offers to **resume** the consoles that are
still open, from this device or another one. You see them exactly as they were.

To really close a console, press the **×** on its tab. If the agent restarts, the consoles
are lost.

## Your computer's windows

Dotrino Terminal is also the terminal of the computer itself (Linux and macOS). Every window
you open there is a console you can **pick up from your phone**, and the other way round.

Two ways to open windows:

- **The desktop app**: download it from
  [the releases page](https://github.com/imdotrino/dotrino-terminal/releases) (on Linux the
  `.deb` or the `.tar.gz`; on macOS the `.zip`). It needs the client installed:

```
npm install -g @dotrino/terminal-agent
```

- **Inside the terminal you already use**: type `dotrino-terminal` and that window becomes a
  Dotrino console.

In the app, the **Profile** menu lists the computer's profiles (each linked to an account, or
local only). **Picking another one closes that window's console and opens a new one** in the
other profile, like closing a terminal and opening another. **Enroll…** links a new profile
right there: it asks for a name and the invitation from `dotrino-vault pair`, and shows the
code to approve. File → New window (Ctrl+Shift+N) opens another one with the same profile.

Closing a window closes its console, like any terminal. To keep it alive and come back
later, press **Ctrl+]** then **d**. `dotrino-terminal ls` lists open consoles and
`dotrino-terminal attach <id>` takes you back to one.

If someone enters one of the computer's windows from another device, the window rings and
says so in its title. On `terminal.dotrino.com` those consoles show up as "window open on
the machine".

## More than one agent on the same computer

Each agent has a **name** and its own link. If you give it none it is called
`default`, which is the usual case. To run another one on the same computer, give it
its own name; it is linked once and shows up separately in the list:

```
npx @dotrino/terminal-agent --name home
npx @dotrino/terminal-agent list      # the ones on this computer
```

Starting the same agent twice is not allowed: the second one stops and tells you.

Links are stored in `~/.dotrino/agent/terminal-agent/<name>/`. That folder holds the
computer's key: look after it like an SSH key.

## The other path: this device is the vault

If you have no vault installed yet, the computer itself can act as the vault for
this: the app shows a **QR code and a pairing code** that you confirm from the
other device. It is the same pattern as everywhere in the ecosystem —
[the device fills the role when there is no dedicated piece](/en/empezar/identidad/)—
and an installed vault only adds staying available with the app closed.
