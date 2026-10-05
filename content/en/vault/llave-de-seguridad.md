---
title: Opening with a security key (YubiKey)
description: Open your vault profile with a physical key, instead of the password or together with it.
---

# Opening with a security key (YubiKey)

A profile can open with a **security key** —a YubiKey or another FIDO2 key— instead
of the password, or together with it. Each way in is a **door**, and any of the
profile's doors opens it:

| Door | How it opens |
|---|---|
| password | you type it |
| key with touch | the key plugged in **and** touched |
| key without touch | it only has to be plugged in |
| key + password | **both** are needed |

Adding or removing a door changes nothing the profile keeps: your devices don't even
notice. As always, the lock belongs to the console: with the profile locked your
devices keep working.

## What you need

On the vault's machine, the programs that talk to the key:

```sh
sudo apt install fido2-tools yubikey-personalization
```

`fido2-tools` for the key with touch and `yubikey-personalization` for the key without
touch. If they live in another folder, point `DOTRINO_HWKEY_BIN` at it.

## Adding one

With the profile open (`dotrino-vault unlock`):

```sh
dotrino-vault profile key add                   # with touch: you touch it twice
dotrino-vault profile key add --no-touch        # without touch
dotrino-vault profile key add --with-password   # opens only together with a password
dotrino-vault profile add Work --key            # a new profile, born with its key
```

From then on `dotrino-vault unlock` uses the key when it is plugged in and only asks
for the password when it has to. To skip the key: `dotrino-vault unlock --password`.
The TUI does the same when opening. And there, with a vault selected in the list, the
**`y`** key shows what opens it and lets you add or remove keys without leaving the screen.

## Listing and removing

```sh
dotrino-vault profile key ls            # what opens the profile
dotrino-vault profile key rm <id>       # removes a key
dotrino-vault profile password rm       # removes the password: only the key is left
```

If you remove the last door, the profile is left **without a lock**: it opens with this
machine alone, as if it never had a password.

## With or without touch

- **With touch** (FIDO2): the key hands nothing over unless someone touches it. This is
  the recommended one.
- **Without touch** (challenge-response): uses **slot 2** of the YubiKey, and adding it
  programs that slot. If the slot already holds something it refuses; `--overwrite-slot`
  overwrites it and **erases what was there**. While it is plugged in, any program on
  this machine can open the profile, so unplug it when you are not using it.

Without touch does **not** mean the vault opens by itself at startup: opening is still
something you do, with `unlock` or from the TUI.

## Don't lock yourself out

Keys get lost. **Always** leave another door: a spare key, or the password. If the
profile only opens with one key and you lose it, you lose the profile.

If touching the key types odd text like `cccccbjujtbt…`, that is the key itself typing a
one-time code: you touched it when nothing was asking for it. Nothing happened.
