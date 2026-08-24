---
title: Llaves SSH sin archivos
description: La llave privada SSH vive sellada en la bóveda y solo existe en la memoria del agente que la pidió.
---

# Llaves SSH sin archivos

Tu llave SSH deja de ser un archivo en `~/.ssh` que cualquier proceso puede copiar:
vive **sellada en la bóveda** como un secreto más, y solo existe en claro en la
**memoria** del agente que la pidió — con tu aprobación en el teléfono, si ese
aparato la pide.

## Puesta en marcha

```sh
# 1) la llave entra a la bóveda (cajón «ssh»; el archivo, en base64)
dotrino-vault secret set ssh SSH_KEY_DOTRINO "$(base64 -w0 ~/.ssh/id_ed25519)"

# 2) en tu PC: enrolar el agente una vez (con aprobación)
#    (en la bóveda: dotrino-vault pair --service ssh --approval)
npx -y @dotrino/env enroll --ns ssh --code <código>

# 3) arrancar el agente: pide el cajón (tu sí en el teléfono) y sirve las llaves
npx -y @dotrino/env ssh-agent --ns ssh
# → export SSH_AUTH_SOCK=/run/user/…/ssh-agent.sock
```

Pon ese `export` en tu shell (la ruta es fija, puede ir en `.bashrc`) y usa `ssh`
como siempre: el reto de cada conexión lo firma el agente **en local**, con la llave
en RAM. La llave **nunca** toca el disco de la PC ni el entorno; cerrar el agente es
olvidarla, y el siguiente arranque vuelve a pedir tu «sí».

- Acepta **ed25519** en formato OpenSSH (sin frase: la bóveda es el candado) y
  **RSA / P-256** en PEM. Varias llaves: varias variables `SSH_KEY_*`.
- `ssh-add -L` lista las públicas (para pegarlas en `authorized_keys` de tus
  servidores). Añadir llaves desde un archivo (`ssh-add ~/.ssh/…`) se **rechaza**:
  la idea es justo que no haya archivos.
