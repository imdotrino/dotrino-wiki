---
title: The ecosystem's services
description: Proxy, shortener, timestamper, results, social bot, test bots, forms and deploys — what runs on a server and what for.
---

# The ecosystem's services

These are the counterparts that run on a server. They are not imported as a
library: you talk to them at their domain. All of them take their secrets from
[the vault](/en/vault/secretos/), not from an `.env` file on disk.

## Transport

**`dotrino-proxy`** — repo
[`dotrino-proxy`](https://github.com/imdotrino/dotrino-proxy) ·
`proxy.dotrino.com`

The transport server, counterpart of `@dotrino/proxy-client`. It delivers messages
by public key, holds the ones for whoever is offline, serves channels and hands out
TURN credentials for direct connections.

Nodes **federate** with each other: each instance carries a prefix derived from its
own key, and the mesh between nodes is signed.

## Public utilities

**`dotrino-shortener`** — repo
[`dotrino-shortener`](https://github.com/imdotrino/dotrino-shortener) ·
`s.dotrino.com`

A link shortener, expiring after a month. It is **only used from a server** (the
social bot): shortening from the browser would mean embedding its key, and
shortening a `#fragment` would send the server exactly what must never reach it.

**`dotrino-signer`** — repo
[`dotrino-signer`](https://github.com/imdotrino/dotrino-signer) ·
`signer.dotrino.com`

Stamps content with the time: it signs `{ hash, ts }`, which proves **when**
something existed.

**`dotrino-results`** — repo
[`dotrino-results`](https://github.com/imdotrino/dotrino-results) ·
`results.dotrino.com`

The live official sports results relay that feeds
[the World Cup apps](/en/apps/deporte/), with admin-signed corrections.

**`dotrino-feedback`** — repo
[`dotrino-feedback`](https://github.com/imdotrino/dotrino-feedback)

Forwards public forms by email (the home page's «request an app»). It is a Worker
and stores nothing.

## Automation

**`dotrino-social-bot`** — repo
[`dotrino-social-bot`](https://github.com/imdotrino/dotrino-social-bot)

Publishes Dotrino's news. The order matters: **it posts to [Eco](/en/apps/eco/)
first**, as one more device on the record, and then shares that content's link on
the networks.

**`dotrino-bots`** — repo
[`dotrino-bots`](https://github.com/imdotrino/dotrino-bots)

Headless bots that behave like real users (chat, chess, cuarenta) to exercise the
ecosystem end to end.

**`dotrino-deploy-listener`** — repo
[`dotrino-deploy-listener`](https://github.com/imdotrino/dotrino-deploy-listener)

The per-host deploy hook: it receives the notice of a `git push` (authenticated
with HMAC) and updates the service.

## Connecting Dotrino to what you already run

**`dotrino-sso`** — repo
[`dotrino-sso`](https://github.com/imdotrino/dotrino-sso): using a Dotrino identity
to sign in to outside applications.
**`dotrino-ad-integration`** — repo
[`dotrino-ad-integration`](https://github.com/imdotrino/dotrino-ad-integration):
the other direction, letting the company directory vouch for the user.

Both are, for now, **design documents**: see
[Design documents](/en/desarrollo/diseno/).
