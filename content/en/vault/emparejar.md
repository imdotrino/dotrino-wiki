---
title: Pairing a device
description: The two linking paths and the hardened pairing with a 6-digit code that never travels.
---

# Pairing a device

Linking has **exactly two paths**, and the vault asks before showing the QR:

- **The device joins one of the vault's accounts** — the one you choose, or a new one
  (`pair --new-account`). The device mints a new key; nothing of its own is overwritten.
- **The vault adopts the device's account** (`pair --adopt`): the account stays the
  same for everyone — same `profileId`, same reputation — and what changes is who seals.

**Merging two accounts does not exist**, at linking time or ever.

## The hardened pairing

1. The vault issues an **invitation** (QR + link + pasteable code, 5-minute life).
   What's inside isn't its address: it's a single-use **appointment** issued by the proxy.
2. The device redeems it, proves possession of its key by signing the enrollment, and
   **shows a 6-digit code on its screen**. The code **never travels**: only its
   cryptographic commitment does.
3. You type it into the vault (`dotrino-vault approve 123456`). The vault recomposes
   the commitment and signs the certificate **only if it matches**. Approving demands
   having gone to read the device's screen — a fake vault, which never saw the code,
   cannot enroll it.

Revocation (`revoke`) orders the device to **self-delete**, signed by the ruling key
— not by just any message.

> The why and the threats it closes:
> [`docs/pairing-protocol.md`](https://github.com/imdotrino/dotrino-vault/blob/main/docs/pairing-protocol.md)
> and [`docs/vinculacion-de-cuentas.md`](https://github.com/imdotrino/dotrino-vault/blob/main/docs/vinculacion-de-cuentas.md).
