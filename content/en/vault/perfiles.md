---
title: Profiles and password
description: Several identities on the same machine, and the console lock: what it protects and what it does not.
---

# Profiles and password

## Several profiles on the same PC

You can keep several identities on one machine (personal and work, say). Each
profile is **a different account**: its key, its devices, its data and secrets —
nothing crosses over. **All of them serve at once**: the "active" one only decides
where a command goes when you don't say `--profile`.

```sh
dotrino-vault profile ls                  # list (* = active)
dotrino-vault profile add Work            # create a profile (new, empty identity)
dotrino-vault profile use Work            # choose the active one
dotrino-vault profile rm Work             # DELETES the profile and its identity (confirmed)
dotrino-vault pair --profile Work         # every command accepts --profile
```

You can't delete the only profile, nor an account this vault rules while other
devices remain: hand the command to a connected one first.

## Profile password — the lock is for THIS console

With the profile **locked**, nothing of it can be seen or touched from the vault's
machine: no devices, no variables, no record, no log. The CLI and the TUI answer
"vault locked" until someone types the password.

What does **not** change is the service: **your already-paired devices keep signing,
reading and storing**. That travels through the proxy, not this console — a PC
reboot never leaves your apps dead waiting for someone to type something.

```sh
dotrino-vault profile password     # set or change the password
dotrino-vault profile password rm  # remove it
dotrino-vault unlock               # open the vault in this console
dotrino-vault lock                 # close it right away
```

**It locks itself after 5 minutes idle**, on top of locking when the service restarts.
The countdown runs from the last thing you did in the console, so it never kicks you out
mid-task; what your devices ask for through the proxy does not count as use, and they
keep working all the same. The TUI also forgets the password at that point.

The password is never stored (only a salted verifier, scrypt), asks for at least 12
characters —several random words— and after 5 failures each new attempt waits longer.

**What it protects, plainly:** the console — someone sitting at your machine seeing
or touching that vault. It does **not** encrypt the key on disk (that's
[encryption at rest](/en/vault/seguridad/), which today doesn't use the password).
