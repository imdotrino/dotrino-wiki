---
title: Instalación: elige tu vía
description: Tres vías y todas dejan la misma bóveda: el instalador de Linux, un comando con npx, o Docker.
---

# Instalación: elige tu vía

Tres vías, y todas dejan **la misma bóveda**. Elige por tu sistema:

| Tu caso | Vía | Guía |
|---|---|---|
| Ubuntu / Debian / otro Linux x64 | instalador (`.deb` o tarball): queda como servicio y arranca solo | [Instalar en Linux](/vault/instalar-linux/) |
| Windows · macOS · cualquier sistema con Node | **un comando** (`npx`), corre en primer plano | [Instalar con un comando](/vault/instalar-npx/) |
| Docker · ARM / Raspberry | imagen oficial amd64/arm64 | [Instalar con Docker](/vault/instalar-docker/) |

Ninguna vía abre puertos ni toca tu router: la bóveda se conecta ella hacia afuera.

## Dónde vive todo

Tus datos —llave incluida— viven en `~/.local/share/dotrino/vault` (Linux y macOS),
`%LOCALAPPDATA%\Dotrino\vault` (Windows) o `/data` (Docker), con permisos
`0600`/`0700` y un subdirectorio por perfil. Se mueve con `DOTRINO_VAULT_DIR`.
Parar y arrancar depende de la vía: `systemctl --user {start,stop,restart}
dotrino-vault`, `docker restart dotrino-vault`, o cerrar la ventana del `npx`.

Después de instalar: [conecta tu primer aparato](/vault/emparejar/).
