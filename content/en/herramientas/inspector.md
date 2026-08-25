---
title: Inspector — which passwords are in plain sight
description: It goes through your computer and shows you which passwords and keys are stored in plain sight, with the steps to protect them. It only looks, and nothing it finds leaves your machine.
---

# Inspector

[`inspector.dotrino.com`](https://inspector.dotrino.com/) · repo
[`dotrino-inspector`](https://github.com/imdotrino/dotrino-inspector)

Over time, passwords pile up inside files: a service key in a project's settings,
your unprotected server key, a password you typed once in the terminal that is
still in its history. The Inspector finds them, shows them to you **one by one**
and tells you what to do about each one.

**It only looks.** It never edits, moves or deletes files, and never starts
anything: you apply the recipe. And **nothing it finds leaves your computer** —
no reports, no statistics, no server that ever learns what was found.

## Getting it running

```
npx @dotrino/inspector
```

It opens in **its own window**. Closing that window shuts the Inspector down
completely: nothing keeps running behind your back. It installs nothing
permanent, so every time you launch it you get the latest version.

No Node? [The Dotrino installer](/en/herramientas/instalar/) takes care of it:

```
curl -fsSL https://dotrino.com/install.sh | sh -s -- @dotrino/inspector
```

## How to use it

1. **Choose where to look.** By default it goes through the known locations on
   your computer (where programs usually leave their credentials). Add the folder
   where you keep your projects too.
2. **Hit scan.** Findings come sorted by how bad it is to keep them that way:
   first what anyone can read, then the rest.
3. **Open one.** Each finding tells you which file it is, what was found and
   **why** it is a problem.
4. **Copy the recipe.** The steps to store that password properly, ready to paste
   into your terminal. You run them.
5. **Or dismiss it.** If that case is fine as it is, mark it and it won't come
   back.

## The terminal report

On a computer with no desktop (a server, an SSH session) there is no window to
open. There the Inspector writes its report in the terminal itself:

```
npx @dotrino/inspector --print
```

## Options

| Option | What for |
|---|---|
| `--print` | the report in the terminal, no window |
| `--browser` | open it in your browser instead of its own window |
| `--no-open` | open nothing; print the address for you to open |
| `--no-known` | skip the known locations, look only where you say |
| `--port <n>` | pin the port (by default it takes a free one) |

You can also pass folders straight away: `npx @dotrino/inspector ~/projects`.

## What it looks for

- Passwords and keys inside your projects' configuration files.
- Keys that open servers, especially the unprotected ones.
- Cloud service and app store credentials.
- Sessions and passwords left behind by everyday programs.
- Passwords still written in your terminal history.
- Files with secrets that anyone using that computer can also read, or that were
  pushed to a repository by mistake.

It is not an antivirus, not an audit and not an automatic fixer: it looks at your
files and how they are stored.

## What comes next

The Inspector shows you the problem; storing those passwords properly is
[your vault](/en/vault/modelo/)'s job — it hands them to each program at startup
so they are never written down in a file. See
[Service secrets](/en/vault/secretos/).

## Under the hood

The Inspector starts a server **on your own machine only**: nobody on your
network can reach it. The address carries a single-use code and **the server dies
with the command**, so no program is left running with the findings behind it.
The window is your own browser in application mode, with a temporary profile that
is wiped on close.
