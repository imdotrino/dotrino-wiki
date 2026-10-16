---
title: Instalar en Windows
description: Un instalador para tu usuario, sin permisos de administrador, con la ventana de la bóveda y el arranque al iniciar sesión.
---

# Instalar en Windows

1. Descarga `dotrino-vault-X.Y.Z-windows-x64-setup.exe` de la
   [página de versiones](https://github.com/imdotrino/dotrino-vault/releases/latest).
2. Ábrelo. Windows avisa de que el editor es desconocido: pulsa **Más información →
   Ejecutar de todas formas**. El instalador no lleva la firma de un editor registrado en
   Microsoft, y no la va a llevar; lo que prueba de dónde salió está más abajo.
3. Deja marcada **Arrancar la bóveda al iniciar sesión** y termina.

No pide permisos de administrador: se instala solo para ti, en
`%LOCALAPPDATA%\Programs\Dotrino Vault`. Al terminar, la bóveda ya está encendida, sin
ventana, y **Dotrino Vault** queda en el menú Inicio: es [la ventana de la
bóveda](/vault/ventana/), donde se manejan tus aparatos, tus llaves y tus variables.

## Arranque al iniciar sesión

Se cambia en la ventana, en **Ajustes**, o desde una terminal:

```
"%LOCALAPPDATA%\Programs\Dotrino Vault\dotrino-vault.cmd" service autostart on
"%LOCALAPPDATA%\Programs\Dotrino Vault\dotrino-vault.cmd" service autostart off
```

Mientras está apagado, la bóveda solo corre cuando la abres.

## Actualizar y desinstalar

- **Actualizar:** no hace falta. Una vez al día la bóveda mira si hay versión nueva, la
  comprueba y la instala; se cierra un momento y vuelve sola, y la ventana también. Para
  que antes te pida permiso en el teléfono, actívalo en **Ajustes**.
- **Desinstalar:** desde *Configuración → Aplicaciones*. Tus datos se quedan en
  `%LOCALAPPDATA%\Dotrino\vault`: son tu cuenta, y borrarlos es otra decisión.

## Comprobar el instalador

```
gh attestation verify dotrino-vault-X.Y.Z-windows-x64-setup.exe --repo imdotrino/dotrino-vault
```

Si coincide, el archivo salió del código publicado, construido por el flujo de
publicación del repositorio.
