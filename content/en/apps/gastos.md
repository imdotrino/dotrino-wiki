---
title: Expenses — your monthly income and expenses
description: Keep what comes in and goes out each month in a calendar, with movements that repeat by themselves and a summary by category. Everything stays in your storage.
---

# Expenses — your monthly income and expenses

[`expenses.dotrino.com`](https://expenses.dotrino.com/) · repo
[`dotrino-expenses`](https://github.com/imdotrino/dotrino-expenses)

Expenses keeps **what comes in and what goes out every month**. You record it, see it in a
calendar, and at the end of the month you know where the money went. What you record is
kept in [your storage](/en/empezar/privacidad/), inside your profile: it does not go through
Dotrino's servers.

> The app is **in development**. Today you record by hand, with a sentence, by dictating or
> from your bank's notices in your email, and you can give it your own AI key.

## Recording a movement

Two ways:

- **The + button** opens the form: choose **Expense** or **Income**, enter the amount, the
  date, the category and, if you want, a note.
- **A sentence** in the “Type a sentence” box: `lunch 4.50`, `salary 1200 received`,
  `taxi 3 yesterday`. The app finds the amount, guesses whether it is an expense or income,
  the category and the day, and shows you the form already filled in. **Nothing is saved
  until you check it.**

With [dictation](#dictation) on, a microphone shows next to the box: tap it, say the
sentence (“lunch, four dollars fifty”) and tap it again. What you said lands in the box and
is read just like typed text.

To change a recorded movement, tap it in the list: you can edit or delete it.

## The calendar

The **Month** tab shows the month with what came in (green) and went out (red) each day, and
the totals at the top: income, expenses and balance. Tap a day to see only that day; tap it
again, or tap **Whole month**, to see the whole month. The arrows change the month.

## What repeats every month

In **Monthly** you add rules for what you pay or receive every month: salary, rent, a
subscription. Each rule has the amount, the category, the day of the month and from which
month (and, if you want, until which).

When a month opens, each rule records its movement **to confirm**: it shows with a dashed
border and a dot on the calendar day, and it **does not count in the totals** until you
confirm it. If that payment did not happen that month, discard it and it will not come back
for that month.

If a rule falls on the 31st and the month is shorter, it is recorded on its last day.

## The summary

The **Summary** tab splits the month's expenses and income by category, largest first, and
tells you how much more or less you spent than the previous month. From there you download
the month as **CSV** to open it in a spreadsheet.

## Your own AI (optional)

In **Settings → Your AI** you can enter the key of an AI provider you already use: OpenAI,
Anthropic (Claude), Google Gemini, DeepSeek, Groq, OpenRouter, or a model on your own
computer with Ollama. With it:

- **your model reads the sentences**, so you can write more freely (“filled the tank
  yesterday, 30 dollars”). You still check what it understood before saving;
- in **Summary**, the **Describe my month** button tells it to you in three or four sentences.

The call goes from your browser straight to that provider, with your key and on your account:
Dotrino does not see it. The key is kept encrypted with your account key. The provider gets
what you type in the sentence box and, for the summary, only the totals per category (never
your notes). If the provider does not answer, the app tells you and reads the sentence with
its rules. Tap **Test** before saving to know whether the key works; **Remove the key**
deletes it.

## Email

The emails your bank sends about a purchase, a transfer or a deposit become movements **to
confirm**: they show in the **To confirm** tab and do not count until you accept them. There you
can **Accept**, **Review** (change something before saving) or **Discard**. An email already
seen does not come in again.

Two ways to bring them in:

- **Paste it.** Copy the bank's email and paste it in “Paste a notice from your bank”. The app
  finds the amount (the operation's, not your balance), whether money came in or went out,
  where and when.
- **From your mailbox, with the agent on your computer.** A small program running on your PC
  reads the notices in your email and hands them to the app when you open it. Your email user
  and password are kept encrypted in your [vault](/en/vault/emparejar/): the app never sees
  them. With the PC off the app works the same; only new mail does not arrive.

To set up the agent (repo
[`dotrino-expenses-agent`](https://github.com/imdotrino/dotrino-expenses-agent)):

1. On your vault's PC, get an invitation: `dotrino-vault pair --service expenses --scope sign`.
2. On the PC where it will run (it can be the same): `npx @dotrino/expenses-agent`, paste the
   invitation and approve the code in your vault.
3. `npx @dotrino/expenses-agent setup` asks for the mail server, your user, the password, the
   folder and, if you want, the bank's senders (so only those emails are read).
4. `npx @dotrino/expenses-agent check` checks that it gets into your mailbox.

**Gmail and Outlook require an “app password”**, not your usual one: you get it in your Google
account (Security → App passwords, with 2-step verification on) or your Microsoft account.
Servers: `imap.gmail.com`, `outlook.office365.com`.

This browser must be linked to your vault to find the agent. If your AI is set up, the email
text is sent to it to be read; otherwise the app reads it with its rules.

## Dictation

In **Settings → Dictation** you choose whether to use it and where your voice becomes text:

- **On this device**: the first time you tap the microphone, the voice model is downloaded
  (about 77 MB, from huggingface.co) and kept. From then on your voice becomes text on your
  device and never leaves it. It also works offline.
- **With your AI**: your voice goes to [your AI](#your-own-ai-optional) provider with your
  key. OpenAI, Groq and Gemini can do it; if yours cannot, the option is disabled and says
  why.
- **Off**, which is how it starts: no microphone.

The app never uses the browser's own dictation, which sends your voice to Google or Apple.

## Settings

- **Where your data is**: if your profile is linked to your [vault](/en/vault/emparejar/),
  what you record is copied there encrypted and you get it back from another device of your
  account. If not, it stays only in this browser.
- **Currency**: only changes how amounts are displayed.
- **Your categories**: add your own with an icon. The app's categories cannot be deleted.
