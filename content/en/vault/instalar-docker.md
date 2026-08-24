---
title: Install with Docker
description: The official image (amd64 and arm64, GHCR): the packaged path for any system and for a Raspberry.
---

# Install with Docker

The only **packaged** path for ARM (a Raspberry running at home is the normal case,
not the exotic one), and it works on any system:

```sh
docker volume create dotrino-vault
docker run -d --name dotrino-vault --restart unless-stopped \
  -v dotrino-vault:/data ghcr.io/imdotrino/dotrino-vault
```

The image is published to GHCR on every release, for **amd64 and arm64**. It opens
no ports and there is nothing to touch on your router.

## The CLI, via `docker exec`

The vault talks to its CLI through files in the volume, not a socket:

```sh
docker exec -it dotrino-vault dotrino-vault pair      # connect a device
docker exec -it dotrino-vault dotrino-vault status
docker exec -it dotrino-vault dotrino-vault tui
```

## The important part

- **The volume IS your account.** Delete the `dotrino-vault` volume and that
  identity **cannot be recovered** — there is no backup phrase, no recovery.
- Upgrading: `docker pull ghcr.io/imdotrino/dotrino-vault && docker restart dotrino-vault`
  (the volume keeps everything).

Next step: [pair your first device](/en/vault/emparejar/).
