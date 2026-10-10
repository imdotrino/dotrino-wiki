---
title: Install on Linux (.deb / .rpm / tarball)
description: The Linux installer leaves the vault as a systemd --user service, Node embedded; .deb for Ubuntu/Debian, .rpm for Fedora/RHEL/openSUSE and a tarball for the rest.
---

# Install on Linux

## Ubuntu / Debian — `.deb`

Download the (versioned) `.deb` from
[Releases](https://github.com/imdotrino/dotrino-vault/releases/latest) and
double-click it, or:

```sh
sudo apt install ./dotrino-vault_*.deb
```

It installs the service for **every** user on the machine (each with their own vault in
their `$HOME`). The program is copied to your folder the first time it starts, and from
there it **updates itself**, with no `sudo`. It starts on your
**next login**; to bring it up now:

```sh
systemctl --user start dotrino-vault      # first time
systemctl --user restart dotrino-vault    # if you were UPGRADING
```

## Fedora / RHEL / openSUSE — `.rpm`

Download the (versioned) `.rpm` from
[Releases](https://github.com/imdotrino/dotrino-vault/releases/latest) and install it:

```sh
sudo dnf install ./dotrino-vault-*.x86_64.rpm                           # Fedora, RHEL and derivatives
sudo zypper install --allow-unsigned-rpm ./dotrino-vault-*.x86_64.rpm   # openSUSE
```

It leaves the same as the `.deb`: the service for every user on the machine and the
program in your folder, which updates itself. It starts on your next login, or right now with
`systemctl --user start dotrino-vault`.

The package carries no GPG signature, which is why `zypper` asks for
`--allow-unsigned-rpm`. To check where it came from:

```sh
gh attestation verify dotrino-vault-*.x86_64.rpm --repo imdotrino/dotrino-vault
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

- **It updates itself**, with any of the three installers (the `.deb` and the `.rpm`,
  from version 0.150.0). Once a day it checks for a new version, downloads it, verifies
  where it came from and installs it in your folder. If you would rather be asked first:
  `dotrino-vault update --approval on`.
- Removing the package (`sudo apt remove dotrino-vault` or `sudo dnf remove dotrino-vault`)
  does not delete your vault or your data: they stay in `~/.local/share/dotrino`.

- The binary embeds **Node**: nothing to install. The only thing it expects from the
  system is `libatomic1` (the `.deb` and the `.rpm` install it by themselves).
- They are **x64/amd64** and the installer **needs systemd**. For ARM — a Raspberry —
  or a Linux without systemd: [Docker](/en/vault/instalar-docker/) or
  [`npx`](/en/vault/instalar-npx/).
- No code signing: your system may warn the binary is unsigned. It is self-hosted
  and open source.

Next step: [pair your first device](/en/vault/emparejar/).
