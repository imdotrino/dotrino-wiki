---
title: El instalador de Dotrino
description: Un comando deja funcionando cualquier herramienta de Dotrino en tu computadora, sin permisos de administrador.
---

# El instalador de Dotrino

[`install.dotrino.com`](https://install.dotrino.com/) · repo
[`dotrino-install`](https://github.com/imdotrino/dotrino-install)

Las herramientas que corren en tu computadora —[la bóveda](/vault/instalacion/),
[la terminal](/herramientas/terminal/), [el túnel](/herramientas/tunel/)— se
ponen a andar con un solo comando. Si falta algo para que funcionen, el
instalador lo baja él.

## Linux y macOS

```
curl -fsSL https://dotrino.com/install.sh | sh -s -- <herramienta>
```

## Windows (PowerShell)

```
irm https://dotrino.com/install.ps1 | iex; dotrino-install <herramienta>
```

Sustituye `<herramienta>` por el nombre del paquete que quieres, por ejemplo
`@dotrino/vault`.

## Qué hace y qué no hace

- **No pide permisos de administrador.** Todo queda en tu carpeta de usuario.
- **No toca tu sistema.** Si no tienes Node instalado, se trae su propia copia en
  vez de cambiar la tuya.
- **Es una alternativa, no la única vía.** Si ya usas `npx` o prefieres el
  instalador `.deb`, siguen valiendo: mira
  [Instalación de la bóveda](/vault/instalacion/).

## El botón «Instalar app»

El mismo repositorio publica el componente que pinta el botón **Instalar app** en
la barra de las aplicaciones web del ecosistema. Es lo que hace que una app se
pueda [poner en tu pantalla de inicio](/empezar/instalar-apps/).
