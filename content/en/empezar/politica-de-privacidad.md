---
title: Privacy policy
description: What gets recorded when you use Dotrino, for how long, and who else touches it. No accounts, no cookies, no tracking.
---

# Privacy policy

Last reviewed: **2 September 2026**.

This page says **what gets recorded, for how long, and who else touches it**. If you're
looking for the why, that's in [How your things are protected](/empezar/privacidad/).

## In short

**You don't have an account with us.** Your identity is a key that lives on your device, not
a row in our database. There's no password you trust us with, no email you hand over, no
profile of yours we could lose — because we don't have one.

Of the little that does get recorded, almost all of it serves two purposes: counting visits
in aggregate, and stopping someone from knocking the servers over.

## What we do NOT collect

- **No accounts and no passwords of ours.** No email, no phone, no name.
- **No cookies.** None at all, not even session ones.
- **No third-party code.** No Google Analytics, Meta, Hotjar or ad networks. No app loads
  JavaScript from someone else's company.
- **We don't sell or share anything**, and there are no ads. The project doesn't live on that.
- **We don't join up what you do across apps.** There's nothing to join it with: no
  identifier of yours ever reaches our servers.

## What does get recorded, and for how long

### When you visit a page

We use our own counter, hosted on our server. **It does not store your IP address** — there
isn't a single place where it gets written. It stores:

| What | Detail |
|---|---|
| Your country | the country only |
| Which page was seen and which link led there | nothing that identifies you |
| Browser, system, screen size, language | aggregated, to know what we must support |

So the same person isn't counted twice on the same day, a temporary code is derived on the
fly and **rotates by itself**; you can't work backwards from it.

**How long:** an individual visit, **one day**. After that only the per-day count remains,
which points at nobody.

### When your apps talk to each other

Messages pass through a relay server. There:

- **Your IP address is counted for 30 days**, and only to tell an attack apart from a person
  using the app. After that it's forgotten. It isn't written to any log.
- **If the other side is offline, the message waits up to 24 hours** and is then deleted.
- That server sees **that two keys are talking and when**, even though it can't read what
  travels sealed. That's unavoidable in any system that delivers messages.

### When you write to us

The contact form is **forwarded by email and not stored** on any server of ours. What you
tell us stays in that email.

## Who else touches something

A server provider, a content delivery network, the hosting for the pages, and the service
that sends the contact form emails. We name them, with what each one sees, in the
[full list](https://github.com/imdotrino/dotrino-vault/blob/main/docs/flujos-de-datos.md) —
it's the same technical document we use ourselves, with no watered-down version.

What **none** of them sees: whatever travels after the `#` in a link, because the browser
doesn't send it to anyone.

## What you share

When you share something, the shareable part travels **after the `#`** in the address: that
part never reaches a server. It isn't stored and can't be found on Google.

**The honest limit:** no app looks after what its owner decides to show. From the moment you
share, your decision is in charge, not the code.

## Your rights

Since we don't hold an account of yours, **there's nothing to ask us to delete**: your things
are on your device and you delete them yourself. If you'd still like to ask something about
this policy, write to **hola@dotrino.com**.

If you find a security flaw, there's a separate channel:
[how to report it](https://github.com/imdotrino/.github/blob/main/SECURITY.md).

## Minors

The apps don't ask for personal data, so none is collected from anyone — whatever their age.
There are no advertising profiles and no targeted content either.

## If this changes

This page carries its review date at the top and lives in a public repository: **every change
stays in the history**, along with what it said before. You don't have to take our word.

## You can check

All the code is open (MIT) at [`imdotrino`](https://github.com/imdotrino). What this page
claims about what is stored comes from reading the code and the databases, not from a
promise: the technical detail is in the
[data flow map](https://github.com/imdotrino/dotrino-vault/blob/main/docs/flujos-de-datos.md).
