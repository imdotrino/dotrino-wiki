---
title: Emparejar un aparato
description: Los dos caminos de vinculación y el emparejamiento endurecido con código de 6 dígitos que no viaja.
---

# Emparejar un aparato

Vincular tiene **exactamente dos caminos**, y la bóveda pregunta antes de enseñar el QR:

- **El aparato entra a una cuenta de la bóveda** — la que elijas, o una nueva
  (`pair --new-account`). El aparato estrena una llave; nada de lo suyo se sobrescribe.
- **La bóveda adopta la cuenta del aparato** (`pair --adopt`): la cuenta sigue siendo
  la misma para todo el mundo —el mismo `profileId`, la misma reputación— y lo que
  cambia es quién sella.

**No existe fusionar dos cuentas**, ni al vincular ni después.

## El emparejamiento endurecido

1. La bóveda emite una **invitación** (QR + enlace + código pegable, 5 minutos de
   vida). Lo que va dentro no es su dirección: es una **cita** de un solo uso que
   emite el proxy.
2. El dispositivo la canjea, prueba posesión de su llave firmando el enrolamiento, y
   **muestra en su pantalla un código de 6 dígitos**. El código **no viaja**: solo su
   compromiso criptográfico.
3. Tú lo tecleas en la bóveda (`dotrino-vault approve 123456`). La bóveda recompone
   el compromiso y **solo si coincide** firma el certificado. Aprobar exige haber ido
   a leer la pantalla del dispositivo — una bóveda falsa, que nunca vio el código,
   no puede enrolarlo.

La revocación (`revoke`) le ordena al dispositivo **autoborrarse**, con firma de la
llave que manda — no por un mensaje cualquiera.

> El porqué y las amenazas que cierra:
> [`docs/pairing-protocol.md`](https://github.com/imdotrino/dotrino-vault/blob/main/docs/pairing-protocol.md)
> y [`docs/vinculacion-de-cuentas.md`](https://github.com/imdotrino/dotrino-vault/blob/main/docs/vinculacion-de-cuentas.md).
