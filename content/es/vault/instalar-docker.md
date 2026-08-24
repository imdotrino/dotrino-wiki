---
title: Instalar con Docker
description: La imagen oficial (amd64 y arm64, GHCR): la vía empaquetada para cualquier sistema y para una Raspberry.
---

# Instalar con Docker

La única vía **empaquetada** para ARM (una Raspberry encendida en casa es el caso
normal, no el exótico), y sirve en cualquier sistema:

```sh
docker volume create dotrino-vault
docker run -d --name dotrino-vault --restart unless-stopped \
  -v dotrino-vault:/data ghcr.io/imdotrino/dotrino-vault
```

La imagen se publica en GHCR en cada versión, para **amd64 y arm64**. No abre ningún
puerto ni hay que tocar el router.

## El CLI, por `docker exec`

La bóveda le habla a su CLI por archivos del volumen, no por un socket:

```sh
docker exec -it dotrino-vault dotrino-vault pair      # conectar un aparato
docker exec -it dotrino-vault dotrino-vault status
docker exec -it dotrino-vault dotrino-vault tui
```

## Lo importante

- **El volumen ES tu cuenta.** Si borras `dotrino-vault` (el volumen), esa identidad
  **no se recupera** — no hay frase de respaldo ni recuperación.
- Actualizar: `docker pull ghcr.io/imdotrino/dotrino-vault && docker restart dotrino-vault`
  (el volumen conserva todo).

Siguiente paso: [conecta tu primer aparato](/vault/emparejar/).
