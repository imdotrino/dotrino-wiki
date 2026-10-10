---
title: El instalador de Dotrino
description: Un comando deja funcionando cualquier herramienta de Dotrino en tu computadora, sin permisos de administrador.
---

# El instalador de Dotrino

[`install.dotrino.com`](https://install.dotrino.com/) · repo
[`dotrino-install`](https://github.com/imdotrino/dotrino-install)

Un solo comando instala cualquier herramienta de Dotrino que corre en tu computadora y
deja su comando listo para usar. Si no tienes Node, el instalador baja su propia copia.

## El comando

Linux y macOS:

```
curl -fsSL https://install.dotrino.com/install.sh | sh -s -- <herramienta>
```

Windows (PowerShell):

```
& ([scriptblock]::Create((irm https://install.dotrino.com/install.ps1))) <herramienta>
```

Sustituye `<herramienta>` por el paquete de la tabla.

## Qué herramienta poner

| Quieres | `<herramienta>` | Comando que te queda |
|---|---|---|
| [La bóveda](/vault/instalacion/) | `@dotrino/vaultd` | `dotrino-vaultd` (la bóveda) y `dotrino-vault` (su control) |
| [La terminal](/herramientas/terminal/) | `@dotrino/terminal-agent` | `dotrino-terminal` |
| [El asistente de IA](/herramientas/ia/) | `@dotrino/ia-agent` | `dotrino-ia-agent` |
| [El túnel](/herramientas/tunel/) | `@dotrino/tunnel` | `dotrino-tunnel` |
| [El inspector](/herramientas/inspector/) | `@dotrino/inspector` | `dotrino-inspector` |
| [Las variables de un servicio](/vault/secretos/) | `@dotrino/env` | `dotrino-env` |

Por ejemplo, la terminal en Linux:

```
curl -fsSL https://install.dotrino.com/install.sh | sh -s -- @dotrino/terminal-agent
```

## Después de instalar

El instalador **instala y sale**: no arranca la herramienta. Te dice el nombre del
comando y qué archivo tocó para ponerlo a tu alcance.

1. **Abre una terminal nueva** (o recarga la que tienes), para que encuentre el comando.
2. Escribe el comando de la tabla, por ejemplo `dotrino-terminal`.

Si quieres instalar y hacer algo en el mismo paso, pon la orden después del paquete:

```
curl -fsSL https://install.dotrino.com/install.sh | sh -s -- @dotrino/terminal-agent enroll
```

## Actualizar

Vuelve a correr el mismo comando: trae la versión más nueva y reemplaza la anterior.

## Opciones

Van **antes** del nombre de la herramienta:

| Opción | Qué hace |
|---|---|
| `--run-once` | no instala: corre la herramienta una sola vez |
| `--no-path` | no toca la configuración de tu terminal; te enseña la línea para que la pegues tú |
| `--ignore-scripts` | no ejecuta los pasos de instalación de las piezas que trae dentro (alguna herramienta puede quedar sin funcionar) |

```
curl -fsSL https://install.dotrino.com/install.sh | sh -s -- --no-path @dotrino/tunnel
```

## Qué toca en tu computadora

- **No pide permisos de administrador.** Todo queda en la carpeta `.dotrino` de tu
  usuario (`~/.dotrino` en Linux y macOS, `%USERPROFILE%\.dotrino` en Windows).
- **No cambia tu Node.** Si no tienes uno, baja el suyo a esa misma carpeta.
- **Añade una línea** al arranque de tu terminal (`~/.bashrc`, `~/.zshrc` o
  `~/.profile`) entre las marcas `# >>> dotrino >>>`, y te dice en cuál. En Windows
  añade la carpeta al `PATH` de tu usuario.

## Quitarlo

Borra la carpeta `.dotrino` y quita el bloque `# >>> dotrino >>>` del archivo de tu
terminal (en Windows, la entrada del `PATH` de tu usuario). Ojo: en esa misma carpeta
viven los enlaces de tus herramientas con tu bóveda (`~/.dotrino/agent`); si la borras,
tendrás que volver a enlazarlas.

## Otras formas de instalar

El instalador es una vía, no la única. La bóveda tiene además paquetes `.deb` y `.rpm`
y una imagen de Docker ([Instalación de la bóveda](/vault/instalacion/)), y la terminal
tiene su [app de escritorio](/herramientas/terminal-escritorio/). Quien ya tiene Node
puede usar `npx` o `npm install -g` con los mismos nombres de la tabla.

## El botón «Instalar app»

El mismo repositorio publica el componente que pinta el botón **Instalar app** en
la barra de las aplicaciones web del ecosistema. Es lo que hace que una app se
pueda [poner en tu pantalla de inicio](/empezar/instalar-apps/).
