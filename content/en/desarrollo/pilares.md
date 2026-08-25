---
title: The pillars (@dotrino/*)
description: Identity, transport, storage, reputation and discovery — the shared packages every app in the ecosystem uses instead of reimplementing.
---

# The pillars

Every app in the ecosystem solves identity, network, storage and reputation with
**the same packages**. The protocol is never reimplemented inside an app: that
duplicates the bugs and splits the ecosystem into dialects.

If a pillar is missing something, it is added **to the pillar** and a version is
published.

## Identity

**`@dotrino/identity`** — repo
[`dotrino-identity`](https://github.com/imdotrino/dotrino-identity)

The single source of identity and signing. An ECDSA P-256 key that **never leaves
the device**, data signing, challenge/response, contacts, end-to-end encryption and
the device's profiles. It is the browser counterpart of
[the vault](/en/vault/modelo/).

It also ships a cheap subpath, `@dotrino/identity/avatar`, for the deterministic
identicon of a public key.

## Transport

**`@dotrino/proxy-client`** — repo
[`dotrino-proxy-client`](https://github.com/imdotrino/dotrino-proxy-client)

The client for `proxy.dotrino.com`: messaging by public key, channels, WebRTC, Web
Push and an **offline queue** (24 h). The connection identifies itself with the
vault's key through a signed envelope, so the network identity is the same as the
signing identity.

## Storage

**`@dotrino/store`** — repo
[`dotrino-store`](https://github.com/imdotrino/dotrino-store)

The user's store, mandatory in every app. It lives on the device (IndexedDB) and
syncs encrypted, so it **answers offline**: whatever the app needs in order to
start, preferences, and indexes that grow go here.

**`@dotrino/content-client`** — repo
[`dotrino-content`](https://github.com/imdotrino/dotrino-content)

The other store: the **bytes**. It keeps any of the user's files on a node of their
own, addressed by the hash of the content. It **adds to** the store, it does not
replace it — an app has to keep working with the node switched off.

## Reputation and discovery

**`@dotrino/reputation`** — repo
[`dotrino-reputation`](https://github.com/imdotrino/dotrino-reputation)

Signed attestations and `aggregateTrust`: the web of trust that makes what your
trusted people say carry weight instead of the noise of fresh accounts. Each axis
of a rating is **a separate attestation**.

**`@dotrino/geo`** — repo
[`dotrino-geo`](https://github.com/imdotrino/dotrino-geo)

The index of georeferenced points: signed, expiring pins and a radius query. It is
what makes «near me» possible in [Eco](/en/apps/eco/),
[Trueque](/en/apps/trueque/) and [here](/en/apps/here/).

**`@dotrino/verifier`** — repo
[`dotrino-verifier`](https://github.com/imdotrino/dotrino-verifier)

Identity verification: a public two-way proof (a website, a GitHub account) plus an
attestation signed by a federated third-party verifier. Verified is not the same as
revealed. **Written and tested, not published yet.**

## For services and devices

**`@dotrino/remote-agent`** — repo
[`dotrino-remote-agent`](https://github.com/imdotrino/dotrino-remote-agent)

What a program running outside the browser needs in order to be **one more device**
on the record: enrolling, identifying, encrypting, renewing its certificate and
being revoked. If you are writing an agent, this is it and not something else.

**`@dotrino/lobby`** — repo
[`dotrino-lobby`](https://github.com/imdotrino/dotrino-lobby)

Rooms, seats, turns and matchmaking for the games, headless. It reuses transport,
identity and reputation.
