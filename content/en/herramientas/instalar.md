---
title: The Dotrino installer
description: One command gets any Dotrino tool running on your computer, with no admin rights.
---

# The Dotrino installer

[`install.dotrino.com`](https://install.dotrino.com/) · repo
[`dotrino-install`](https://github.com/imdotrino/dotrino-install)

One command installs any Dotrino tool that runs on your computer and leaves its command
ready to use. If you have no Node, the installer downloads its own copy.

## The command

Linux and macOS:

```
curl -fsSL https://install.dotrino.com/install.sh | sh -s -- <tool>
```

Windows (PowerShell):

```
& ([scriptblock]::Create((irm https://install.dotrino.com/install.ps1))) <tool>
```

Replace `<tool>` with the package from the table.

## Which tool to put

| You want | `<tool>` | Command you get |
|---|---|---|
| [The vault](/en/vault/instalacion/) | `@dotrino/vaultd` | `dotrino-vaultd` (the vault) and `dotrino-vault` (its control) |
| [The terminal](/en/herramientas/terminal/) | `@dotrino/terminal-agent` | `dotrino-terminal` |
| [The AI assistant](/en/herramientas/ia/) | `@dotrino/ia-agent` | `dotrino-ia-agent` |
| [The tunnel](/en/herramientas/tunel/) | `@dotrino/tunnel` | `dotrino-tunnel` |
| [The inspector](/en/herramientas/inspector/) | `@dotrino/inspector` | `dotrino-inspector` |
| [A service's variables](/en/vault/secretos/) | `@dotrino/env` | `dotrino-env` |

For example, the terminal on Linux:

```
curl -fsSL https://install.dotrino.com/install.sh | sh -s -- @dotrino/terminal-agent
```

## After installing

The installer **installs and exits**: it does not start the tool. It tells you the
command's name and which file it touched to put it within reach.

1. **Open a new terminal** (or reload the one you have), so it finds the command.
2. Type the command from the table, for example `dotrino-terminal`.

To install and do something in the same step, put the order after the package:

```
curl -fsSL https://install.dotrino.com/install.sh | sh -s -- @dotrino/terminal-agent enroll
```

## Updating

Run the same command again: it brings the newest version and replaces the previous one.

## Options

They go **before** the tool's name:

| Option | What it does |
|---|---|
| `--run-once` | does not install: runs the tool just once |
| `--no-path` | leaves your terminal's settings alone; it shows you the line to paste yourself |
| `--ignore-scripts` | skips the install steps of the pieces bundled inside (some tools may end up not working) |

```
curl -fsSL https://install.dotrino.com/install.sh | sh -s -- --no-path @dotrino/tunnel
```

## What it touches on your computer

- **It asks for no admin rights.** Everything lands in the `.dotrino` folder of your
  user (`~/.dotrino` on Linux and macOS, `%USERPROFILE%\.dotrino` on Windows).
- **It does not change your Node.** If you have none, it downloads its own into that
  same folder.
- **It adds one line** to your terminal's startup file (`~/.bashrc`, `~/.zshrc` or
  `~/.profile`) between the `# >>> dotrino >>>` marks, and tells you which one. On
  Windows it adds the folder to your user's `PATH`.

## Removing it

Delete the `.dotrino` folder and remove the `# >>> dotrino >>>` block from your
terminal's file (on Windows, the entry in your user's `PATH`). Careful: that same folder
holds the links between your tools and your vault (`~/.dotrino/agent`); if you delete
it, you will have to link them again.

## Other ways to install

The installer is one path, not the only one. The vault also has `.deb` and `.rpm`
packages and a Docker image ([Installing the vault](/en/vault/instalacion/)), and the
terminal has its [desktop app](/en/herramientas/terminal-escritorio/). If you already
have Node you can use `npx` or `npm install -g` with the same names from the table.

## The «Install app» button

The same repository publishes the component that draws the **Install app** button
in the top bar of the ecosystem's web apps. It is what lets an app
[land on your home screen](/en/empezar/instalar-apps/).
