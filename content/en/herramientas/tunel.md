---
title: The tunnel — reaching your machine without opening ports
description: Expose a local port or service at a public address and inspect requests live.
---

# The tunnel

[`r.dotrino.com`](https://r.dotrino.com/) · repo
[`dotrino-tunnel`](https://github.com/imdotrino/dotrino-tunnel)

The tunnel makes something running on your computer reachable from the internet
**without opening ports on your router** and without signing up for anything. It
is for showing someone what you are working on, for letting an outside service
notify you (*webhooks*), or for a bot to find you.

## With one command

```
npx @dotrino/tunnel 3000
```

The first time, it asks you to **enroll it in your vault**, like any other device: you
paste your vault's invitation and type into the vault the code it shows you to approve
it. Then it hands you an address, `https://r.dotrino.com/<key>/…`, pointing at your
local port.

> **The address belongs to that tunnel and nobody else.** It comes from the tunnel's own
> key, and only it can answer: nobody can take over your address or pose as your
> tunnel. Whoever has the address can still send it requests, so share it with care and
> close the tunnel when you no longer need it.

**Each tunnel is a device of your account.** For another one, give it another name
(`npx @dotrino/tunnel 8080 --name api`): it shows up as one more device in your vault,
and you remove it from there whenever you want. `npx @dotrino/tunnel info` tells you
which one it is.

## As a library

The `@dotrino/tunnel` package can also be used from your own program, to expose a
handler instead of a port. Its README has the API.

## The tester

The page at `r.dotrino.com` is not just a presentation: it is a **tester**. You can
watch the requests arriving at the tunnel live and answer them by hand, which is
the quick way to understand what the service on the other side is sending you. There
the device is your browser: it needs a Dotrino profile, and the address comes from its
key.

Limits: **1 MB** per request and a 30-second timeout.
