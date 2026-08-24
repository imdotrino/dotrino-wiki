---
title: SSH keys without files
description: The SSH private key lives sealed in the vault and only exists in the memory of the agent that asked for it.
---

# SSH keys without files

Your SSH key stops being a file in `~/.ssh` that any process can copy: it lives
**sealed in the vault** as one more secret, and only exists in the clear in the
**memory** of the agent that asked for it — with your phone's approval, if that
device requires it.

## Setup

```sh
# 1) the key enters the vault ("ssh" drawer; the file, base64-encoded)
dotrino-vault secret set ssh SSH_KEY_DOTRINO "$(base64 -w0 ~/.ssh/id_ed25519)"

# 2) on your PC: enroll the agent once (with approval)
#    (on the vault: dotrino-vault pair --service ssh --approval)
npx -y @dotrino/env enroll --ns ssh --code <code>

# 3) start the agent: it asks for the drawer (your yes on the phone) and serves the keys
npx -y @dotrino/env ssh-agent --ns ssh
# → export SSH_AUTH_SOCK=/run/user/…/ssh-agent.sock
```

Put that `export` in your shell (the path is fixed, `.bashrc` is fine) and use `ssh`
as always: each connection's challenge is signed by the agent **locally**, with the
key in RAM. The key **never** touches the PC's disk or environment; closing the
agent forgets it, and the next start asks for your "yes" again.

- Accepts **ed25519** in OpenSSH format (no passphrase: the vault is the lock) and
  **RSA / P-256** in PEM. Several keys: several `SSH_KEY_*` variables.
- `ssh-add -L` lists the public halves (to paste into your servers'
  `authorized_keys`). Adding keys from a file is **refused**: the whole point is
  that there are no files.
