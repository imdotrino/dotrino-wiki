---
title: Control CLI
description: Every dotrino-vault command: pairing, approving, permissions, secrets, audit log.
---

# Control CLI

```sh
dotrino-vault tui                  # full-screen terminal interface
dotrino-vault status               # service state + fingerprint
dotrino-vault pair                 # pair: shows the QR (plus URL and pasteable code) and waits
dotrino-vault pair --new-account [name]   # start an EMPTY account and put the device in it
dotrino-vault pair --adopt [name]         # the other way: the vault adopts the device's account
dotrino-vault pair --service <ns>  # pair a SERVICE with access ONLY to its secrets
dotrino-vault pair --scope <list>  # the cert's PERMISSIONS: sign,read,store,secrets:<ns>
dotrino-vault pair --approval      # whoever enters will ask for your approval to receive keys
dotrino-vault pending              # which device is waiting, and how to approve it
dotrino-vault approve <code>       # approve by typing the 6 digits the device SHOWS
dotrino-vault reject  <deviceId>   # reject a pending device
dotrino-vault devices              # enrolled / revoked devices
dotrino-vault members              # the record: which keys are yours and what each can do
dotrino-vault caps <ID> ±perm      # +sign -store +read +admin +approve +approval
dotrino-vault revoke  <nonce>      # revoke a device (orders it to self-delete)
dotrino-vault activity [n]         # audit log: signatures, renewals, enrollments, rejections
dotrino-vault version              # installed version
```

`approve` takes the **code**, not the `deviceId`: the vault does not know the code —
only its commitment — and learns it when you type it.

## Variables (secrets)

```sh
dotrino-vault secret set <ns> <KEY> <value>      # SCOPE variable: shared by the ns devices
dotrino-vault secret set <ns> KEY=value KEY2=v2  # several AT ONCE (a single notice)
dotrino-vault secret import <ns> [file.env]      # same from a .env (or stdin)
dotrino-vault secret rm  <ns> <KEY>
dotrino-vault secret device set <ID> <KEY> <value>   # ONE device's variable: only it reads it
dotrino-vault secret list                        # names only; never values
```

The `ns` is lowercase (`[a-z0-9-]`, up to 32), the key `UPPERCASE_WITH_UNDERSCORES`
(up to 64), the value up to 8 KB of text.

### Load configuration TOGETHER, not one by one

Saving a variable makes the vault **notify the service**, which restarts to read it
fresh. One by one, six variables are six restarts — and the first one boots with the
configuration half done. So: `secret import <ns> .env`, or several `KEY=value` in a
single `set`. **All or nothing**: one bad line and none is saved.

### Two drawers: per scope and per device

| Where | Who reads it | For what |
|---|---|---|
| `secret set <ns> …` | every device serving that namespace | what is the same everywhere: the API key, the DB URL |
| `secret device set <ID> …` | only that device | what changes per machine: the port, the node name |

The service receives **one bundle**: the scope's with the device's **on top** — the
specific wins. Remove the device and its variables go with it.

### Public or private

Each variable is public or private, and that decides **one thing only**: whether its
value can be seen from the [remote console](https://vault.dotrino.com/devices). It is
**born private**, and private is forever (you can cover a public one; never uncover).
The service does not care: it receives both.
