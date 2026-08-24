---
title: Service secrets
description: Your programs stop carrying a .env: they enroll with the vault and receive their keys only in memory.
---

# Service secrets

Services (a proxy, a bot, your script) **don't carry secrets in their `.env`**: they
enroll with the vault as one more member, with a cert limited to their drawer
(`vault:secrets:<ns>`), and ask for their bundle on boot. **No secret remains on the
service's machine**: values live only in the process memory.

## Enroll (once, with a human)

```sh
# on the VAULT
dotrino-vault pair --service myapp            # invitation scoped ONLY to vault:secrets:myapp
dotrino-vault secret set myapp API_KEY sk-…

# on the SERVICE machine (paste the invitation; it SHOWS you a code)
npx -y @dotrino/env enroll --ns myapp --code <code>

# back on the vault: type the 6 digits READING them off the service's screen
dotrino-vault approve 418027
```

This leaves `~/.dotrino/service/myapp/service-identity.json` (0600, encrypted bound
to that machine) with the device key — which is only good for **asking**.
Re-enrolling the same `ns` **replaces** the previous identity: that's how you rotate
a compromised machine's.

Enrollment is separate from boot **on purpose**: it demands a human reading the code
on the service's screen — the one thing that stops a fake vault from enrolling the
machine.

## Use

```sh
npx -y @dotrino/env run --ns myapp -- node app.js   # variables in the CHILD's environment
npx -y @dotrino/env check --ns myapp                # the NAMES (never values)
```

```js
import '@dotrino/vault/config'    // like dotenv/config, but against the vault
console.log(process.env.API_KEY)
```

**The vault rules**: whatever comes from the vault **overrides** the `.env` and the
environment. That's what makes rotation cheap: change it in one place and no stale
`.env` forgotten on a server can keep winning.

## On rotation, the service restarts

When you save or delete a secret, the vault notifies (signed, no values) and the
agent **exits** so its supervisor brings it back with fresh configuration — in
JavaScript a secret cannot be wiped from memory, and keys usually rotate *because
they leaked*: a new process starts with a clean heap. **Run your services under pm2
or systemd with automatic restart.** And it doesn't trust the notice alone: on every
connection the agent **compares** its bundle with the vault's.

## Failure modes

- **Vault or proxy down** → the service **waits** (backoff retries). Booting anyway
  would mean operating on stale configuration.
- **Not enrolled, cert revoked/expired, wrong scope** → **aborts immediately**: you
  must (re)enroll. The cert lives 30 days and renews at boot when under 7 remain.
