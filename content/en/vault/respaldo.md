---
title: Backup: export and import
description: Save what you keep in the vault to a file encrypted with a password, whole or drawer by drawer, and bring it to another vault without overwriting anything behind your back.
---

# Backup: export and import

A backup is **a file encrypted with a password you choose**. It holds what you keep in the
vault: the variables of each drawer, your profile data and your passwords. It works as a copy,
and also to **move a drawer from one vault to another**.

What it does **not** hold: any key. Keys belong to each device and never leave it. On import,
the destination vault seals everything again with its own keys, for the devices of its account.

Both are done **with the vault open** (`dotrino-vault unlock`).

## Which drawers there are

```sh
dotrino-vault backup list
```

A drawer is named like this:

| You type | It is |
|---|---|
| `proxy` | the drawer of the `proxy` service |
| `@me` | your profile data |
| `contrasenas` (or `passwords`) | the password vault |
| `AB12-CD34` | that device's drawer |

## Export

```sh
dotrino-vault backup export                    # everything
dotrino-vault backup export proxy @me          # only those drawers
dotrino-vault backup export proxy -o proxy.json
```

It asks for the backup password twice, at least 12 characters. A few random words work well.
**That password cannot be recovered**: without it the file does not open.

Nothing in the file is readable without the password, not even the drawer names.

## Import

```sh
dotrino-vault backup import backup.json                 # everything it holds
dotrino-vault backup import backup.json proxy           # only that drawer
dotrino-vault backup import backup.json --as geo=geo-old   # under another name
dotrino-vault backup import backup.json --as AB12-CD34=EF56-7890   # to another device
```

Before writing anything it shows what will happen to each value:

- **nuevo** (new): it does not exist here, it is added.
- **igual** (same): it is already here with the same value, untouched.
- **CHOCA** (conflict): it exists here with another value.

For each conflict you choose to **keep** what is here or **replace** it with the backup (or the
same for all the remaining ones). Then you confirm, and it imports.

Without a terminal (in a script), conflicts are decided with an option:

```sh
dotrino-vault backup import backup.json --on-conflict keep --yes      # keep what is here
dotrino-vault backup import backup.json --on-conflict replace --yes   # the backup wins
```

If there are conflicts and you did not say what to do, **nothing is imported**.

## Good to know

- **Private stays private.** If a variable is private here and public in the backup, it is
  imported as private.
- **A device's drawer** only goes in if that device is in this account. If not, move it to
  another one with `--as`.
- **A password is "the same"** if it has the same site and the same user. Replacing it changes
  the one here in place.
- **History is not saved**: a backup is what there is now.
- **Passwords left out.** If one was saved before the vault had its recovery copy, the backup
  tells you. Open it once from a device with the `contrasenas` permission and back up again.
- It also works without the command line: in the vault screen (`dotrino-vault tui`, or the
  window) press `o` on a vault; in the browser, in the `vault.dotrino.com` console, «Backup»
  section; and in the extension, in the tab that acts as the vault.
- **In the extension, the manager's passwords do not go**: they live apart, with their own
  recovery copy. The extension's backup holds the drawers, and if you import one with passwords
  it tells you how many were left out.

Design: [`docs/respaldo.md`](https://github.com/imdotrino/dotrino-vault/blob/main/docs/respaldo.md).
