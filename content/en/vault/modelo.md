---
title: The model: profile, record, keys
description: An account is a profile is a record: the set of member keys plus the signed policy saying what each one can do.
---

# The model: profile, record, keys

`dotrino-vault` is your **personal vault**: a headless service running on your own
machine that does two things.

- **It is your certifier.** It guards the key that rules your account and acts as
  your own CA: you enroll your devices, it signs for you, and you vouch for other
  people without asking any central gatekeeper. That key **never leaves** the machine.
- **It is your store.** It keeps your apps' content — threads, "recents", your
  profile — **encrypted end to end**, and serves it to the devices you connected.
  The proxy carries the envelope; it cannot open it.

**It listens to nothing**: no open ports, nothing to touch on your router. It
connects outward to the ecosystem proxy, and your devices reach it there.

## An account is a profile is a record

Three words for the same thing: an **account** is a **profile** is a **record** (the
*acta*) — the set of member keys plus the signed policy saying what each can do. A
**member** is a **key**, not a device: one device can hold several keys and
therefore several accounts.

```
 profile (= account) ── stable name: profileId = pubkey of the genesis key
   └── signed RECORD: who is a member and what each can do
         · sealer (master): ONE key signs the record (normally the vault)
         · members: one KEY each, with capabilities
             sign · store · read   → a device of yours
             secrets + cn          → a service: opens ONLY its own drawer
         · keyring: the content key, wrapped for each member
```

**The account's name is the `profileId`**: the pubkey of the key where it was born,
and it never changes — it is what reputation, contacts and everything that account
ever signed know, even if the vault later adopts it.

## Certificates expire and renew on their own

Each member operates with a **certificate** issued by the vault ("this key may
`<scopes>` until `<date>`, revocable"). It lasts **30 days** and, while valid and
not revoked, the device requests a fresh one by itself — no QR, no approval. An
expired or revoked cert **does not renew**: you pair again. A stolen, revoked
machine is out as soon as it expires, without depending on it behaving.

```sh
dotrino-vault members            # the record: which keys are yours and what each can do
dotrino-vault caps <ID> +sign    # change permissions (+sign -store +read +admin +approve +approval)
```

## Lose the sealing key, lose the account

No recovery, no handover, no backup phrase: it is the assumed consequence of keys
that are never copied. That is why the vault **won't let you delete a profile it
rules while other devices remain inside**: hand the command to a connected one first.

> Full design:
> [`docs/acta-de-perfil.md`](https://github.com/imdotrino/dotrino-vault/blob/main/docs/acta-de-perfil.md).
