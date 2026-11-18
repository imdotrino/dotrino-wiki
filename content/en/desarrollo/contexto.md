---
title: Folder context for Claude Code (dotrino-context)
description: Searches a folder's documents, memory, commits and conversations by meaning, on your machine, and gives Claude Code the context that answers each message.
---

# Folder context for Claude Code

[`@dotrino/context`](https://www.npmjs.com/package/@dotrino/context) · repo
[`dotrino-context`](https://github.com/imdotrino/dotrino-context)

When you work with Claude Code on a large project, what it needs to know is spread out:
design documents, the memory Claude keeps from earlier sessions, the reason behind each
change in the commits, and what was said in other conversations. `dotrino-context`
gathers it into a database that lives **on your machine** and brings Claude what answers
your question, with every message.

Nothing leaves your computer: the models that read the text run locally and the database
is a file inside the folder.

## What it stores

| Kind | What | When it updates |
|---|---|---|
| `doc` | Every `.md` in the folder (no `node_modules`, `dist`, hidden folders…) | when the file changes |
| `memory` | Claude Code's memory for the folder and its subfolders | when the note changes |
| `git` | Commit messages of the repos inside, one per commit | when HEAD changes |
| `conv` | Claude Code conversations: only what you wrote and the reply text | after 10 min without changes |

Commits and conversations have anything that looks like a secret (keys, tokens,
`password=…`) masked before they are stored. It is a net, not a guarantee.

## How it picks your context

1. It searches **by meaning** (a multilingual model, Spanish and English) and **by word**.
2. A second model reads your question next to each candidate and ranks them.
3. Only what really answers gets through: anything under a threshold, or far below the
   best result, stays out. At most 6 chunks per message.
4. Each result states its **kind** and **date**. When two disagree: a `doc` or a
   `memory` (current state) beat a `git` or a `conv` (history); the folder's norms beat
   everything; between equals, the newer one wins.

The database **mirrors the files**: to make it forget something, fix or delete the `.md`
and the database follows. What disappears from the source disappears from the database.

## One database per folder, parents as sub-context

Each folder has its database in `<folder>/.dotrino-context/`, which ignores itself in
git. A search queries its own and, as sub-context, each parent folder's, climbing **while
the parent has a database** and stopping at the first that does not. Its own results come
first; the ones from above are marked «contexto de arriba».

To exclude paths, put a `.dotrino-contextignore` at the folder root, with the short
`.gitignore` syntax.

## Install and use

```
npm i -g @dotrino/context
dotrino-context index                      # index the current folder
dotrino-context search "which key signs the record"
dotrino-context status                     # what is there, by kind, and what was skipped
```

As a Claude Code server, registered in the project folder:

```
claude mcp add -s local dotrino-context -- dotrino-context serve
```

Claude Code gains two tools, `search` and `reindex`. For the context to arrive on its
own with every message, add the hook to that folder's `.claude/settings.local.json`:

```json
{ "hooks": { "UserPromptSubmit": [ { "hooks": [
  { "type": "command", "command": "dotrino-context hook", "timeout": 30 }
] } ] } }
```

The hook asks the folder's server over a local socket, so it does not load the models
again. It searches with your message **and the previous turn**, so a «yes, run it» is
understood from what was being discussed, and it does not repeat what it already brought in
the same session. A one-word message is not searched. The server stops when Claude Code closes.

## With a GPU

With `DOTRINO_CONTEXT_DEVICE=cuda` the models run on the graphics card. It needs the
onnxruntime CUDA provider and the CUDA 13 and cuDNN 9 libraries; the recipe, without
`sudo`, is in the [README](https://github.com/imdotrino/dotrino-context#gpu). Measured on
an RTX 4060 Ti over 17,000 chunks: indexing everything, 2 minutes (11 on CPU); a search,
~0.4 s.

If you ask for the GPU and it is not there, it fails and says so: it does not fall back to
the CPU silently.
