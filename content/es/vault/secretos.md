---
title: Secretos de servicios
description: Tus programas dejan de llevar un .env: se enrolan a la bóveda y reciben sus claves solo en memoria.
---

# Secretos de servicios

Los servicios (un proxy, un bot, tu script) **no llevan secretos en su `.env`**: se
enrolan a la bóveda como un miembro más, con un cert limitado a su cajón
(`vault:secrets:<ns>`), y al arrancar piden su bundle. **En la máquina del servicio
no queda ningún secreto**: los valores viven solo en memoria del proceso.

> ¿No sabes cuáles tienes ahora mismo en un `.env`? [El Inspector](/herramientas/inspector/)
> te los enseña uno por uno y te da la receta para traerlos aquí.

## Enrolar (una vez, con un humano)

```sh
# en la BÓVEDA
dotrino-vault pair --service miapp            # invitación con scope SOLO vault:secrets:miapp
dotrino-vault secret set miapp API_KEY sk-…

# en la MÁQUINA del servicio (pega la invitación; te MUESTRA un código)
npx -y @dotrino/env enroll --ns miapp --code <código>

# de vuelta en la bóveda: tecleas los 6 dígitos LEYÉNDOLOS de la pantalla del servicio
dotrino-vault approve 418027
```

Queda `~/.dotrino/service/miapp/service-identity.json` (0600, cifrado ligado a esa
máquina) con la llave del dispositivo — que solo sirve para **pedir**. Re-enrolar el
mismo `ns` **reemplaza** la identidad anterior: así se rota la de una máquina comprometida.

El enrolamiento es aparte del arranque **a propósito**: exige un humano que lea el
código en la pantalla del servicio — lo único que impide que una bóveda falsa enrole
la máquina.

## Usar

```sh
npx -y @dotrino/env run --ns miapp -- node app.js   # variables en el entorno DEL HIJO
npx -y @dotrino/env check --ns miapp                # los NOMBRES (nunca valores)
```

```js
import '@dotrino/vault/config'    // como dotenv/config, pero contra la bóveda
console.log(process.env.API_KEY)
```

**El vault manda**: lo que venga de la bóveda **pisa** el `.env` y el entorno. Es lo
que hace barata la rotación: se cambia en un solo lugar y ningún `.env` rancio
olvidado en un servidor puede seguir ganando.

## Al rotar, el servicio se reinicia

Cuando guardas o borras un secreto, la bóveda avisa (firmado, sin valores) y el
agente **termina** para que su supervisor lo levante con la configuración fresca — en
JavaScript un secreto no se puede borrar de la memoria, y una llave se rota casi
siempre porque se filtró: un proceso nuevo empieza con el heap limpio. **Corre tus
servicios bajo pm2 o systemd con reinicio automático.** Y no se fía del aviso: en
cada conexión el agente **compara** su bundle con el de la bóveda.

## Modos de fallo

- **Bóveda o proxy caídos** → el servicio **espera** (reintento con backoff). Arrancar
  igual sería operar con la configuración vieja.
- **Sin enrolar, cert revocado/vencido, scope equivocado** → **aborta en el acto**:
  hay que (re)enrolar. El cert vive 30 días y se renueva al arrancar cuando le quedan
  menos de 7.
