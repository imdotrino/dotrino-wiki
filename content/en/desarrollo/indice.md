---
title: The index and the tests
description: Where the real state of the ecosystem is measured, and how the pieces are tested together.
---

# The index and the tests

## The ecosystem index

[`index.dotrino.com`](https://index.dotrino.com/) · repo
[`dotrino-index`](https://github.com/imdotrino/dotrino-index)

The index measures the whole ecosystem and publishes it: which version of each
pillar every app asks for, which convention is missing where, who consumes what,
and **how far behind what each repo says has fallen** compared to what its code
does (red at 30 days).

It is regenerated, never hand-edited:

```
node dotrino-index/indice.mjs          # local report (INDICE.md + ECOSISTEMA.json)
node dotrino-index/indice.mjs --web    # the public page
```

It measures **the repos it has on disk** and keeps the rest with the date of their
last measurement, so it builds up by adding. That is why it pays to pull the repo's
changes before generating.

Look at it before bumping a pillar's version or touching several apps at once: it
is the list of who will notice.

## The end-to-end tests

Repo [`dotrino-test`](https://github.com/imdotrino/dotrino-test)

This is where the ecosystem is tested **together**, not piece by piece. Each piece
runs in its own container —its box— and is spoken to the way any other piece would:
the vault to the proxy, a device to the vault, a real browser to the app.

It covers three levels: the protocol, each device against the real binary, and the
interface with an automated browser.

It is where **every security invariant** we do not want to break again gets
written down: if something broke once in silence, a test here shouts about it.
