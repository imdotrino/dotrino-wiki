---
title: Install: pick your path
description: Every path leaves the same vault: the Linux, Windows or macOS installer, one command with npx, or Docker.
---

# Install: pick your path

Every path leaves **the same vault**. Pick by your system:

| Your case | Path | Guide |
|---|---|---|
| Ubuntu / Debian / Fedora / other Linux x64 | installer (`.deb`, `.rpm` or tarball): stays as a service | [Install on Linux](/en/vault/instalar-linux/) |
| Windows 10 / 11 | installer for your user, with the window; starts on its own when you sign in | [Install on Windows](/en/vault/instalar-windows/) |
| macOS (Apple Silicon and Intel) | the «Dotrino Vault» app, with the window | [Install on macOS](/en/vault/instalar-macos/) |
| any system with Node | **one command** (`npx`), runs in the foreground | [Install with one command](/en/vault/instalar-npx/) |
| Docker · ARM / Raspberry | official amd64/arm64 image | [Install with Docker](/en/vault/instalar-docker/) |

No path opens ports or touches your router: the vault connects outward on its own.

## Where everything lives

Your data — key included — lives in `~/.local/share/dotrino/vault` (Linux and
macOS), `%LOCALAPPDATA%\Dotrino\vault` (Windows) or `/data` (Docker), with
`0600`/`0700` permissions and one subdirectory per profile. Move it with
`DOTRINO_VAULT_DIR`. Start/stop depends on the path: `systemctl --user
{start,stop,restart} dotrino-vault`, `docker restart dotrino-vault`, or closing the
`npx` window.

After installing: [pair your first device](/en/vault/emparejar/).
