---
title: Remote desktop — your desktop from another device
description: Use your computer's windows from another device's browser — sharp, light and end-to-end encrypted.
---

# Remote desktop — your desktop from another device

[`remote-desktop.dotrino.com`](https://remote-desktop.dotrino.com/) · repo
[`dotrino-remote-desktop`](https://github.com/imdotrino/dotrino-remote-desktop)

> **In development.** For now, for **Linux** computers (X11 or Wayland).

Remote desktop lets you use the windows **of your own computer** from another device's browser:
your phone, a tablet, another computer.

It doesn't send a picture of the screen. It sends **what is on it**: the windows, buttons, menus
and text, each in its place. Your device draws it. That's why text reads perfectly and it works
on a slow connection. What you touch and type goes back to the computer as if you did it there.

**Only** a device you linked gets in, and everything is end-to-end encrypted.

## What you see and what you don't

- The windows of most desktop programs (the file manager, menus, settings, dialogs) show in full.
- **Chrome, VS Code, Slack** and similar programs only show their inside if they were opened
  **after** the agent started: the agent asks programs to say what they have on screen, and they
  only do so if asked when they open. If they were already open, close and reopen them.
- A **photo, video, drawing or game** shows as a box with its name: you can see it's there, but
  not its content. Seeing them will come later.

## Install

On the computer you want to use, with [Node](https://nodejs.org/) installed:

```
npm install -g @dotrino/remote-desktop-agent
dotrino-remote-desktop-agent
```

The agent has to run **inside your desktop session** (the one on screen), not as a system
service: it reads that session's windows.

## What you need

1. [The vault](/en/vault/instalacion/) installed on one of your computers. It doesn't have to be
   the one you want to use.
2. The agent running on the computer you want to use: `dotrino-remote-desktop-agent`.

   The first time it asks you to **link** it to your vault: on the vault's computer run
   `dotrino-vault pair`, paste the invitation into the agent and approve the code it shows with
   `dotrino-vault approve <code>`. You only do this once.

3. The device you come in from, [linked to your vault](/en/vault/emparejar/).

## How to get in

Open [`remote-desktop.dotrino.com/desktops`](https://remote-desktop.dotrino.com/desktops) on the
other device. Your computers with the agent **running** show up in the list with the name you
gave them when approving them: pick one and you see its desktop.

- The open windows are listed at the top: tap one to see it large; **All** shows the whole
  desktop.
- A tap is a click. With a mouse, right click and the wheel work as on the computer.
- **Keyboard** opens the keyboard to type into the window that has focus.

To see what it looks like without connecting anything: [the example](https://remote-desktop.dotrino.com/desktops?demo).

## Start it when you log in

Add `dotrino-remote-desktop-agent` to the programs that start when you log in to your desktop
(in XFCE: *Settings → Session and Startup → Application Autostart*).

## Updates

The agent updates itself and tells your vault when it does. If you'd rather approve each update:
`dotrino-remote-desktop-agent update --approval on`. It never restarts while someone is looking at
the desktop.

## Which device is this

```
dotrino-remote-desktop-agent info
```

Shows its ID (the same one `dotrino-vault members` shows), its vault and its permissions.
