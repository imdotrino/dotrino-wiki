---
title: Install with Docker
description: The official image (amd64 and arm64, GHCR), why the disk key is not optional here, and the two ways to connect the first device.
---

# Install with Docker

The only **packaged** path for ARM (a Raspberry running at home is the normal case, not
the exotic one), and it works on any system. It opens no ports and there is nothing to
touch on your router: the vault listens to nothing, it connects outwards.

```sh
docker volume create dotrino-vault
docker run -d --name dotrino-vault --restart unless-stopped \
  -e AWS_REGION=us-east-1 -e DOTRINO_KMS_KEY_ID=alias/dotrino-vault \
  -v dotrino-vault:/data ghcr.io/imdotrino/dotrino-vault
```

The image is published to GHCR on every release, for **amd64 and arm64**.

## Here the disk key is NOT optional

Those two variables are not decoration, and it is the first thing to understand on this
page.

The key that encrypts the vault is derived from the machine by default, and in a container
"the machine" **is the container id, which changes on every `docker run`**. Without a key
that does not depend on it, the normal cycle — update the image, remove the container and
bring it back up, move the disk to another instance — used to leave the account
**unreadable forever**.

Today the vault **refuses to start** and explains itself instead of breaking anything. But
refusing does not recover. Bring it up with its key **from day one** and the container
becomes what it should be: disposable.

How to configure it, with AWS KMS or anything else (OpenBao, a script of your own):
**[The disk key (KMS)](/en/vault/kms/)**.

## The first device: two paths

This is a container's only real problem. A vault has to **show** an invitation and
**receive** a typed code, and here there is neither a screen nor a keyboard. The difference
between the two paths is **where the human is**.

### 1) A new account, born here — you have to get into the container

This vault is the only one, so it is the one that has to invite, and somebody has to reach
it. That is not a defect: it is what showing something and getting an answer back means.

```sh
docker exec dotrino-vault dotrino-vault pair --admin --quiet
# → prints ONE line: the invitation. Open it (or paste it) at vault.dotrino.com/vault
# → the browser shows a 6-digit code:
docker exec dotrino-vault dotrino-vault approve 123456
```

- `--admin` is what turns that device into a **console**: it will be able to connect and
  remove devices without coming back here. The QR does **not** carry the permission — no QR
  grants administration — it is a local note in the vault, applied when you approve the code.
- `--quiet` gives you the invitation and exits, instead of painting a QR and waiting.
  Nobody looks at a QR in a server's terminal.

On Kubernetes it is `kubectl exec`; on ECS, `aws ecs execute-command`.

### 2) You already have a vault — the container joins that account

This is the path for deploying, because **everything interactive happens on the side where
a human is**: your machine invites, the container accepts, and you type the code. You never
go into the container.

It is explained in full, with the complete `docker run`, in
**[Two vaults, one account](/en/vault/multivault/)**.

It also leaves you where you want to be: two vaults in the same account, and the new one
can admit devices on its own the day the first is lost.

## The CLI, via `docker exec`

The vault talks to its CLI through files on the volume, not a socket:

```sh
docker exec -it dotrino-vault dotrino-vault status
docker exec -it dotrino-vault dotrino-vault members
docker exec -it dotrino-vault dotrino-vault tui
```

## What matters

- **The volume IS your account.** Delete it and that identity is **not recoverable** —
  there is no recovery phrase. So a disaster does not take it with it, keep a
  [second vault](/en/vault/multivault/).
- **One disk, one vault per folder.** Two containers over the same data are not two vaults:
  they are the same one running twice. The second refuses and says who holds it. Several
  vaults do fit on one disk (an EFS), each in its own folder.
- If you kill the container the hard way (`docker rm -f`), the lock takes a minute to expire
  before another can start. With `docker stop` it is released immediately.
- Updating: `docker pull ghcr.io/imdotrino/dotrino-vault && docker restart dotrino-vault`
  (the volume keeps everything).

Next step: [connect your first device](/en/vault/emparejar/).
