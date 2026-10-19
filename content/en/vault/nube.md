---
title: The replica in the cloud
description: A copy of your vault that runs in the cloud and answers for your account even when your vault is off. What it costs, how to add it to your account and how to cancel it.
---

# The replica in the cloud

Your vault lives on your computer or your phone, and when they are off your devices cannot find
it. The **replica in the cloud** joins your account and answers for it while your vault is off: it
wakes up when one of your devices needs it and goes back to sleep on its own.

You do not need it to use Dotrino: everything works without it.

## What it does and what it does not

- It keeps a copy of what your vault already signed and sealed, and hands it to your devices.
- **It cannot open anything**: it has neither your master key nor the one for your passwords, and
  it does not sign for you.
- It joins your account like any other device: **only with an invitation from your vault and a
  code you approve**. Without that it does not get in.
- You manage it from your own profile. You never have to switch accounts.

## What it costs

US$ 3 a month plus VAT (US$ 3.45 in total). It is charged through PayPal, renews every month and
you cancel whenever you want. You buy it **from the browser**, at
[vault.dotrino.com/hosted](https://vault.dotrino.com/hosted): nothing is sold inside the phone apps.

## How to get it

1. Go to [vault.dotrino.com/hosted](https://vault.dotrino.com/hosted) with your account's profile
   and press **Subscribe with PayPal**.
2. Approve the subscription on PayPal. It brings you back to the same page.
3. The replica takes a couple of minutes to be created. Keep the tab open.

## Adding it to your account

When it is ready, the page asks for an **invitation** from your vault:

- If your vault is **this same browser**, press **Get the invitation in this browser**.
- If your vault is on your computer, run `dotrino-vault pair --scope replica --quiet` there and
  paste what it prints.

The page then shows a **code**. Approve it on your vault (in the browser, with the **Approve it**
button; on the computer, with `dotrino-vault approve <code>`). Once approved, the replica shows
as **in your account**.

The invitation lasts 5 minutes: if it expires, get another one. If you do not add it within a day,
the replica is cancelled and **you get your money back**.

## Cancelling

At [vault.dotrino.com/hosted](https://vault.dotrino.com/hosted), under **Your replicas**, press
**Cancel**. It stays on until the end of the month you paid for and then turns off. **Nothing you
kept is deleted**: if you pay again, it comes back as it was.

If a payment fails, PayPal retries it. If the paid period ends still unpaid, the replica turns off
the same way, without deleting anything.

## What Dotrino keeps and what it does not

- What the replica keeps is **encrypted** on the server, and what is yours is sealed for your
  devices: the replica cannot read it either.
- Dotrino knows you have a replica and when it is used, because it wakes it up.
- PayPal gets the charge and an order number, nothing about your Dotrino account.
