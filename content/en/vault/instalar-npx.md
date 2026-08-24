---
title: Install with one command (npx)
description: The Windows and macOS path (and any system with Node): npx -y @dotrino/vaultd, in the foreground.
---

# Install with one command (`npx`)

The normal path on **Windows and macOS**, and it works the same on Linux:

```sh
npx -y @dotrino/vaultd          # Node ≥ 20
npx -y @dotrino/vaultd --tui    # the vault and its control screen in the same window
```

It runs **in the foreground**: the vault lives while that window stays open.

## No Node?

The ecosystem installer downloads it into your folder, **without admin rights**, and
runs the package:

```sh
# Linux and macOS
curl -fsSL https://install.dotrino.com/install.sh | sh -s -- @dotrino/vaultd
# Windows (PowerShell)
& ([scriptblock]::Create((irm https://install.dotrino.com/install.ps1))) @dotrino/vaultd
```

On Windows, if the installer downloaded Node for you, a **new** PowerShell window
won't find it yet; paste this first:

```powershell
$env:Path = "$env:LOCALAPPDATA\Dotrino\node;$env:Path"
```

## The control commands

With this path, commands are prefixed with `npx -p @dotrino/vaultd`:

```sh
npx -p @dotrino/vaultd dotrino-vault pair
npx -p @dotrino/vaultd dotrino-vault status
```

The [full CLI](/en/vault/cli/) and the [TUI](/en/vault/tui/) have their own pages.
Next step: [pair your first device](/en/vault/emparejar/).
