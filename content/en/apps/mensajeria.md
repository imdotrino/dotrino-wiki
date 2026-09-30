---
title: Chat and Messenger
description: The two ways to talk on Dotrino: open rooms in Chat, and private end-to-end encrypted conversations in Messenger.
---

# Chat and Messenger

Dotrino has two apps for talking to someone, and what tells them apart is who you
want to hear.

## Chat — live rooms

[`chat.dotrino.com`](https://chat.dotrino.com/) · repo
[`dotrino-chat`](https://github.com/imdotrino/dotrino-chat)

Chat is the room: you walk in, people are there, you type. It fits open
conversations —a public room about a topic— and also a direct message to someone
who is online.

1. Open the app and pick your name (it comes from [your profile](/en/empezar/identidad/)).
2. Join a room or create your own.
3. To talk to one person alone, tap their name in the list.

Messages travel over [the ecosystem's transport](/en/empezar/como-viaja/) and are
not stored on any server: what was said in the room stays in the room.

## Messenger — private conversations

[`messenger.dotrino.com`](https://messenger.dotrino.com/) · repo
[`dotrino-messenger`](https://github.com/imdotrino/dotrino-messenger)

Messenger is one to one and **end-to-end encrypted**: the message is sealed on
your device with the other person's key and only opens on theirs. Nobody along the
way —Dotrino included— can read it.

What sets it apart from Chat:

- **You receive even while offline.** If someone writes with the app closed, the
  message waits encrypted for up to 24 hours and arrives when you come back.
- **Alerts with a trill.** It notifies you on your phone when something arrives,
  with one of seven bird trills at random. It also sounds with the app open. The
  alert doesn't say what was written or by whom: only that you have new messages.
- **It installs** like any app ([how](/en/empezar/instalar-apps/)).

To write to someone you need their identity: add it from
[your profile](/en/empezar/identidad/) or by scanning their code.

- **Also as an Android app** (beta), with the same profile and contacts as on the
  web. Install [Dotrino Identity](https://play.google.com/apps/internaltest/4699800053552003281) first, which keeps your keys on the phone,
  and then [Messenger for Android](https://play.google.com/apps/internaltest/4701700199204289743). The iPhone one comes later.

### Adding someone

Nobody writes to you unless you accept it:

1. Tap **Add contact**. There you see **My code**, a short six-letter code with its
   QR. It also opens when you tap your code in the top bar.
2. The other person types your code or scans your QR. You get a **request**, not a
   message.
3. If you accept, you become contacts and can write to each other. If not, nothing
   happens: a message from someone who is not your contact reaches no chat.

### Your history, safe in your vault

If your phone is connected to [your vault](/en/vault/emparejar/), your conversations
are kept encrypted there. What you write on the phone shows up on the web and the
other way round, and you don't lose it if you change devices.

## Which one

| I want to… | Use |
|---|---|
| talk with several people at once | Chat |
| make sure only the other person can read it | Messenger |
| have the message arrive even when they are offline | Messenger |
| drop in and out without adding anyone | Chat |
