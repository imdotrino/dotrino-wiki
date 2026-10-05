---
title: Terminal on your computer
description: The Dotrino Terminal app for Linux and macOS. Every window you open can be picked up from the browser on another device of yours.
---

# Terminal on your computer

Dotrino Terminal is also the terminal of your own computer, on Linux and macOS. You use it
like any terminal, with one difference: **every window you open can be picked up from the
browser on another device of yours** (your phone, another computer), right where you left
it. That is what [`terminal.dotrino.com`](https://terminal.dotrino.com/consoles) is for.

Two ways to use it:

- **The desktop app**, with its windows, its menu and its profiles. That is what this page
  covers.
- **Inside the terminal you already use**: type `dotrino-terminal` and that window becomes a
  Dotrino console. See [Commands](#commands).

## Install

The app on its own is already a plain terminal. The console program is only needed for
**profiles**, which is what lets you open your windows from other devices.

**1. The console program** (for profiles). It needs Node 20 or newer. The easiest way is from
the app itself: **Profile → Install dotrino-terminal…** types the command into your console;
check it and press **Enter**. When it finishes, the profiles and "Enroll…" light up in the menu
by themselves. Or by hand:

```
npm install -g @dotrino/terminal-agent
```

Once installed, the same option is called **Update dotrino-terminal…** and brings the newest
version. An agent that was already running keeps the old version until it restarts.

**2. The app.** Download it from the
[releases page](https://github.com/imdotrino/dotrino-terminal/releases/latest):

| System | File | How to install |
|---|---|---|
| Ubuntu, Debian | `dotrino-terminal-desktop_<version>_amd64.deb` | `sudo apt install ./dotrino-terminal-desktop_*.deb` · it shows up in the menu as "Dotrino Terminal" |
| Other Linux | `dotrino-terminal-desktop-<version>-linux-x64.tar.gz` | unpack it and run `dotrino-terminal-desktop` |
| macOS (Apple Silicon and Intel) | `dotrino-terminal-desktop-<version>-macos-universal.zip` | unpack it and drag "Dotrino Terminal" to Applications |

On macOS the app is not signed by Apple yet, so the first time the system won't open it with
a double click. Open it with **right click → Open** and confirm. You only do this once.

## As your desktop's terminal (XFCE and Thunar)

On Linux with XFCE you can make Dotrino Terminal **your everyday terminal**:

1. Open **Settings → Preferred Applications → Utilities**.
2. Under **Terminal Emulator**, pick **Dotrino Terminal**.

From then on, **"Open Terminal Here"** in Thunar opens a Dotrino Terminal window **in that
folder**, with your profile. The same goes for any program that asks to "open in a
terminal".

A window always opens in the folder it was launched from. If that folder no longer exists, the
window says so instead of opening somewhere else.

## Windows

Open the app and you get a window with a console. The menu is at the top:

| Menu | Option | Shortcut (Linux) | Shortcut (macOS) |
|---|---|---|---|
| File | New window | Ctrl+Shift+N | ⌘N |
| File | Close window | Ctrl+Shift+W | ⌘W |
| Edit | Copy | Ctrl+Shift+C | ⌘C |
| Edit | Paste | Ctrl+Shift+V | ⌘V |
| Profile | No profile · the list of profiles · Rename · Enroll… · Install/Update dotrino-terminal… | | |
| Help | How to use it (this page) | | |

A new window uses the same profile as the window you opened it from.

**Right click** on the terminal: **Copy** the selection and **Paste**. Pasted text stays at the
prompt and doesn't run until you press Enter, even with several lines (bash highlights it until
the next key).

**Closing a window closes its console**, like any terminal. To keep it running and come back
later (from this computer or another device), press **Ctrl+]** then **d**: the window closes
and the console stays alive.

## Profiles

**Every window opens in a profile**: the last one you picked in the menu; otherwise
`default`; otherwise the first linked one. A new window uses the profile of the window you
opened it from.

**With no profile, the window is just another terminal**: your usual shell, nothing Dotrino
about it, and nobody sees it from outside. That happens when you have no profile at all, or
when the console program is missing. The window title ends in "— no profile" so you can tell.

A profile is an identity of this computer for Dotrino Terminal. Each one is either **linked
to an account** (to its vault) or **this computer only**:

- **Linked**: its consoles can be opened from that account's devices. The menu shows it with
  the device code (for example `default · AB12-CD34`), the same one you see in
  `dotrino-vault members`.
- **This computer only**: it works the same, but nobody gets in from outside.

You can have several: one for your personal account, another for work. **Switching profile
from the menu (to "No profile" too) closes that window's console and opens a new one in the
other**, like
closing a terminal and opening another. Whatever was running in the previous console ends; to
keep it, detach it first with Ctrl+] d.

### Renaming a profile

A profile's name is yours alone, on this computer: your account doesn't see it. To change it,
**Profile → Rename "…"…** types `dotrino-terminal rename <profile> ` into your console; finish
it with the new name and press **Enter**. The window carries on, now in the renamed profile.
It is the same device: no need to enroll again.

Renaming restarts that profile's program, so **its open consoles close**. If there are others
besides yours, it asks first.

## Enroll a profile

Enrolling links a profile to your vault, so your other devices can open its consoles. You do
it once per profile.

1. In the app: **Profile → Enroll…**. The window asks you for the details.
2. Type a **name** for the profile (lowercase letters, numbers and dashes: `home`, `work`).
   The first one is suggested as `default`.
3. On your vault's computer run `dotrino-vault pair` and **paste the invitation** into the
   window.
4. The window shows a **code**. Approve it on the vault with `dotrino-vault approve <code>`.
5. Done: the window switches to the new, linked profile by itself.

If you cancel or something fails, the window goes back to the profile it had. If you enroll a
profile that was in use on this computer only, its open consoles stay alive and become
reachable from your devices.

## When someone comes in from another device

If you open from your phone a console that is in a window on the computer, **that window
rings and says so in its title**. Both see and type into the same console at the same time.
On `terminal.dotrino.com` those consoles show up as "window open on the machine".

## Commands

The same without the app, from any terminal:

```
dotrino-terminal                      # open a console in this window, in the current folder
dotrino-terminal --name work          # in the "work" profile
dotrino-terminal ls                   # open consoles
dotrino-terminal attach <id>          # go back to one
dotrino-terminal kill <id>            # close one
dotrino-terminal profiles             # this computer's profiles
dotrino-terminal link                 # enroll a profile
dotrino-terminal rename <profile> <new>    # rename it
```

If the console program is not running, `dotrino-terminal` starts it by itself.

## If something doesn't work

- **"Enroll…" greyed out and the note "To use profiles, install dotrino-terminal"** in the
  Profile menu: step 1 of [Install](#install) is missing. Use **Profile → Install
  dotrino-terminal…**. Without it the app works anyway, with no profile.
- **The install says EACCES**: your npm installs into a system folder. Use
  [nvm](https://github.com/nvm-sh/nvm), or install it with `sudo` from another terminal.
- **"Can't find npm"**: Node is missing. Install Node 20 or newer from
  [nodejs.org](https://nodejs.org).
- **"An agent is running that does not accept windows"**: a version older than 0.6.0 is
  running (for example as a service). Stop it and start the new one:
  `npx @dotrino/terminal-agent@latest`.
- **An error in the window that doesn't close**: the app waits for a key so you can read it.
  Press any key.

To reach your computers from the browser, see [Terminal — your computer from your
phone](/en/herramientas/terminal/).
