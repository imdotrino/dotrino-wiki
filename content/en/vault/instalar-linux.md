---
title: Install on Linux (.deb / tarball)
description: The Linux installer leaves the vault as a systemd --user service, Node embedded; .deb for Ubuntu/Debian and a tarball for the rest.
---

# Install on Linux

## Ubuntu / Debian — `.deb`

Download the (versioned) `.deb` from
[Releases](https://github.com/imdotrino/dotrino-vault/releases/latest) and
double-click it, or:

```sh
sudo apt install ./dotrino-vault_*.deb
```

It installs the binaries in `/usr/bin` and the `systemd --user` unit for **every**
user on the machine (each with their own vault in their `$HOME`). It starts on your
**next login**; to bring it up now:

```sh
systemctl --user start dotrino-vault      # first time
systemctl --user restart dotrino-vault    # if you were UPGRADING
```

## Other Linux x64 — tarball

```sh
tar xzf dotrino-vault-*-linux-x64.tar.gz
cd dotrino-vault-*-linux-x64
sh install.sh
```

Does the equivalent in your `$HOME` (`~/.local/bin` + `~/.config/systemd/user`) and
goes one step further: it **starts right away** and enables `linger`, so the vault
runs from machine boot even if you never log in.

## Worth knowing

- The binary embeds **Node**: nothing to install. The only thing it expects from the
  system is `libatomic1` (the `.deb` installs it by itself).
- They are **x64/amd64** and the installer **needs systemd**. For ARM — a Raspberry —
  or a Linux without systemd: [Docker](/en/vault/instalar-docker/) or
  [`npx`](/en/vault/instalar-npx/).
- No code signing: your system may warn the binary is unsigned. It is self-hosted
  and open source.

Next step: [pair your first device](/en/vault/emparejar/).
