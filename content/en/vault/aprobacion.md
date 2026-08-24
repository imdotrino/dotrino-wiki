---
title: Phone approval
description: A device flagged with +approval only receives private keys when you approve it from the Dotrino app.
---

# Phone approval

Releasing private keys to a device can require the **go-ahead of another device**:
your phone, with the Dotrino app. It is a property **of the device, not of the
drawer** — the unattended server doesn't ask; the PC you work on does.

By default **nobody asks**. It is set at enrollment, or later like any permission:

```sh
dotrino-vault caps <phone-ID> +aprueba          # WHO approves (never travels in a QR)
dotrino-vault pair --service claude --approval  # whoever enters will ask
dotrino-vault caps <ID> +permiso | -permiso     # set or unset it later
```

## What it looks like

```sh
npx -y @dotrino/env run --ns claude -- node my-script.js
# [dotrino-env] waiting for approval on your phone…
```

The vault records the request and **rings your phone** (native notification). At
[vault.dotrino.com/approvals](https://vault.dotrino.com/approvals) you see *who*
asks for *which drawer* and decide: **Approve** delivers the keys — to the asking
process, in memory only — and **Deny** cuts it off with no retries. Unattended
requests expire after 5 minutes. Everything lands in the audit log.

It asks **on every request** — which for a well-built service is **once per boot**:
ask on start, keep the keys in memory, don't ask again until the next restart.

## What it is really for

With your PC compromised, an intruder no longer finds credentials to copy: they can
only *ask* — and every ask goes through your hand, rings in your pocket and is
written down.
