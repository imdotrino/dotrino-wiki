---
title: Versions and updates
description: How each piece says which version it is, where broken versions are recorded, and how an installed piece finds out there is a new one.
---

# Versions and updates

A version mismatch rarely raises an error: it produces **silence**. The caller
retries forever and the one answering does not know it is being spoken to. Three
packages exist to make that visible.

## Saying which version you are

**`@dotrino/compat`** — repo
[`dotrino-compat`](https://github.com/imdotrino/dotrino-compat)

Each piece announces `{ product, version, protocol, speaks }` and the one answering
decides whether they can work together. Pure functions, no dependencies, no network.

```
import { declare, check, incompatibleNotice } from '@dotrino/compat'

const mine = declare({ product: 'vaultd', version: pkg.version, protocol: 3, speaks: [2, 3] })

const v = check({ mine, theirs: p.v, broken: MY_BROKEN })
if (!v.compatible) reply(incompatibleNotice({ mine, theirs: p.v, verdict: v }))
```

- **`protocol`** is an integer that goes up only when the message format changes.
  It decides whether two pieces understand each other.
- **`version`** identifies the build. It decides whether that exact build is broken.
- **A mismatch is reported and shown, but it does not block.** The notice sits next
  to the error that is already happening.
- **The broken list uses exact versions**, never ranges.

The list travels inside each version: it changes by publishing another one, and
nothing running can change it from a distance.

## The compatibility registry

**`@dotrino/roadmap`** — repo
[`dotrino-roadmap`](https://github.com/imdotrino/dotrino-roadmap)

The data: which version each piece is at, what it needs from the others and which
ones are known broken. It lives in `manifests/dotrino.json` and is edited by hand;
publishing a package version does **not** update the registry.

```
import { loadManifest, currentOf, brokenOf, meets } from '@dotrino/roadmap'

const m = loadManifest()
currentOf(m, 'vaultd')
meets(m, { product: 'vaultd', peer: 'identity', version: '0.80.0' })
brokenOf(m)            // passed as is to compat's check()
```

Before publishing, each package checks what it has installed against the registry:

```
npx --yes @dotrino/roadmap@latest check
```

It fails if something installed is marked broken or is below what the product's
entry requires. It goes in `release.yml`, before the publishing step.

Ranges accept `0.106.2`, `0.106.0+`, `>=0.106.0`, `0.100.0 - 0.106.2` and `*`. No
`^` or `~`: a range that is not understood is a «no».

## Finding out there is a new version

**`@dotrino/update`** — repo
[`dotrino-update`](https://github.com/imdotrino/dotrino-update)

Everything that gets installed checks for a new version and says so where it is
administered.

```
import { watchForUpdate } from '@dotrino/update'            // a service: checks once a day
import { printUpdateNotice } from '@dotrino/update/notice'   // a command: notifies on exit
```

A command's notice goes to **stderr** and is cached for a day, so it neither slows
the command down nor breaks a pipe.

Depending on how the piece is installed:

| How it is installed | What to use | What it checks |
|---|---|---|
| npm package | `watchForUpdate` | that package's published version |
| service with its pillars in `node_modules` | `@dotrino/update/deps` (`watchDependencies`, `printDependencyNotices`) | each installed `@dotrino/*` against npm |
| git clone on a server | `@dotrino/update/checkout` (`watchCheckout`) | how many commits it is behind `main` |
| npm package that updates itself | `@dotrino/update/npm` | downloads, verifies and installs |

What is downloaded **is verified before touching the disk**. And «could not check»
is never shown as «you are up to date»: they are two different answers.

None of this is triggered by Dotrino. The piece checks the public registry on its own.
