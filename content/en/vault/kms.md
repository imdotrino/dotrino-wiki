---
title: The disk key (KMS)
description: Where the key that encrypts the vault comes from, how to enrol a profile that is BORN in a KMS, and why migrating later is not the same thing.
---

# The disk key (KMS)

Everything the vault stores is encrypted on disk: the master key, your secrets, your
content. The question is **where the key that encrypts it comes from**, and there are two
answers:

| | From the machine (default) | From a KMS |
|---|---|---|
| Where it comes from | material from this machine + a salt on disk | an external service that wraps and unwraps it |
| Who can open the disk | whoever has **this** machine | whoever can **ask the KMS** |
| Moving the disk to another box | it won't open | it opens |
| A container | **it breaks** (see below) | it works |

On a desktop the first one is fine and there is nothing to do. The second exists for two
cases: **a container**, and **a company that wants the key off the box**.

## In a container, the KMS is not optional

This is the most expensive trap on this page, so it goes first.

The default key is derived from the machine, and an Alpine image **has no
`/etc/machine-id`**: it falls back to the hostname, which under Docker **is the container
id and changes on every `docker run`**. With the data on a volume or a separate disk, the
normal cycle — update the image, remove the container and bring it back up, move the disk
to another instance — used to leave the account **unreadable forever**.

Since 0.55 that no longer happens quietly: the vault stores a fingerprint of who wrote the
data and **refuses to start**, explaining why. But refusing recovers nothing. Bring the
container up with its KMS **from day one**.

## Enrolling a profile in the KMS: it is born, not migrated

**A profile with its key in the KMS has to be BORN that way.** This is not a matter of
style: if the profile already existed, its master key was already written under the old
key, and **a copy of the disk taken before the migration still opens it, forever**.
Migrating shuts the door from today on; it does not undo that the door was open.

That is why the option lives at creation time, and only there:

```sh
# a new, empty profile whose master key never exists under this machine's key
dotrino-vault profile add "company" --kms kms.json

# a place that is born waiting for the account a device brings (the adoption path)
dotrino-vault pair --adopt --kms kms.json

# a brand-new account, started here, along with the device being paired
dotrino-vault pair --new-account "company" --kms kms.json
```

If you pass `--kms` to a `pair` that does **not** create a place, the vault refuses and
says why instead of accepting it and doing nothing: that device's key was already written.

The check comes first. Before leaving a single byte on disk, the vault asks the KMS to
wrap and unwrap a probe; **if the KMS does not answer, the profile is not created** — not
even half of it. And it does not fall back to the machine key: that would create a weak
account nobody asked for, and in a container that account is lost when you recreate it.

### In a container, through environment variables

Inside the image you do not have to write any JSON: the first profile is born with its key
in the KMS as long as the variables are set at startup.

```sh
docker run -d --name dotrino-vault --restart unless-stopped \
  -e AWS_REGION=us-east-1 \
  -e DOTRINO_KMS_KEY_ID=alias/dotrino-vault \
  -v /mnt/dotrino-vault:/data ghcr.io/imdotrino/dotrino-vault
```

The variables are **only consulted when creating** a profile. One that already exists is
ruled by its own `atrest.json`, because changing its provider through a different
`docker run` would leave it unreadable — that is what `atrest rekey` is for, in the open.

## The `kms.json` file

Two ways to say where the key comes from.

**AWS KMS**, with the client that already ships inside the image (no AWS CLI needed):

```sh
-e AWS_REGION=us-east-1 -e DOTRINO_KMS_KEY_ID=alias/dotrino-vault
```

On EC2 the credentials come from the instance role; they do not go in the compose file.

**Anything else** (OpenBao, HashiCorp Vault, `gcloud`, a script of your own): a program
that meets a two-line contract — **base64 in, base64 out** — invoked with `wrap` or
`unwrap`.

```json
{
  "provider": "command",
  "label": "Company OpenBao",
  "wrap":   { "cmd": "/opt/dotrino/kek-openbao.sh", "args": ["wrap"] },
  "unwrap": { "cmd": "/opt/dotrino/kek-openbao.sh", "args": ["unwrap"] }
}
```

In a container, the same thing with `-e DOTRINO_KEK_CMD=/opt/dotrino/kek-openbao.sh`.

## Checking and changing

```sh
dotrino-vault atrest status              # where this profile's key comes from
dotrino-vault atrest test                # does the KMS wrap and unwrap? WITHOUT touching the data
dotrino-vault atrest rekey kms.json      # change provider, re-encrypting everything
dotrino-vault atrest rekey --machine     # and back to this machine's key
```

`rekey` decrypts **everything** before writing anything and verifies each file; if
something fails, what was there stays intact and a `.bak-rekey` copy is left behind.
**Editing `atrest.json` by hand does not work**: the key would change without
re-encrypting, and the profile would be unreadable.

On a profile that already holds an identity, `rekey` warns about what we said above — that
an older copy of the disk still opens it — and asks for `--anyway` to continue. That is not
red tape: it is the only way nobody ends up believing that migrating is the same as being
born.

## One key, one folder

Each profile is a different key and lives in **its own folder**, named after the key
(`5977-8919-c2698f30600a0f0d`; it starts with the same identifier the vault prints at
startup). Two keys cannot share a folder because they are not named the same, and each
folder carries its own key provider: you can have a personal profile on the machine key and
a company one in the KMS, on the same box.

If you are coming from an earlier version, the folder **renames itself** at startup and the
vault says so in its log. There is nothing to do.

And one vault per folder: two processes over the same data are not two vaults, they are the
same one running twice — same master key, both sealing records as the same sealer. The
second one refuses to start and says who holds the folder, across machines too (a shared
network disk).

> The reasoning, the threats it closes and what it does **not** cover:
> [`docs/llaves-de-hardware.md`](https://github.com/imdotrino/dotrino-vault/blob/main/docs/llaves-de-hardware.md).
