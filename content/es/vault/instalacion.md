---
title: Instalación: elige tu vía
description: Todas las vías dejan la misma bóveda: el instalador de Linux, Windows o macOS, un comando con npx, o Docker.
---

# Instalación: elige tu vía

Todas las vías dejan **la misma bóveda**. Elige por tu sistema:

| Tu caso | Vía | Guía |
|---|---|---|
| Ubuntu / Debian / Fedora / otro Linux x64 | instalador (`.deb`, `.rpm` o tarball): queda como servicio y arranca solo | [Instalar en Linux](/vault/instalar-linux/) |
| Windows 10 / 11 | instalador para tu usuario, con la ventana; arranca solo al iniciar sesión | [Instalar en Windows](/vault/instalar-windows/) |
| macOS (Apple Silicon e Intel) | la app «Dotrino Vault», con la ventana | [Instalar en macOS](/vault/instalar-macos/) |
| cualquier sistema con Node | **un comando** (`npx`), corre en primer plano | [Instalar con un comando](/vault/instalar-npx/) |
| Docker · ARM / Raspberry | imagen oficial amd64/arm64 | [Instalar con Docker](/vault/instalar-docker/) |

Ninguna vía abre puertos ni toca tu router: la bóveda se conecta ella hacia afuera.

## Dónde vive todo

Tus datos —llave incluida— viven en `~/.local/share/dotrino/vault` (Linux y macOS),
`%LOCALAPPDATA%\Dotrino\vault` (Windows) o `/data` (Docker), con permisos
`0600`/`0700` y un subdirectorio por perfil. Se mueve con `DOTRINO_VAULT_DIR`.
Parar y arrancar depende de la vía: `systemctl --user {start,stop,restart}
dotrino-vault`, `docker restart dotrino-vault`, o cerrar la ventana del `npx`. En Windows y macOS, sin terminal: [la ventana de la bóveda](/vault/ventana/).

Después de instalar: [conecta tu primer aparato](/vault/emparejar/).
