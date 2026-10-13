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

**1. The console program** (for profiles):

```
curl -fsSL https://install.dotrino.com/install.sh | sh -s -- @dotrino/terminal-agent
```

It asks for no admin rights and, if you have no Node, it brings it
([the Dotrino installer](/en/herramientas/instalar/)). When it finishes, the app's profiles,
"Enroll…" and consoles panel light up by themselves.

Two other ways to install it, both with Node 20 or newer already in place:

- From the app itself: **Tools → Install dotrino-terminal…** opens a separate window that
  installs it right away; the result stays on screen until you press Enter.
- By hand: `npm install -g @dotrino/terminal-agent`.

Once installed, the same option is called **Update dotrino-terminal…** and brings the newest
version. An agent that was already running keeps the old version until it restarts.

**Updating.** When it opens, the app checks for a new version of `dotrino-terminal` or of the
app. If there is one, it tells you and you choose **Update now** or **Later** (app 0.2.51 or
newer). It is also in the menu **Tools → Update dotrino-terminal and the app…**. It is a single
action: first the console program and then the app, all in view in the window.

- The app's signature is checked before installing it, with nothing else to install (console
  program 0.43.1 or newer; it used to need GitHub CLI). If it does not check out, the app is not
  installed, and it says so.
- If you installed it from the `.deb` or the `.rpm`, it asks for your administrator password.
- When it finishes, if the app changed, **Restart the app** shows up: it closes and opens again
  with the new version, on the same consoles. Your consoles stay open.
- A console program that was already running keeps the old version until it restarts. After
  the step above, the app offers **Close all terminals** so it starts with the new one (app
  0.2.67 and console program 0.45.0, or newer). It says how many will be closed: the ones in the
  windows, in your editor and the ones your other devices are looking at, with whatever runs in
  them. The windows stay open, on a new console. With **Later** nothing changes and it offers it
  again when you open the app.
- By hand: `dotrino-terminal updates` says what is new, `dotrino-terminal desktop update`
  updates the app, `dotrino-terminal agents` says which version each profile runs and
  `dotrino-terminal restart` restarts it (closes its consoles; it asks first).

**2. The app.** Download it from the
[releases page](https://github.com/imdotrino/dotrino-terminal/releases/latest):

| System | File | How to install |
|---|---|---|
| Ubuntu, Debian | `dotrino-terminal-desktop_<version>_amd64.deb` | `sudo apt install ./dotrino-terminal-desktop_*.deb` · it shows up in the menu as "Dotrino Terminal" |
| Fedora, RHEL, openSUSE | `dotrino-terminal-desktop-<version>-1.x86_64.rpm` | `sudo dnf install ./dotrino-terminal-desktop-*.x86_64.rpm` (on openSUSE: `sudo zypper install --allow-unsigned-rpm ./dotrino-terminal-desktop-*.x86_64.rpm`) · it shows up in the menu as "Dotrino Terminal" |
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

From the app it is the same: **Tools → Use in VS Code's terminal** sets it up with that
window's profile, and **Tools → Remove from VS Code's terminal** undoes it.

- To use a specific profile: `dotrino-terminal vscode --name work`.
- To undo it: `dotrino-terminal vscode --off`.
- If you update or switch Node versions, run the command again.

If the same console is open on another screen, VS Code's terminal takes the size as soon as
you type in it.

Closing the terminal tab **closes its console**, along with whatever is running in it (console
program 0.43.2 or newer): VS Code has no console panel to get back to it. Quitting VS Code closes
the consoles of all its tabs. In the app, closing a window leaves its console open.

## With Claude Code

Claude Code can keep the "what this is about" card of the console it runs in up to date: what it
is doing, what it finished and what it is waiting for. Install it once per computer:

- In the app: **Tools → Notes with Claude Code: install** (and **remove** to undo it).
- Or with the command `dotrino-terminal claude` (`--off` removes it, `--status` says whether it is set).

It needs console program 0.44.0 or newer and Claude Code opened at least once. It applies to new
sessions; outside a Dotrino Terminal console it does nothing. Your personal notes are not touched:
Claude only writes the task and the console's title. On the card, the **×** next to your note deletes it, like the task's (app 0.2.69 or newer).

**Network use.** **Help → Network use…** prints, in the same window, which path each connection
with your other devices takes (direct, via TURN or through the proxy) and how much went through
each. It is the same report as the network button of the web apps (app 0.2.69 and console program
0.46.0, or newer).

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
| Profile | No profile · the list of profiles · Rename · Set or remove the code · Enroll… | | |
| Tools | Restart the agent… · Use in VS Code's terminal · Notes with Claude Code · Install dotrino-terminal… / Update dotrino-terminal and the app… | | |
| Help | How to use it (this page) · Network use… | | |

A new window uses the same profile as the window you opened it from and **attaches to a console
that isn't open in any window**, if there is one; otherwise it opens a new one. The same when the
app starts. For a brand-new console every time: **File → New window with a new console**
(Ctrl+Shift+T).

**Closing the app does not close any console**: they stay alive and you find them there next
time you open it.

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
  it, at the same time. Only one has the **size**: **the last one you typed in** or, if nobody has
  typed since, the last one that attached or chose it with ⤢. The others show it at that size,
  with the rest of the window empty. That screen is followed when resized or rotated; focusing
  another one, or moving the mouse in it, doesn't change it.
- **⤢ Use this screen's size.** It sits in the panel, under **+** (and in *View*); each computer has its own under
  its **+**, and the enabled one is the computer where that console lives (app 0.2.65 or newer). It acts on
  **the console that window shows**. When on it is highlighted, and the expanded panel says who
  has the size (*Size of 2: this window (87×33) · chosen on purpose*). If that screen already had
  the size, nothing changes you can see: what changes is that a screen arriving later no longer
  takes it. Typing in another screen does take it. The choice belongs **to the screen**: if you switch to another console and come back,
  it gets it back. While it is away, the last one that attached decides. It is released by
  pressing ⤢ again, when another screen chooses it, or when you type in another one.
- **+** opens a new console in the window; **×** closes that console (if it was the window's, the
  window moves to another one, or is left with no console if there is none).
- **Right click on a console** in the panel (collapsed too): **Open here**, **Open in another
  window** and **Close console**.
- **View → Consoles panel** (Ctrl+Shift+B) hides or shows it.
- With a `dotrino-terminal` older than 0.11 the panel is disabled and says so: update it from
  **Tools → Update dotrino-terminal…**.

On the right, when there is history, a **scrollbar** shows where you are; you can drag it, and
the mouse wheel scrolls three lines at a time.

**Right click** on the terminal: **Copy** the selection and **Paste**. Pasted text stays at the
prompt and doesn't run until you press Enter, even with several lines (bash highlights it until
the next key).

**Closing a window never closes a console.** The console it was showing keeps running and you
can come back to it later, from this computer or another device. A console is closed with the
**×** in the panel, with **Close console**, or by typing `exit` in it. (A "No profile" window is
the exception: there is no console to keep, and closing it ends what was running.)
In a `dotrino-terminal` console, **Ctrl+]** then **d** detaches it and closes the window, and
**Ctrl+]** then **n** opens another one (detaching the current one).

**Where each console is open.** A dot in the top right corner of a console in the panel means it
is attended on this computer: **green** if it is open in a window of the app (this one or
another), **blue** if it is only in VS Code's terminal (app 0.2.63 or newer). No dot means nobody
is showing it here. The same goes for consoles of your other computers: the dot means a
window on **this** computer is showing it, not what the other one has open. Right-click a console
in the panel, from here or from another computer, to open it here, open it in another window or
close it. The dot **blinks** when that console finished and you have not looked at it yet; it stops as soon as its window has the focus. On a console that is only in VS Code's terminal the dot does not blink.

**The ring when it finishes.** When it finishes, the console only turns green. If a minute later nobody has attended it (or looked at it in its window), Dotrino's chirp plays, once even with several windows open (app 0.2.61 or newer; it used to play on finishing). It plays in its low version; with the environment variable `DOTRINO_TERMINAL_RING=standard` or `high` when opening the app it plays louder (app 0.2.60 or newer).

**What each console is doing.** In the panel, a console's number changes colour: **amber** when
something is working in it and **green** when it finished and you have not looked at it yet (green
goes away when you open that console or type in it). It lets you leave an AI agent working in one
console and carry on in another. The rule is the same for any program (Claude Code, Codex,
OpenCode, a command): while the console's title or screen keeps changing, it is working; once they
have not changed for ten seconds, it finished. Set `DOTRINO_TERMINAL_IDLE_SECONDS` when starting
the agent to change that: raise it if you run commands that stay silent for a long time.

**And the other way round: closing a console never closes the window.** If a window's console is
closed (with the **×**, by typing `exit` in it, or from **another screen**: the phone, the web,
another window's panel), the window moves to the first console nobody has open; if they all are,
to the first of them; and if none is left, the window **stays open, with no console**, with its
panel: **+** opens one whenever you want.

**When a console is created.** Only with **+**, or when a window opens and there is no console
left unopened. That way consoles nobody is looking at do not pile up.

### The consoles of your other computers

Below this computer's consoles, the panel shows **your other computers that are on** with
Dotrino Terminal, each with its consoles. They show up by themselves: there is nothing to set
up. Collapsed, each computer is a button with the first two letters of its name and, below
it, one number per console.

- **Click one of its consoles**: it opens in **this same window**, just as it was, like a
  console from here (app 0.2.50 or newer). The one you had is detached, not closed.
- **New console +** under the name (or the "+" under its initials, with the panel collapsed): opens a new
  console on that computer, in this window.
- **×** next to one of its consoles: closes it.
- The panel does not change: it keeps showing the consoles from here and from the others,
  with the window's one marked. To come back, click a console from here. The window title
  says which computer you are on.
- Closing a console of another computer or changing its size goes over the network and can take a
  few seconds: meanwhile the window shows a notice at the bottom ("Closing the console…",
  "Applying the size…") that goes away by itself once the other computer confirms it (app 0.2.66
  or newer).
- If that computer **asks for its code**, the panel says so and shows **Type its code** under its
  name (with the panel folded, the ">" button under its initials). The window moves to that computer and you type the
  code in the terminal, where it says "Code for…"; it is not shown while you type and ends with
  Enter. Once in, a console opens there. It is remembered
  while the console program keeps running; it is not saved to disk.

The profile needs to be [enrolled](#enroll-a-profile), and **this computer** needs version
0.38.0 of the console program (the others do not need updating). A computer that is off does
not show up.

**If you do not see your other computers**, the panel says why below your consoles, under “Other machines” (app 0.2.47 or newer): the profile is not linked, `dotrino-terminal` is older than 0.38.0, the console program is still running the old version, or no other one is on. The command `dotrino-terminal machines` says the same.

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
from the menu (to "No profile" too) detaches that window's console and moves to one in the
other** (one nobody has open; if there is none, a new one). Whatever was running in the previous console keeps running in its profile.

### Renaming a profile

A profile's name is yours alone, on this computer: your account doesn't see it. To change it,
**Profile → Rename "…"…** asks for the new name in the same window, apart from your console:
type it and press **Enter**. The window carries on, now in the renamed profile.
It is the same device: no need to enroll again.

Renaming restarts that profile's program, so **its open consoles close**. It tells you how many
and asks first.

**Tools → Restart the agent…** restarts that profile's program whenever you want (for example,
to use a version you just installed). It also **closes its open consoles**: it tells you how
many and asks first. In a terminal it is `dotrino-terminal restart`.

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
dotrino-terminal machines             # your other computers that are on, and their consoles
dotrino-terminal --machine office     # open a console ON that computer (by its name or id)
dotrino-terminal attach <id> --machine office   # go back to one over there (ls and kill too)
dotrino-terminal profiles             # this computer's profiles
dotrino-terminal link                 # enroll a profile
dotrino-terminal rename <profile> <new>    # rename it
dotrino-terminal vscode               # VS Code's terminal opens consoles from here (--off undoes it)
dotrino-terminal desktop update       # update the desktop app (--check only looks)
dotrino-terminal agents               # which version of the console program each profile runs
dotrino-terminal restart              # restart it to use the installed version (closes its consoles)
dotrino-terminal network              # which path each connection with your other devices takes, and how much went through
dotrino-terminal service install      # the agent starts by itself at boot (uninstall removes it; status tells)
```

If the console program is not running, `dotrino-terminal` starts it by itself.

## If something doesn't work

- **"Enroll…" greyed out and the note "To use profiles, install dotrino-terminal"** in the
  Profile menu: step 1 of [Install](#install) is missing. Use **Tools → Install
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
