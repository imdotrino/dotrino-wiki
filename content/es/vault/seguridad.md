---
title: Cifrado, store y alcance
description: Qué guarda la bóveda, cómo lo cifra en reposo ligado a la máquina, y los límites dichos sin adornos.
---

# Cifrado, store y alcance

## El store del usuario

Un dispositivo enrolado usa la bóveda como su almacén: **hilos** de contenido, el
contador de aperturas que alimenta los «recientes», y tu **perfil** (apodo, avatar) —
la bóveda es la copia autoritativa y todos tus aparatos ven el mismo. El contenido
viaja **cifrado de punta a punta** con la clave de contenido del perfil: el proxy
transporta el sobre pero no puede leerlo.

La excepción, dicha sin adornos: la sincronización del **perfil** todavía viaja sin
cifrar. Es deuda, no diseño.

## Cifrado en reposo

**Todo** lo que la bóveda guarda va cifrado (AES-256-GCM) con una clave derivada de
material de **esta máquina** más un salt local: la llave maestra, el contenido, los
hilos y los secretos. Copiar cualquiera de esos archivos a otro equipo **no sirve de
nada**. Lo mismo en la máquina de cada servicio con su `service-identity.json`.

Lo que **no** resuelve: no protege contra alguien con acceso a esta misma máquina
como tu usuario o como root — puede leer el mismo material que la bóveda. Es subir el
listón (de «copiar un archivo» a «tener tu máquina»), no una imposibilidad
criptográfica. Queda fuera a propósito `activity.log`: la bitácora no guarda
contenidos y se quiere legible.

## Qué atiende la bóveda

Toda petición de un dispositivo enrolado va firmada, con su certificado, y con la
hora dentro de una ventana de ±5 minutos (anti-replay). Lo que pasa queda anotado en
la bitácora: qué dispositivo firmó, renovó o enroló, y qué se rechazó y por qué —
sin el contenido de lo firmado.

## Alcance (hoy y mañana)

- **Hoy (v1):** daemon multi-perfil; Linux como servicio, Windows/macOS con `npx`,
  Docker amd64/arm64; emparejamiento endurecido; acta con capacidades; renovación
  automática de certs; store cifrado de punta a punta; secretos sellados; aprobación
  desde el teléfono; agente SSH en memoria; bitácora.
- **Mañana (v2):** cifrado en reposo **con la contraseña** y atado al TPM/llavero del
  sistema; instalador de un clic para Windows y macOS; UI de escritorio.
