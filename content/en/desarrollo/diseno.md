---
title: Design documents
description: Design decisions rule over the code; each one lives in its piece's repo. This is the index.
---

# Design documents

Design decisions **rule over the code** and live next to the piece they describe.
This wiki does not duplicate them: it links them.

## The vault (`dotrino-vault/docs/`)

- [The profile record](https://github.com/imdotrino/dotrino-vault/blob/main/docs/acta-de-perfil.md) — a profile is a set of keys with a record signed by a single sealer.
- [Hardened pairing](https://github.com/imdotrino/dotrino-vault/blob/main/docs/pairing-protocol.md) — why the token stopped being enough authority.
- [Account linking](https://github.com/imdotrino/dotrino-vault/blob/main/docs/vinculacion-de-cuentas.md) — the two paths when connecting a device; merging does not exist.
- [Sealed secrets](https://github.com/imdotrino/dotrino-vault/blob/main/docs/secretos-sellados.md) — the vault stores what it hands out without being able to open it.
- [The remote console](https://github.com/imdotrino/dotrino-vault/blob/main/docs/consola-remota.md) — managing remotely, and its deliberate limits.
- [Store + identity](https://github.com/imdotrino/dotrino-vault/blob/main/docs/store-identity-architecture.md) — why the PC vault is a store besides a certifier.

## Others

- [Content (`dotrino-content`)](https://github.com/imdotrino/dotrino-content/blob/main/docs/DISENO.md) — bytes by hash on the owner's node.
- [Federation and trust (`dotrino-reputation`)](https://github.com/imdotrino/dotrino-reputation/blob/main/docs/federacion-confianza.md) — verifying without revealing.
