---
title: Instalar con un comando (npx)
description: La vía de Windows y macOS (y de cualquier sistema con Node): npx -y @dotrino/vaultd, en primer plano.
---

# Instalar con un comando (`npx`)

Es la vía normal en **Windows y macOS**, y sirve igual en Linux:

```sh
npx -y @dotrino/vaultd          # Node ≥ 20
npx -y @dotrino/vaultd --tui    # la bóveda y su pantalla de control en la misma ventana
```

Arranca **en primer plano**: la bóveda vive mientras dejes esa ventana abierta.

## ¿No tienes Node?

El instalador del ecosistema lo baja en tu carpeta, **sin permisos de
administrador**, y corre el paquete:

```sh
# Linux y macOS
curl -fsSL https://install.dotrino.com/install.sh | sh -s -- @dotrino/vaultd
# Windows (PowerShell)
& ([scriptblock]::Create((irm https://install.dotrino.com/install.ps1))) @dotrino/vaultd
```

En Windows, si el instalador te bajó Node, una ventana **nueva** de PowerShell no lo
encuentra todavía; pega esto antes:

```powershell
$env:Path = "$env:LOCALAPPDATA\Dotrino\node;$env:Path"
```

## Los comandos de control

Con esta vía, los comandos se anteponen con `npx -p @dotrino/vaultd`:

```sh
npx -p @dotrino/vaultd dotrino-vault pair
npx -p @dotrino/vaultd dotrino-vault status
```

La [CLI completa](/vault/cli/) y la [TUI](/vault/tui/) tienen su propia página.
Siguiente paso: [conecta tu primer aparato](/vault/emparejar/).
