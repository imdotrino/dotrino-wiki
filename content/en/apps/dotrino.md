---
title: Dotrino — the phone app
description: The Dotrino app for Android and iPhone: approve from your phone who uses your keys, and keep your profile, your vault and the catalog in one place.
---

# Dotrino — the phone app

Repo [`dotrino-app`](https://github.com/imdotrino/dotrino-app) · Android (Google Play) ·
iPhone and iPad (App Store)

It is the way into Dotrino from your phone. It has four tabs.

| Tab | What for |
|---|---|
| **Home** | the app catalog at [dotrino.com](https://dotrino.com/) |
| **Profile** | your name and the details you choose to show |
| **Vault** | the devices in your account, what each one may do, and your saved keys |
| **Requests** | approve or deny what your devices ask for |

## What you need

- **On Android**, the **Identidad Dotrino** app: it keeps your keys for every Dotrino app on
  the phone. If it is missing, Dotrino explains it and takes you to Google Play. On iPhone
  and iPad nothing else is needed.
- **To approve requests**, a [Dotrino vault](/en/vault/instalacion/) on your computer.
  Without a vault, the Home and Profile tabs work just the same.

## Connect the phone to your vault

1. In the vault, create an invitation for a new device
   ([how to pair](/en/vault/emparejar/)).
2. On the phone, open **Requests** and tap **Add account**. Scan the code or paste the
   invitation.
3. In the vault, give the phone permission to approve
   ([approval from your phone](/en/vault/aprobacion/)).

You can connect the phone to several accounts: each one shows under its name in Requests.

## Approve a request

When a program or a device asks your vault for something, the phone notifies you. The request
says **who is asking for what**: which service's keys, with which command and from which
folder.

- **Approve** lets it in. **Deny** rejects it.
- Approve only if you are the one who just asked. If you were not expecting it, deny it.
- At the bottom of each account you can make approving ask for your fingerprint, your face or
  your screen lock. It starts turned off.

## Remove an account from the phone

In **Requests**, press and hold the account name and confirm. Its key is erased from the
phone. In the vault, the phone stays on the list until you remove it there.

To erase everything, uninstall the app (on Android, Identidad Dotrino too).

## The browser and the app do not share profiles

The profiles in the app are not the ones in Chrome or Safari. How to use the same one in
both: [The browser and installed apps](/en/empezar/navegador-y-apps/).

## Privacy

What is recorded and for how long: [Privacy policy](/en/empezar/politica-de-privacidad/).

## Contact

Questions or bugs: **info@dotrino.com**, or an
[issue in the repository](https://github.com/imdotrino/dotrino-app/issues).
