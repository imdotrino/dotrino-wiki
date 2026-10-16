---
title: Instalar en macOS
description: La app «Dotrino Vault», para Apple Silicon e Intel, con la bóveda dentro y su ventana.
---

# Instalar en macOS

1. Descarga `dotrino-vault-X.Y.Z-macos-universal.zip` de la
   [página de versiones](https://github.com/imdotrino/dotrino-vault/releases/latest) y
   ábrelo.
2. Arrastra **Dotrino Vault** a *Aplicaciones*.
3. La primera vez, ábrela con **clic derecho → Abrir**. macOS avisa porque la app no lleva
   la firma de un desarrollador registrado en Apple; lo que prueba de dónde salió está más
   abajo.

Se abre [la ventana de la bóveda](/vault/ventana/). Si la bóveda no está encendida, la
ventana lo dice y la arranca con **Arrancar**.

## Arranque al iniciar sesión

En la ventana, **Ajustes → La bóveda no arranca sola → Cambiar**. Queda un agente de tu
usuario (`~/Library/LaunchAgents/com.dotrino.vault.plist`) que la levanta al entrar y la
vuelve a levantar si se cae. Si mueves la app de carpeta, apágalo y vuelve a encenderlo.

## Actualizar y desinstalar

- **Actualizar:** reemplaza la app por la nueva. En macOS la bóveda todavía no se
  actualiza sola.
- **Desinstalar:** apaga el arranque en Ajustes y borra la app. Tus datos se quedan en
  `~/.local/share/dotrino/vault`.

## Comprobar la app

```sh
gh attestation verify dotrino-vault-X.Y.Z-macos-universal.zip --repo imdotrino/dotrino-vault
```
