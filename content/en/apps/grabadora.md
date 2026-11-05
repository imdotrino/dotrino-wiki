---
title: Recorder — quality audio that stays on your device
description: Record lossless (24 or 16 bit WAV) or compressed, with a level meter, clipping warning, gain and microphone choice. Recordings stay on your device.
---

# Recorder — quality audio that stays on your device

[`recorder.dotrino.com`](https://recorder.dotrino.com/) · Android app · repo
[`dotrino-recorder`](https://github.com/imdotrino/dotrino-recorder)

Recorder records **good-quality audio**: an interview, a rehearsal, a class, an idea. You see the
level while recording, it warns you if the sound clips, and what you record **stays on your
device**: it does not go through Dotrino's servers.

There are two versions: the **web** one (`recorder.dotrino.com`, which you can
[install](/en/empezar/instalar-apps/) as an app) and the **Android app**. They work the same; the
differences are below.

## Recording

1. Press **Check level**: the microphone opens, the meter moves and **nothing is recorded**. Speak or
   play the way you will and watch the bars: green is fine, amber is loud, red is too much.
2. If it reaches red or the **"It clipped"** warning appears, lower the **Gain**. If it barely moves,
   raise it. Tap the warning to clear it and check again.
3. Press **● Record**. At the top you see the time and how much space it takes.
4. **Pause** and **Resume** stop and continue in the same file. **■ Stop** finishes and saves it.

What the meter shows while checking is exactly what gets recorded, with the same gain.

On the web, **keep the tab open** while recording: the browser may stop the microphone of a closed
tab. The Android app keeps recording with the screen off.

If the tab or the app closes halfway, what was recorded up to then **is not lost**: when you open it
again it shows up in the list marked as *recovered*.

## Settings

- **Format.** *WAV 24 bit* is the highest quality (about 17 MB per minute in stereo). *WAV 16 bit*
  is CD quality (about 11 MB). **Compressed** takes much less (about 2 MB per minute) and is nearly
  indistinguishable: on Android and Safari it is AAC; in browsers without it, Opus. Settings tells
  you which one yours uses.
- **Sample rate** (44.1 or 48 kHz) and **channels** (mono or stereo).
- **Microphone processing.** *Unprocessed* records what the microphone picks up, with no noise
  removal or volume adjustment: the most faithful. *Voice* removes echo and noise and adjusts the
  volume by itself: good for speech, but it changes the sound. Android also has *Standard* and
  *Video*.
- **Microphone.** The phone's or computer's, a USB one, a headset. On the web the names appear after
  you allow the microphone.

Below the buttons you see the chosen format and how much time fits in the free space.

## Your recordings

Each recording shows up in the list with its length, size and format.

- **Play** / **Stop**.
- **Download** (web) or **Save copy** (Android): a copy wherever you choose.
- **Share**, if your device allows it.
- **More**: change its **name** or **delete** it. Deleting cannot be undone.

## Where it is kept

- **The audio** is kept on your device: in the browser's private folder (web) or the app's (Android).
  Clearing the browser's data or uninstalling the app deletes it.
- **The list** (names, length, format) goes to [your storage](/en/empezar/privacidad/), inside your
  profile. If your profile is linked to your [vault](/en/vault/emparejar/), the list is backed up
  there; the audio is not. That is why, if you open the web version in another browser, the
  recording shows "the file is not in this browser".
- On Android, if you have [Content](/en/herramientas/contenido/) on your computer, the app copies
  your recordings there. The web version does not do it yet.
