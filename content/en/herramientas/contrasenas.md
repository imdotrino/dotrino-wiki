---
title: Password manager
description: It keeps your passwords and your everyday details in your own vault. The browser gets one at a time, and only when you ask. How to install it and how it works.
---

# Password manager

[`pass.dotrino.com`](https://pass.dotrino.com/) · repo
[`dotrino-passmanager`](https://github.com/imdotrino/dotrino-passmanager)

A Chrome extension that keeps your passwords —and the details you type over and over:
your email, your phone, your address— **in your own vault**. When you sign in somewhere,
it asks for the password **for that site**, uses it and lets it go. A browser normally
holds a copy of all of them; here there is no copy.

None of this reaches Dotrino's servers: not your passwords, not the sites where you use
them.

## Installing it

It is not in the Chrome store yet, so you add it by hand. Once:

1. Download the extension from [pass.dotrino.com](https://pass.dotrino.com/) and unzip
   the folder.
2. In Chrome, open `chrome://extensions` and turn on **Developer mode**.
3. Click **Load unpacked** and pick the folder you just unzipped.

That's it. From then on it keeps your things encrypted in your own browser, asking you for
nothing else: no account, no master password, nothing installed on your computer.

> When you update it, **reload it** on that same page. Chrome keeps the previous version
> running behind the scenes until you say so, and meanwhile you will see odd messages.

## The button on each field

As you click around a page, some fields get a **blue quarter-circle** in their corner,
with Dotrino's bird in it. It shows up **only when it can do something there**:

| The field… | and of that… | The button |
|---|---|---|
| is empty | you have nothing saved | doesn't show |
| is empty | you have something saved | **fill** |
| has something typed | — | **save** |

In one sentence: **it only hides when the field is empty and you have nothing saved for
it.** **One letter** is enough for it to appear.

If what's typed is already saved in one of your accounts, the button **stays**: you may
want it in another one too, or in a new one. Press it and you'll see — the account that
already has it the same offers you nothing, and the one that doesn't, does.

To know that, the manager **opens nothing**: your vault sends it a fingerprint of each
value —one that cannot be turned back into the value— and it compares fingerprints. That is
how it can tell you a password hasn't changed without ever seeing it.

**Nothing is filled for you.** The manager never writes into a form by itself: it marks
where it can help and waits for you to ask. That is on purpose — filling on its own means
deciding for you which field each value goes into, and getting that wrong means typing a
password into the wrong place.

## Private things don't leave without your say-so

When the manager is about to take **something private** out of your vault —a password, a
two-step code, or any field you marked as private— **a confirmation comes up**, and nothing
is handed over until you press **Authorize**. It appears inside the extension, never on the
page: the site you are looking at cannot draw it or answer it for you.

**What it does not ask about**, on purpose:

- filling in something **public** of yours (your name, your email, your phone): typing into
  a form what you typed there yourself is not taking out a secret;
- **saving** or **replacing**: saving doesn't take anything out of your vault, it puts
  something in.

Asking for everything sounds safer and is the opposite: you end up clicking without
reading, and the day it matters you no longer look.

This works the **same** wherever you keep them: in the extension itself, in your computer's
vault, or in one open in a tab. If you close the little window without answering, it counts
as a **no** and nothing happens — it just asks again next time.

## Saving

Two moments, and you decide in both:

- **After you sign in.** When a form is submitted, the next page shows a prompt at the
  bottom right with what is about to be saved. That's when you already know whether the
  password worked.
- **From the field itself**, without submitting anything: press its button and save it
  right there.

Either way you see **one row per value**, with its name, and you pick which ones go in. A
value you already had unchanged doesn't show: there is nothing to decide about it.

### Two accounts that look the same are still two

You can have two accounts on the same site with the same email —one for work, one
personal— or two cards with the same name. **They are two, and they don't get merged.**
Each one has its own identity inside, which isn't shown to you because it wouldn't help:
what you see is the name, and names can repeat.

When two look so alike that there is no telling which one you meant, the prompt **doesn't
choose for you**: the new entry comes selected and you say which. To tell them apart, each
row carries its date.

### Naming a record

Every record is named, to begin with, after what it holds: the username, or the email, or
the first value it has. That works, but with two accounts on the same site both end up
named the same.

Press the **pencil** next to the name and write your own: "the work one", "my mum's".
Confirm with the **tick** next to it (Enter and clicking away do the same), Escape leaves
it as it was, and clearing it brings the old name back — no record is ever left nameless.

The pencil is in all three places your records show up: a field's box, the save prompt and
the extension's list.

When you create a new record you can name it right there. That one has no tick, on purpose:
the record doesn't exist yet — it is created when you save.

### Into which record

At the top you choose **where it goes**: one of the records you already have for that
site, or **a new record**. That's your call and not the manager's, because a page has no
way of knowing which is which: you can have the same account saved twice, with one of
them no longer working.

Each save button says what it will do: **Save** if the value is new in that record,
**Replace** if it was there with a different value.

### Private values

When you save a value you can mark it **private**. It's how you say that this one isn't
like the others — your ID number is not the same as the phone number you type into twenty
sites.

## Filling

Press the field's button and pick which record. You can fill **that one value** or
**every value** that record has on the page, in one go.

Each line in the list shows, next to the name, **what it would fill in**: small and
trimmed, so you can tell two accounts apart without opening anything. Whatever you marked
as private shows covered (`••••••`) and only appears when you press Fill, which is when you
are asked to authorize it.

### When the account is saved under another site

It happens all the time: the subdomain changes and the account is the same. The dialog has
a **magnifier**: search it by name, username or address, and you can fill with it even
though it is saved elsewhere. If you also save into it, this site joins its own and next
time it shows up by itself.

## The extension's list

Clicking the Dotrino icon in Chrome's bar shows what you have **for the site you are
looking at**. For each record you can:

- **Fill** or **copy** its password.
- Mark it **default**: that's the one picked when you open a field's button. One per site.
- **Delete** it, confirming on its own card.

## Where your passwords live

To begin with, **inside the extension itself**: encrypted, with a key the manager cannot
pull out of your browser. Nothing else is needed. What that means, and it's worth knowing:
if you uninstall the extension, they go with it.

When you want them **in one place for every browser you use**, connect [a
vault](/vault/instalacion/) from the extension. That **adds** an account: the one you had
is still there with its own things inside, and you pick which one you're looking at. Each
is a separate [profile](/empezar/identidad/) and they don't see each other — personal and
work live side by side without mixing.

With a connected vault, that confirmation can also be asked **on your phone**, with your
fingerprint (see [approval](/vault/aprobacion/)).

## Bringing yours in, and taking it away

- **Import** what you already keep in 1Password, Bitwarden or Chrome.
- **Export** in the format you choose, whenever you want. It's your information, and
  taking it with you is your decision too.

Both are done by **your vault**, not by the browser:

```
dotrino-passmanager import passwords.csv
dotrino-passmanager export
```

## Two-step codes and passkeys

**Two-step codes** live next to their password and show up when you open it. **Passkeys**
too: when you create one on a site, the key is kept in your vault and signing means asking
for it, like any other credential.
