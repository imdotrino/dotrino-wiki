---
title: Instalar en Linux (.deb / .rpm / tarball)
description: El instalador de Linux deja la bóveda como servicio systemd --user, con Node embebido; .deb para Ubuntu/Debian, .rpm para Fedora/RHEL/openSUSE y tarball para el resto.
---

# Instalar en Linux

## Ubuntu / Debian — `.deb`

Descarga el `.deb` (versionado) desde
[Releases](https://github.com/imdotrino/dotrino-vault/releases/latest) y haz doble
clic, o en la terminal:

```sh
sudo apt install ./dotrino-vault_*.deb
```

Instala el servicio para **todos** los usuarios de la máquina (cada uno con su propia
bóveda en su `$HOME`). El programa se copia a tu carpeta la primera vez que arranca, y
desde ahí **se actualiza solo**, sin `sudo`. Arranca sola en
tu **próximo inicio de sesión**; para levantarla ya:

```sh
systemctl --user start dotrino-vault      # primera vez
systemctl --user restart dotrino-vault    # si estabas ACTUALIZANDO
```

## Fedora / RHEL / openSUSE — `.rpm`

Descarga el `.rpm` (versionado) desde
[Releases](https://github.com/imdotrino/dotrino-vault/releases/latest) e instálalo:

```sh
sudo dnf install ./dotrino-vault-*.x86_64.rpm                           # Fedora, RHEL y derivadas
sudo zypper install --allow-unsigned-rpm ./dotrino-vault-*.x86_64.rpm   # openSUSE
```

Deja lo mismo que el `.deb`: el servicio para todos los usuarios de la máquina y el
programa en tu carpeta, que se actualiza solo. Arranca en tu próximo inicio de sesión, o ya con
`systemctl --user start dotrino-vault`.

El paquete no lleva firma GPG, y por eso `zypper` pide `--allow-unsigned-rpm`. Para
comprobar de dónde salió:

```sh
gh attestation verify dotrino-vault-*.x86_64.rpm --repo imdotrino/dotrino-vault
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

- **Se actualiza sola**, con cualquiera de los tres instaladores (el `.deb` y el `.rpm`,
  desde la versión 0.150.0). Una vez al día mira si hay versión nueva, la baja, comprueba
  de dónde salió y la instala en tu carpeta. Si prefieres que te pida permiso antes:
  `dotrino-vault update --approval on`.
- Quitar el paquete (`sudo apt remove dotrino-vault` o `sudo dnf remove dotrino-vault`)
  no borra tu bóveda ni tus datos: siguen en `~/.local/share/dotrino`.

- El binario trae **Node embebido**: no necesitas instalar Node ni dependencias.
  Lo único que espera del sistema es `libatomic1` (el `.deb` y el `.rpm` la instalan solos).
- Son **x64/amd64** y el instalador **necesita systemd**. Para ARM —una Raspberry— o
  un Linux sin systemd: [Docker](/vault/instalar-docker/) o
  [`npx`](/vault/instalar-npx/).
- Sin firma de código: tu sistema puede advertir que el binario no está firmado. Es
  autohospedado y de código abierto.

Siguiente paso: [conecta tu primer aparato](/vault/emparejar/).
