---
title: Getting started in your company
description: The short path: install the vault on a machine of yours, connect the team's devices, and let each service receive its keys.
---

# Getting started in your company

Four steps, in this order. Each one has its own page with the detail.

## 1. A machine that holds the keys

Pick a company machine — a small server is enough — and install the vault there:
[Install: pick your path](/en/vault/instalacion/). It does not need to be open to the
internet: it is the one that calls out.

Before touching anything, read [The model: profile, record, keys](/en/vault/modelo/):
ten minutes that explain who rules over what.

## 2. Connect the team's devices

Every computer or phone that will be used is authorised once, by typing a code **on
that very device**: [Pairing a device](/en/vault/emparejar/). Withdrawing the
permission cuts access on the spot.

Whoever administers also has their [profile password](/en/vault/perfiles/).

## 3. Let the services drop the file full of keys

Each service asks for its keys at start-up and receives them encrypted, in memory
only: [Service secrets](/en/vault/secretos/). That is the end of the config file
copied onto every server.

For server connections, the same with access keys:
[SSH keys without files](/en/vault/ssh/).

## 4. And if you want, let a person authorise

A service can be marked so that it **receives nothing until someone approves from
their phone**: [Phone approval](/en/vault/aprobacion/). That is what suits the most
delicate cases.

## How it is all stored underneath

What is encrypted, with what, and how far each permission reaches is in
[Encryption, store and scope](/en/vault/seguridad/).

Questions before starting? Write to us from
[dotrino.com/enterprise](https://dotrino.com/enterprise).
