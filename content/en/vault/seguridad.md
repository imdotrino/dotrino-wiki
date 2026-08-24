---
title: Encryption, store and scope
description: What the vault stores, how it encrypts at rest bound to the machine, and the limits said plainly.
---

# Encryption, store and scope

## The user store

An enrolled device uses the vault as its store: content **threads**, the opens
counter feeding the hub's "recents", and your **profile** (nick, avatar) — the vault
is the authoritative copy and all your devices see the same one. Content travels
**encrypted end to end** with the profile's content key: the proxy carries the
envelope but cannot read it.

The exception, said plainly: **profile** sync still travels unencrypted. It is debt,
not design.

## Encryption at rest

**Everything** the vault stores is encrypted (AES-256-GCM) with a key derived from
**this machine's** material plus a local salt: the master key, the content, the
threads and the secrets. Copying any of those files to another computer **is
useless**. Same on each service's machine with its `service-identity.json`.

What it does **not** solve: it does not protect against someone with access to this
same machine as your user or root — they can read the same material the vault reads.
It raises the bar (from "copy a file" to "own your machine"); it is not a
cryptographic impossibility. `activity.log` stays out on purpose: the audit log
holds no payloads and is meant to be readable.

## What the vault serves

Every request from an enrolled device is signed, carries its certificate, and its
timestamp must fall within a ±5-minute window (anti-replay). What happens is written
to the audit log: which device signed, renewed or enrolled, and what was rejected
and why — without the content of what was signed.

## Scope (today and next)

- **Today (v1):** multi-profile daemon; Linux as a service, Windows/macOS via `npx`,
  Docker amd64/arm64; hardened pairing; record with capabilities; automatic cert
  renewal; end-to-end encrypted store; sealed secrets; phone approval; in-memory SSH
  agent; audit log.
- **Next (v2):** at-rest encryption **with the password** and bound to the system
  TPM/keychain; one-click installers for Windows and macOS; desktop UI.
