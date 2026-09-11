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
[vault.dotrino.com/approvals](https://vault.dotrino.com/approvals) you see *who* asks
for *which drawer*, **what command is running and from which folder**, and decide:
**Approve** delivers the keys — to the asking process, in memory only — and **Deny**
cuts it off with no retries. Unattended requests expire after 5 minutes. Everything
lands in the audit log.

## What command is asking

"Device 904C-1002 asks for the claude drawer" is not enough to decide on: it does not
tell apart the boot you just launched from anything else on that machine. So the
request carries **the whole command and the folder it runs from**:

```
Running   node server.js --port 8080
from      /srv/my-app
          checked on the vault machine
```

That last line matters. If the asker is on the **same machine as the vault**, she does
not take its word for it: she reads it from the system (from the process itself) and
compares. If they do not match, the request is denied. From **another machine** there
is nothing to read, and you will see it marked as *as claimed by the device, unchecked*.

The command and the folder **are not out in the open**: they travel encrypted from the
vault to your phone, and only your device's key opens them.

## Approving is good for an hour, and it renews

**Approving is not just this once.** That same command, from that same folder, gets
through for **an hour — which starts over every time it asks**. A service that keeps
asking keeps it alive for as long as it lives; a full hour without asking and it
expires.

Anything else asks you again: change an argument, change the folder, and it is another
command. On the same screen, below the requests, you see **what is approved right now**
and you can remove it with one button. Restarting the vault clears them all.

And a request that **does not say** what it is running — today, when it comes from
another machine — has nothing to match against: that one keeps asking every time.

## What it is really for

With your PC compromised, an intruder no longer finds credentials to copy: they can
only *ask* — and every ask goes through your hand, rings in your pocket and is
written down.
