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
npx @dotrino/tunnel --port 3000
```

It hands you an address, `https://r.dotrino.com/<key>/…`, pointing at your local
port.

> **The key in the address is the secret.** Whoever has it reaches your service, so
> share it with the same care as a password. When you no longer need it, close the
> tunnel.

## As a library

The `@dotrino/tunnel` package can also be used from your own program, to expose a
handler instead of a port. Its README has the API.

## The tester

The page at `r.dotrino.com` is not just a presentation: it is a **tester**. You can
watch the requests arriving at the tunnel live and answer them by hand, which is
the quick way to understand what the service on the other side is sending you.

Limits: **1 MB** per request and a 30-second timeout.
