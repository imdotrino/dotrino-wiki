---
title: What is Dotrino Enterprise
description: The same ecosystem put to work for a company's privacy: keys in one place, permissions that expire, everything on your own servers.
---

# What is Dotrino Enterprise

Dotrino Enterprise is **not another product or another codebase**: it is the same
ecosystem, presented for a company. Keys and sensitive information stop being
scattered around, changing a key takes minutes, and everything runs on the company's
own servers.

> **Nothing that should stay in, gets out.**

Your company's keys live on a machine you choose and open only where you authorised
them. Every permission is granted by you, is recorded with its date, and is withdrawn
from a single place.

## Why now

AI tools changed two things about the environment every company works in.

**The speed changed.** Taking advantage of a technical oversight now takes hours, not
weeks. A key that has gone years without changing, or copied into a file on every
server, stopped being a minor detail.
*With Dotrino Enterprise:* keys live in a single place, and changing one is a matter
of minutes rather than an operation.

**Voices and faces are imitated.** Imitating someone's voice, face and writing style
is within anyone's reach. "The manager asked me over chat" no longer proves anything
on its own.
*With Dotrino Enterprise:* every request travels signed by the machine it was made
from, and the signature checks itself: a convincing message grants no permission.

## What it solves

| | How it ends up |
|---|---|
| **Keys in a single place** | They stop being copied into a config file on every machine. They travel encrypted to the service that asks and live only in memory there. See [Service secrets](/en/vault/secretos/). |
| **Change a key in minutes** | Write the new value in one place and the services come back with it on their own — no editing server by server, no redeploy. |
| **On your company's servers** | Everything installs on your machines and the information stays in your network. The machine holding the keys does not need to be open to the internet. |
| **Each service, only its drawer** | Each application receives only the keys in its own drawer, even when they share a machine. |
| **Who comes in and who leaves** | Authorising a machine requires typing a code on that very machine; withdrawing it cuts access on the spot and the permission expires on its own after 30 days. See [Pairing a device](/en/vault/emparejar/). |
| **A person authorises from their phone** | A service marked this way gets no keys until someone approves from their phone. See [Phone approval](/en/vault/aprobacion/). |
| **No loose keys on the computers** | Server access keys are just another secret, and never end up written to disk. See [SSH keys without files](/en/vault/ssh/). |
| **What you ask the AI** | Every question your people ask an artificial intelligence goes first through a machine of yours, which blanks out whatever your rules mark as sensitive, asks when in doubt, and records what left and when. |
| **The code is in plain sight** | Everything is open under the MIT licence: your people can read it, build it and run the tests. Every signature, permission and rejected attempt is recorded with its date on your own machine. |

## What it does not offer

Said out loud so nobody buys smoke: there are **no** certifications, third-party
audits, regulatory compliance, corporate single sign-on (SSO) or 24/7 support. What
is claimed above is implemented and can be read in the code.

Next step: [Getting started in your company](/en/empresa/como-empezar/).
