---
title: The public sealer registry
description: Where an outsider checks whether the key that signed something a year ago still belongs to your account, without you publishing anything of your own.
---

# The public sealer registry

There is a question a signature cannot answer on its own:

> One of your vaults signed this a year ago. **Is it still yours?**

If you removed that machine's permission —it was lost, you sold it, whoever ran it left—
the person who kept your record from back then **never finds out**. And they would keep
trusting a device that no longer speaks for you. The registry is the place to look.

## What gets published (and what doesn't, which is nearly everything)

**Your record is not published.** Inside it are your devices with the names you gave them,
when each one joined and which services you run: that is the inventory of your house, and
it stays there.

What gets published is the only thing a stranger needs: the list of moments when **who can
seal changed**. It is a short list, because that happens very rarely.

**If you have a single vault you never appear in the registry.** It is not that you are
hidden: there is nothing to tell. A lone vault cannot take the permission away from itself,
so nobody will ever hold stale information about you. Only someone with two shows up, and
for them it is one line, the day they added the second.

And your account appears there under a **number derived from your identity**, not your name
or your key. Someone who has already read you can work it out and find you; someone who
downloads the whole registry gets a list of numbers that tell them nothing about anyone.

## Why you can trust it without trusting it

The registry **cannot lie**. Every entry is checked against the first document of your
account, signed by the key that gives it its name, and that check runs in the reader's
software, not in the registry. Nobody can claim there that one of their machines seals for
you: the maths would not add up.

The worst a registry can do is **stay quiet** — not tell you about a change. And the
defence against that is not trusting it more, but having several: the registry is a public
repository, and **whoever copies it becomes another witness**. If two of them disagree,
that in itself is the answer.

## Who publishes

Your vault does it by itself, when something changes and when it starts. You do not have to
remember.

And if it was off the day it mattered, **anyone can deposit it**: another device of yours,
or even someone who verified you. Publishing is not a privilege, because what is published
checks out on its own — sending it is a favour, not a permission.

## Running your own

Dotrino's registry is not the only one possible, and that is the point. Copying it is a
`git clone`, and running your own is a small program that listens, checks and records. It
lives at [dotrino-sealers](https://github.com/imdotrino/dotrino-sealers), with instructions
in its README.

An account can also **say where its chain lives**, so whoever reads it knows which registry
to ask. If it doesn't say, Dotrino's is the one to check.
