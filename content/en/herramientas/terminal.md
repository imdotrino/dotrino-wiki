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

1. [The vault](/en/vault/instalacion/) installed on the computer you want to reach.
2. The agent running on that computer:

```
npx @dotrino/terminal-agent
```

   Or with [the installer](/en/herramientas/instalar/), if you would rather not
   depend on `npx`.

3. The device you are connecting from, [linked to your vault](/en/vault/emparejar/).

## Getting in

Open `terminal.dotrino.com` on the other device. If it is already linked, your
machine shows up in the list on its own: pick it and you are in.

## The other path: this device is the vault

If you have no vault installed yet, the computer itself can act as the vault for
this: the app shows a **QR code and a pairing code** that you confirm from the
other device. It is the same pattern as everywhere in the ecosystem —
[the device fills the role when there is no dedicated piece](/en/empezar/identidad/)—
and an installed vault only adds staying available with the app closed.
