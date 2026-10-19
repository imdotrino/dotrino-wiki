---
title: La réplica en la nube
description: Una copia de tu bóveda que corre en la nube y contesta por tu cuenta aunque tu bóveda esté apagada. Cuánto cuesta, cómo se añade a tu cuenta y cómo se cancela.
---

# La réplica en la nube

Tu bóveda vive en tu computadora o en tu teléfono, y cuando están apagados tus aparatos no la
encuentran. La **réplica en la nube** se suma a tu cuenta y contesta por ella mientras tu bóveda
está apagada: se despierta cuando un aparato tuyo la necesita y se vuelve a dormir sola.

No hace falta para usar Dotrino: todo funciona sin ella.

## Qué hace y qué no

- Guarda una copia de lo que tu bóveda ya firmó y selló, y se la entrega a tus aparatos.
- **No puede abrir nada**: no tiene tu llave maestra ni la de tus contraseñas, y no firma por ti.
- Entra a tu cuenta como cualquier otro aparato: **solo con una invitación de tu bóveda y un
  código que apruebas tú**. Sin eso no entra.
- Se administra desde tu propio perfil. No hay que cambiar de cuenta para nada.

## Cuánto cuesta

US$ 3 al mes más IVA (US$ 3,45 en total). Se cobra con PayPal, se renueva sola cada mes y la
cancelas cuando quieras. Se contrata **desde el navegador**, en
[vault.dotrino.com/hosted](https://vault.dotrino.com/hosted): dentro de las apps del teléfono no se
vende nada.

## Cómo se contrata

1. Entra a [vault.dotrino.com/hosted](https://vault.dotrino.com/hosted) con el perfil de tu cuenta
   y pulsa **Contratar con PayPal**.
2. Aprueba la suscripción en PayPal. Te devuelve a la misma página.
3. La réplica tarda un par de minutos en crearse. Deja la pestaña abierta.

## Añadirla a tu cuenta

Cuando está lista, la página te pide una **invitación** de tu bóveda:

- Si tu bóveda es **ese mismo navegador**, pulsa **Sacar la invitación en este navegador**.
- Si tu bóveda está en tu computadora, ejecuta allí `dotrino-vault pair --scope replica --quiet` y
  pega lo que imprime.

La página te enseña entonces un **código**. Apruébalo en tu bóveda (en el navegador, con el botón
**Aprobarlo**; en la computadora, con `dotrino-vault approve <código>`). Al aprobarlo, la réplica
sale como **en tu cuenta**.

La invitación dura 5 minutos: si caduca, saca otra. Si no la añades en un día, la réplica se
cancela y **se te devuelve el dinero**.

## Cancelar

En [vault.dotrino.com/hosted](https://vault.dotrino.com/hosted), en **Tus réplicas**, pulsa
**Cancelar**. Sigue encendida hasta el final del mes que pagaste y después se apaga. **Lo guardado
no se borra**: si vuelves a pagar, vuelve tal cual estaba.

Si un cobro falla, PayPal lo reintenta. Si al acabar lo pagado sigue sin pagarse, la réplica se
apaga de la misma forma, sin borrar nada.

## Qué guarda Dotrino y qué no

- Lo que guarda la réplica va **cifrado** en el servidor, y lo que es tuyo va sellado para tus
  aparatos: la réplica tampoco lo puede leer.
- Dotrino sabe que tienes una réplica y cuándo se usa, porque la despierta.
- A PayPal le llega el cobro y un número de pedido, nada de tu cuenta de Dotrino.
