---
title: Install on macOS
description: The «Dotrino Vault» app, for Apple Silicon and Intel, with the vault inside and its window.
---

# Install on macOS

1. Download `dotrino-vault-X.Y.Z-macos-universal.zip` from the
   [releases page](https://github.com/imdotrino/dotrino-vault/releases/latest) and open
   it.
2. Drag **Dotrino Vault** to *Applications*.
3. The first time, open it with **right click → Open**. macOS warns because the app is not
   signed by a developer registered with Apple; what proves where it came from is below.

[The vault window](/en/vault/ventana/) opens. If the vault is not running, the window
says so and starts it with **Start**.

## Start at sign-in

In the window, **Settings → The vault does not start on its own → Change**. It leaves an
agent for your user (`~/Library/LaunchAgents/com.dotrino.vault.plist`) that starts it when
you sign in and restarts it if it stops. If you move the app to another folder, turn it
off and on again.

## Update and uninstall

- **Update:** there is nothing to do. Once a day the vault checks for a new version,
  verifies it and replaces the app with the new one. It needs to be able to write to the
  folder the app is in (*Applications*, if your user is an administrator).
- **Uninstall:** turn start at sign-in off in Settings and delete the app. Your data stays
  in `~/.local/share/dotrino/vault`.

## Check the app

```sh
gh attestation verify dotrino-vault-X.Y.Z-macos-universal.zip --repo imdotrino/dotrino-vault
```
