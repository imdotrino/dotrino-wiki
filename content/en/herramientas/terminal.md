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
