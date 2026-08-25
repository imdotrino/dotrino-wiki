---
title: The Dotrino installer
description: One command gets any Dotrino tool running on your computer, with no admin rights.
---

# The Dotrino installer

[`install.dotrino.com`](https://install.dotrino.com/) · repo
[`dotrino-install`](https://github.com/imdotrino/dotrino-install)

The tools that run on your computer —[the vault](/en/vault/instalacion/),
[the terminal](/en/herramientas/terminal/), [the tunnel](/en/herramientas/tunel/)—
start with a single command. If something is missing for them to run, the
installer fetches it.

## Linux and macOS

```
curl -fsSL https://dotrino.com/install.sh | sh -s -- <tool>
```

## Windows (PowerShell)

```
irm https://dotrino.com/install.ps1 | iex; dotrino-install <tool>
```

Replace `<tool>` with the package you want, for example `@dotrino/vault`.

## What it does and does not do

- **It asks for no admin rights.** Everything lands in your user folder.
- **It does not touch your system.** If you have no Node installed, it brings its
  own copy instead of changing yours.
- **It is an alternative, not the only path.** If you already use `npx` or prefer
  the `.deb` installer, both still work: see
  [Installing the vault](/en/vault/instalacion/).

## The «Install app» button

The same repository publishes the component that draws the **Install app** button
in the top bar of the ecosystem's web apps. It is what lets an app
[land on your home screen](/en/empezar/instalar-apps/).
