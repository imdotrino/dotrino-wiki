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
the app itself: **Profile → Install dotrino-terminal…** opens a separate window that installs it
right away; the result stays on screen until you press Enter. When it finishes, the profiles,
"Enroll…" and the consoles panel light up by themselves. Or by hand:

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

## Inside VS Code

The terminal in VS Code's panel can also open Dotrino Terminal consoles, so you can pick them
up later from your phone or another device. One command sets it up:

```
dotrino-terminal vscode
```

It makes Dotrino the default terminal in VS Code, VS Code Insiders, VSCodium and Cursor,
whichever you have installed. The rest of your settings stay as they were. Terminals you
already had open do not change: open a new one.

- To use a specific profile: `dotrino-terminal vscode --name work`.
- To undo it: `dotrino-terminal vscode --off`.
- If you update or switch Node versions, run the command again.

Closing the terminal tab closes its console. To leave it open and come back later, press
**Ctrl+]** and then **d**.

## Windows

Open the app and you get a window with a console. The menu is at the top:

| Menu | Option | Shortcut (Linux) | Shortcut (macOS) |
|---|---|---|---|
| File | New window | Ctrl+Shift+N | ⌘N |
| File | New window with a new console | Ctrl+Shift+T | ⌘T |
| File | Close window | Ctrl+Shift+W | ⌘W |
| Edit | Copy | Ctrl+Shift+C | ⌘C |
| Edit | Paste | Ctrl+Shift+V | ⌘V |
| View | Consoles panel | Ctrl+Shift+B | ⌘B |
| Profile | No profile · the list of profiles · Rename · Enroll… · Install/Update dotrino-terminal… | | |
| Help | How to use it (this page) | | |

A new window uses the same profile as the window you opened it from and **attaches to a console
that isn't open in any window**, if there is one; otherwise it opens a new one. The same when the
app starts. For a brand-new console every time: **File → New window with a new console**
(Ctrl+Shift+T).

**Closing the last window closes the consoles the windows used**, except the ones you left **in
the background** (right click on the console in the panel → *Keep in background*), the ones
another device is watching, and the ones not opened from this computer. Background consoles stay
alive and you find them there next time you open the app.

### The consoles panel

On the left, when the window has a profile, there is **one button per open console** in that
profile, with its **fixed number**: if you close 1, 2 stays 2 and the next new console becomes 1.
It starts **collapsed**: a narrow strip with one number per console (the title shows on
hover); **»** opens it with the names and **«** collapses it again. Each window has its own. Open,
it shows all the profile's consoles: this window's, your other windows', and the ones you opened from another device. Under
each one it says where it is open, or that it is detached.

- **Click a console**: the window switches to it instantly. The one you had **does not close**: it
  stays in the list so you can go back.
- **Several screens on the same console** (windows, the phone) see the same thing and type into
  it, at the same time. Only one has the **size**: the one that **chose** it with ⤢ and, if none
  did, **the last one that attached**. The others show it at that size, with the rest of the
  window empty. That screen is followed when resized or rotated; typing or focusing another one
  doesn't change it.
- **⤢ Use this screen's size.** It sits in the panel, under **+** (and in *View*), and acts on
  **the console that window shows**. When on it is highlighted, and the expanded panel says who
  has the size (*Size of 2: this window (87×33) · chosen on purpose*). If that screen already had
  the size, nothing changes you can see: what changes is that a screen arriving later no longer
  takes it. The choice belongs **to the screen**: if you switch to another console and come back,
  it gets it back. While it is away, the last one that attached decides. It is released by
  pressing ⤢ again, or when another screen chooses it.
- **+** opens a new console in the window; **×** closes that console (if it was the window's, the
  window moves to another one).
- **Right click on a console** in the panel (collapsed too): **Open here**, **Open in another
  window**, **Keep in background** (or remove it from there) and **Close console**.
- **View → Consoles panel** (Ctrl+Shift+B) hides or shows it.
- With a `dotrino-terminal` older than 0.11 the panel is disabled and says so: update it from
  **Profile → Update dotrino-terminal…**.

On the right, when there is history, a **scrollbar** shows where you are; you can drag it, and
the mouse wheel scrolls three lines at a time.

**Right click** on the terminal: **Copy** the selection and **Paste**. Pasted text stays at the
prompt and doesn't run until you press Enter, even with several lines (bash highlights it until
the next key).

**Closing a window closes the console it is showing**, unless another window or device is watching
it, or it is in the background. Consoles you left behind by switching from the panel stay detached
until you close the app. To keep it running and come back
later (from this computer or another device), press **Ctrl+]** then **d**: the window closes
and the console stays alive. In a `dotrino-terminal` console, **Ctrl+]** then **n** opens another
one (detaching the current one).

**What each console is doing.** In the panel, a console's number changes colour: **amber** when
something is working in it and **green** when it finished and you have not looked at it yet (green
goes away when you open that console or type in it). It lets you leave an AI agent working in one
console and carry on in another. The rule is the same for any program (Claude Code, Codex,
OpenCode, a command): while the console's title or screen keeps changing, it is working; once they
have not changed for ten seconds, it finished. Set `DOTRINO_TERMINAL_IDLE_SECONDS` when starting
the agent to change that: raise it if you run commands that stay silent for a long time.

**And the other way round: who closes the window.** If the console ends because you typed `exit`,
the window closes, like any terminal. If **another screen** closes it (the phone, the web, another
window's panel), your window **stays**: it opens a new console and says so at the top.

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
dotrino-terminal vscode               # VS Code's terminal opens consoles from here (--off undoes it)
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
