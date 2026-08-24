---
title: Terminal UI (TUI)
description: Vaults, devices and secrets full-screen, no subcommands to memorize; bilingual es/en.
---

# Terminal UI (TUI)

Vaults, devices and secrets can also be managed from a full-screen terminal
interface:

```sh
dotrino-vault tui             # installed binary
dotrino-vaultd --tui          # the vault and its interface in the SAME window
```

Like the CLI, the TUI opens neither the identity nor the network: it leaves the
order for the daemon. If the daemon isn't running, the TUI offers to start it with
`S` (systemd only).

## Two levels

1. **Vaults**: the entry screen — your profiles. `Enter` opens one; `p` connects a
   device; you also create, rename, delete and set the password lock.
2. Inside, **tabs** (`←→`): **Devices** (pair, approve, reject, revoke; `e` on a
   service shows its own variables) and **Scopes & variables** (the shared ones; `i`
   imports a whole `.env`).

When pairing, the vault **first asks which account the device joins** (the active
one, a new one, or connecting a service with its namespace) and only then shows the QR.

## Keys

Mnemonics are English and don't change with the language (`l` toggles
español/English).

| Key | Action |
|---|---|
| `Enter` | open the vault |
| `p` | pair — connect a device |
| `a` / `x` / `v` | approve · remove/reject · revoke |
| `n` / `r` / `d` | new · rename/refresh · delete |
| `c` · `u` / `k` | password · lock (unlock / lock) |
| `t` | public ⇄ private (variables) |
| `b` / `Esc` · `q` | back · quit |
