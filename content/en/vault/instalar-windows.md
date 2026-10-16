---
title: Install on Windows
description: An installer for your user, with no administrator rights, with the vault window and start at sign-in.
---

# Install on Windows

1. Download `dotrino-vault-X.Y.Z-windows-x64-setup.exe` from the
   [releases page](https://github.com/imdotrino/dotrino-vault/releases/latest).
2. Open it. Windows may warn that the publisher is unknown: click **More info → Run
   anyway**. The installer is not signed by a publisher registered with Microsoft; what
   proves where it came from is below.
3. Leave **Start the vault when I sign in** ticked and finish.

It does not ask for administrator rights: it installs for you alone, in
`%LOCALAPPDATA%\Programs\Dotrino Vault`. When it finishes the vault is already running,
with no window, and **Dotrino Vault** is in the Start menu: it is [the vault
window](/en/vault/ventana/), where your devices, keys and variables are managed.

## Start at sign-in

Change it in the window, under **Settings**, or from a terminal:

```
"%LOCALAPPDATA%\Programs\Dotrino Vault\dotrino-vault.cmd" service autostart on
"%LOCALAPPDATA%\Programs\Dotrino Vault\dotrino-vault.cmd" service autostart off
```

While it is off, the vault only runs when you open it.

## Update and uninstall

- **Update:** install the new version on top. On Windows the vault does not update on
  its own yet.
- **Uninstall:** from *Settings → Apps*. Your data stays in
  `%LOCALAPPDATA%\Dotrino\vault`: it is your account, and deleting it is a separate
  decision.

## Check the installer

```
gh attestation verify dotrino-vault-X.Y.Z-windows-x64-setup.exe --repo imdotrino/dotrino-vault
```

If it matches, the file came from the published code, built by the repository's release
workflow.
