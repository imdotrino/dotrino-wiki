---
title: Two vaults, one account
description: How a second vault joins your account with its own key, how the sealing permission is granted and revoked, and why this is how you deploy a container without ever going into it.
---

# Two vaults, one account

An account has **one** vault that seals it. If that machine is lost and nobody is left who
can sign the record, the account dies for everyone: there is no recovery phrase that brings
it back. The answer is a **second vault** inside the same account, with its own key, that
you can grant the sealing permission to.

It does two things at once, which is what makes it worth the trouble:

- **A disaster does not take the account with it.** The second one admits devices and
  changes permissions the day the first one is gone.
- **Deploying a container without going into it.** That is the path below.

## How the second one joins

The role is the opposite of pairing a device: here you do not invite, **you accept**.

```sh
# 1) on the vault that ALREADY has the account
dotrino-vault pair --save invite.dpair

# 2) on the new vault
dotrino-vault join "<the invitation>" --name "home account"
→ Type this code in the OTHER vault:   dotrino-vault approve 767527

# 3) back on the first one
dotrino-vault approve 767527
```

Two things matter here:

- **It joins with ITS own key**, not an invented device key. That is what lets you give it
  `+sealer` afterwards and have it be a real backup.
- **The code has to be typed**, as in any pairing. An intercepted invitation is not enough
  to get in.

The other account lives on the new vault as **one more profile**, in its own folder, and
becomes the active one: it is the reason you ran `join`. Accounts that machine already had
are untouched — a vault can back up several accounts without giving up its own.

With `--kms`, that profile is **born** with its disk key in the KMS
(see [The disk key](/en/vault/kms/)).

## Sealing is a permission, and it can be taken away

Joining grants no power. Like `admin`, **sealing is not paired**: it is granted by hand,
from the vault in charge, and withdrawn the same way.

```sh
dotrino-vault members                  # find the new one's ID
dotrino-vault caps 622C-A2C0 +sealer   # it can now seal the record
dotrino-vault caps 622C-A2C0 -sealer   # and now it cannot
```

**It is not a handover**: whoever is in charge stays in charge. What changes is that there
are now two keys the record recognises as sealers, and either can admit a device. What one
seals, the other adopts by the usual rules — signature, chaining, a `seq` that never goes
down, and a tie-break — so an old or foreign record rejects itself.

## Deploying a container without going into it

Here is the practical part. A container's problem is not the vault: it is **the first
device**. A vault has to *show* an invitation and *receive* a typed code, and a container
has neither a screen nor a keyboard.

With a single vault there is no way around it: somebody has to reach it (`docker exec`,
`kubectl exec`, `aws ecs execute-command`). With two there is — and it is this one, because
**everything interactive happens on the side where a human is**:

```sh
# on YOUR machine
dotrino-vault pair --save invite.dpair

# the container joins by itself at startup
docker run -d --name dotrino-vault --restart unless-stopped \
  -e AWS_REGION=us-east-1 -e DOTRINO_KMS_KEY_ID=alias/dotrino-vault \
  -e DOTRINO_JOIN_FILE=/run/secrets/invite \
  -e DOTRINO_JOIN_NAME="home account" \
  -v /mnt/dotrino-vault:/data \
  -v /path/invite.dpair:/run/secrets/invite:ro \
  ghcr.io/imdotrino/dotrino-vault

docker logs -f dotrino-vault
→ [vault] type this code in the other vault:  767527

# back on YOUR machine
dotrino-vault approve 767527
dotrino-vault caps 622C-A2C0 +sealer
```

You never go into the container.

- `DOTRINO_JOIN_FILE` points at a file, and that is the right way: `DOTRINO_JOIN` takes the
  invitation directly, but an environment variable is visible to anyone with
  `docker inspect`.
- **It is used once.** A consumed invitation is recorded: restarting the container does not
  ask to join again, even with the variable still set.
- The invitation is short-lived and single-use, and you still have to type the code on your
  machine. Leaking it is not enough to get in.

## What this does NOT solve

- **It is not a backup of your data.** It is a second key the record recognises. Secrets the
  first vault has not wrapped for it yet, it cannot read.
- **There is no merging accounts.** Not here, not anywhere else in the ecosystem.
- **It does not protect you from yourself.** Two sealers means two machines that can admit
  devices; treat the second with the same care as the first.

> The model, the tie-break between two sibling records and the brakes that are in place:
> [`docs/acta-de-perfil.md`](https://github.com/imdotrino/dotrino-vault/blob/main/docs/acta-de-perfil.md)
> and [`docs/replicas.md`](https://github.com/imdotrino/dotrino-vault/blob/main/docs/replicas.md).
