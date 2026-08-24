---
title: Instalación
description: Tres vías y todas dejan la misma bóveda: el .deb de Linux, un comando con npx, o Docker (amd64/arm64).
---

# Instalación

Tres vías, y todas dejan la misma bóveda: el **instalador de Linux** (queda como
servicio), **un comando** (`npx`, en cualquier sistema con Node) y **Docker**.

## Ubuntu / Debian — `.deb`

Descarga el `.deb` (versionado) desde
[Releases](https://github.com/imdotrino/dotrino-vault/releases/latest) y:

```sh
sudo apt install ./dotrino-vault_*.deb
```

Instala los binarios en `/usr/bin` y la unidad `systemd --user` para **todos** los
usuarios (cada uno con su propia bóveda en su `$HOME`). Arranca sola en tu próximo
inicio de sesión; para levantarla ya: `systemctl --user start dotrino-vault`.
Si estás **actualizando**: `systemctl --user restart dotrino-vault`.

## Otro Linux x64 — tarball

```sh
tar xzf dotrino-vault-*-linux-x64.tar.gz
cd dotrino-vault-*-linux-x64
sh install.sh
```

Instala en tu `$HOME`, arranca en el acto y activa `linger` (la bóveda corre desde el
arranque de la máquina aunque no inicies sesión). El binario trae **Node embebido**;
solo espera `libatomic1` del sistema.

## Cualquier sistema con Node — un comando

```sh
npx -y @dotrino/vaultd          # Node ≥ 20
npx -y @dotrino/vaultd --tui    # la bóveda y su pantalla de control en la misma ventana
```

Es la vía normal en **Windows y macOS**. Corre en primer plano: la bóveda vive
mientras dejes esa ventana abierta. Si no tienes Node, el instalador del ecosistema
lo baja sin permisos de administrador:

```sh
# Linux y macOS
curl -fsSL https://install.dotrino.com/install.sh | sh -s -- @dotrino/vaultd
# Windows (PowerShell)
& ([scriptblock]::Create((irm https://install.dotrino.com/install.ps1))) @dotrino/vaultd
```

## Docker (y ARM / Raspberry)

```sh
docker volume create dotrino-vault
docker run -d --name dotrino-vault --restart unless-stopped \
  -v dotrino-vault:/data ghcr.io/imdotrino/dotrino-vault

docker exec -it dotrino-vault dotrino-vault pair   # conectar un aparato
```

Imagen para amd64 **y arm64** en GHCR. No abre ningún puerto. **El volumen ES tu
cuenta**: si lo borras, esa identidad no se recupera.

## Dónde vive todo

Tus datos —llave incluida— viven en `~/.local/share/dotrino/vault` (Linux y macOS),
`%LOCALAPPDATA%\Dotrino\vault` (Windows) o `/data` (Docker), con permisos
`0600`/`0700` y un subdirectorio por perfil. Se mueve con `DOTRINO_VAULT_DIR`.
