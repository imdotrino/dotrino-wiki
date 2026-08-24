---
title: Instalar en Linux (.deb / tarball)
description: El instalador de Linux deja la bóveda como servicio systemd --user, con Node embebido; .deb para Ubuntu/Debian y tarball para el resto.
---

# Instalar en Linux

## Ubuntu / Debian — `.deb`

Descarga el `.deb` (versionado) desde
[Releases](https://github.com/imdotrino/dotrino-vault/releases/latest) y haz doble
clic, o en la terminal:

```sh
sudo apt install ./dotrino-vault_*.deb
```

Instala los binarios en `/usr/bin` y la unidad `systemd --user` para **todos** los
usuarios de la máquina (cada uno con su propia bóveda en su `$HOME`). Arranca sola en
tu **próximo inicio de sesión**; para levantarla ya:

```sh
systemctl --user start dotrino-vault      # primera vez
systemctl --user restart dotrino-vault    # si estabas ACTUALIZANDO
```

## Otro Linux x64 — tarball

```sh
tar xzf dotrino-vault-*-linux-x64.tar.gz
cd dotrino-vault-*-linux-x64
sh install.sh
```

Hace lo equivalente en tu `$HOME` (`~/.local/bin` + `~/.config/systemd/user`) y va un
paso más allá: lo **arranca en el acto** y activa `linger`, así la bóveda corre desde
el arranque de la máquina aunque no inicies sesión.

## Lo que hay que saber

- El binario trae **Node embebido**: no necesitas instalar Node ni dependencias.
  Lo único que espera del sistema es `libatomic1` (el `.deb` la instala solo).
- Son **x64/amd64** y el instalador **necesita systemd**. Para ARM —una Raspberry— o
  un Linux sin systemd: [Docker](/vault/instalar-docker/) o
  [`npx`](/vault/instalar-npx/).
- Sin firma de código: tu sistema puede advertir que el binario no está firmado. Es
  autohospedado y de código abierto.

Siguiente paso: [conecta tu primer aparato](/vault/emparejar/).
