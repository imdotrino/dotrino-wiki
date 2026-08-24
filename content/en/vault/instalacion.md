---
title: Install
description: Three paths, all leaving the same vault: the Linux .deb, one command with npx, or Docker (amd64/arm64).
---

# Install

Three paths, all leaving the same vault: the **Linux installer** (stays as a
service), **one command** (`npx`, any system with Node) and **Docker**.

## Ubuntu / Debian — `.deb`

Download the (versioned) `.deb` from
[Releases](https://github.com/imdotrino/dotrino-vault/releases/latest) and:

```sh
sudo apt install ./dotrino-vault_*.deb
```

It installs the binaries in `/usr/bin` and the `systemd --user` unit for **every**
user (each with their own vault in their `$HOME`). It starts on your next login;
to start it now: `systemctl --user start dotrino-vault`. If you were **upgrading**:
`systemctl --user restart dotrino-vault`.

## Other Linux x64 — tarball

```sh
tar xzf dotrino-vault-*-linux-x64.tar.gz
cd dotrino-vault-*-linux-x64
sh install.sh
```

Installs into your `$HOME`, starts right away and enables `linger` (the vault runs
from machine boot even if you don't log in). The binary embeds **Node**; the only
thing it expects from the system is `libatomic1`.

## Any system with Node — one command

```sh
npx -y @dotrino/vaultd          # Node ≥ 20
npx -y @dotrino/vaultd --tui    # the vault and its control screen in the same window
```

The normal path on **Windows and macOS**. It runs in the foreground: the vault lives
while that window stays open. No Node? The ecosystem installer downloads it without
admin rights:

```sh
# Linux and macOS
curl -fsSL https://install.dotrino.com/install.sh | sh -s -- @dotrino/vaultd
# Windows (PowerShell)
& ([scriptblock]::Create((irm https://install.dotrino.com/install.ps1))) @dotrino/vaultd
```

## Docker (and ARM / Raspberry)

```sh
docker volume create dotrino-vault
docker run -d --name dotrino-vault --restart unless-stopped \
  -v dotrino-vault:/data ghcr.io/imdotrino/dotrino-vault

docker exec -it dotrino-vault dotrino-vault pair   # connect a device
```

Image for amd64 **and arm64** on GHCR. It opens no ports. **The volume IS your
account**: delete it and that identity cannot be recovered.

## Where everything lives

Your data — key included — lives in `~/.local/share/dotrino/vault` (Linux and
macOS), `%LOCALAPPDATA%\Dotrino\vault` (Windows) or `/data` (Docker), with
`0600`/`0700` permissions and one subdirectory per profile. Move it with
`DOTRINO_VAULT_DIR`.
