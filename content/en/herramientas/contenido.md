---
title: Content — your audio on your computer
description: Copy your recordings from your phone to your own computer, and play them, open them in another program or save them from a browser window.
---

# Content

[`content.dotrino.com`](https://content.dotrino.com/) · repo
[`dotrino-content`](https://github.com/imdotrino/dotrino-content)

Content keeps your large files on a computer of yours. The computer joins your account as one more
device. Today Recorder uses it.

## Install it

You need Node 22.5 or later. On your computer:

```sh
npm i -g @dotrino/content
dotrino-vault pair --service content     # on your vault's machine: gives you a code
dotrino-content enroll <code>
dotrino-content start
```

## Copy your recordings

With Content running, open Recorder on your phone.

| Connection | What happens |
|---|---|
| Direct between your phone and your computer | They copy by themselves |
| Through your own server | The recording says it is not copied yet. Tap it and it asks you |
| Through Dotrino's servers | They do not copy. They wait for a direct connection |

Dotrino's servers are for Dotrino's content. You can run your own.

Copies travel encrypted. If the connection drops, they pick up where they stopped.

## Open them on your computer

```sh
dotrino-content gui
```

A window opens in your browser with your recordings. You can:

- play them;
- open them in another program, such as an audio editor;
- save the original file wherever you want;
- delete them from the computer. Your phone keeps its copy and does not upload it again.

The window only works on that computer.
