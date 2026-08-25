---
title: How to use your account on other devices
description: Every browser starts with its own account; to have the same one on your phone and your computer, your vault connects the devices.
---

# How to use your account on other devices

Every browser **starts with its own account** (that is why there is no sign-up). Open
Dotrino on your phone and on your computer and, to begin with, those are two
different accounts.

To make them **the same one**, something has to say "these devices are mine". That is
**your vault**: a program running on your own machine that holds the key ruling your
account and authorises the other devices. No server of ours in between: the key is
yours and it stays at home.

## The three steps

1. **Install the vault** on a machine of your own (your computer, or a small box that
   is always on). There are three paths — Linux, one command, or Docker — in
   [Install: pick your path](/en/vault/instalacion/). It opens no ports and you never
   touch your router.
2. **Connect the device.** The vault shows a **QR code** (or a link, if you'd rather
   paste it). Scan it from the device you want to add.
3. **Confirm the number.** The device shows **six digits** on its screen. You type
   them into the vault, and that device is now part of your account.

That number is what makes the connection safe: **it never travels over the network**,
so you must have actually looked at the device's screen. Every step is detailed in
[Pairing a device](/en/vault/emparejar/).

## What changes afterwards

- **It is one account**: same name, same profile, same contacts and same reputation
  on all your devices.
- **Your things sync** through the vault, end-to-end encrypted. Whoever carries them
  cannot open them.
- **You can remove a device whenever you want.** Lose your phone and you retire it
  from the vault; that device wipes itself.

## When connecting, you choose what happens to what was already there

The vault asks first, and there are exactly two paths:

- **The device joins an account in the vault** (an existing one or a new one). The
  device gets a fresh key; nothing in the vault is overwritten.
- **The vault adopts the device's account**: the account stays the same one for
  everybody, and what changes is who rules it.

**Merging two accounts into one does not exist.** If you had things on both sides,
one account lives on and the other stays as it was.

## If you'd rather not install anything

Then each device keeps its own account, and that is fine: the apps work just the
same. What you share travels by link, and you can pass things between your own
devices exactly as you would to somebody else.
