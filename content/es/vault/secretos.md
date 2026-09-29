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

Queda `~/.dotrino/service/<bóveda>/miapp/service-identity.json` (0600, cifrado ligado a esa
máquina) con la llave del dispositivo — que solo sirve para **pedir**. Re-enrolar el
mismo `ns` **reemplaza** la identidad anterior: así se rota la de una máquina comprometida.

El enrolamiento es aparte del arranque **a propósito**: exige un humano que lea el
código en la pantalla del servicio — lo único que impide que una bóveda falsa enrole
la máquina.

## Usar

```sh
npx -y @dotrino/env run --ns miapp -- node app.js   # variables en el entorno DEL HIJO
npx -y @dotrino/env check --ns miapp                # los NOMBRES (nunca valores)
npx -y @dotrino/env info                            # qué aparato es: su ID, su bóveda
```

```js
import '@dotrino/vault/config'    // como dotenv/config, pero contra la bóveda
console.log(process.env.API_KEY)
```

**El vault manda**: lo que venga de la bóveda **pisa** el `.env` y el entorno. Es lo
que hace barata la rotación: se cambia en un solo lugar y ningún `.env` rancio
olvidado en un servidor puede seguir ganando.

## Traer tu `.env` de golpe

Para migrar un servicio que ya tiene su `.env`, no hace falta copiar las variables una a
una en la bóveda: súbelas desde la propia máquina del servicio.

```sh
npx -y @dotrino/env import                          # sube ./.env al cajón de este servicio
npx -y @dotrino/env import config/.env --public SITE_URL,REGION   # esas dos, públicas
npx -y @dotrino/env set API_KEY=sk-… --ns miapp     # sueltas, en la orden
```

Los valores se sellan **en la máquina del servicio**: la bóveda guarda sobres que no puede
leer, y en pantalla solo salen los nombres. Todas son privadas salvo las que marques con
`--public`. Si una línea del archivo está mal escrita, no se sube nada y te dice cuál.

Qué pasa con lo que envías lo decide tu cuenta:

- **Si alguien puede aprobar**, se pide aprobación **siempre** (también a un servicio que
  arranca sin preguntar). Con el sí se guarda, y **también puede cambiar** las variables
  que ya existían.
- **Si nadie puede aprobar**, se guarda en el acto, pero **solo las que faltan**: las que
  ya existen no se tocan.
- **Borrar**, nunca desde aquí: eso se hace en la bóveda.

Un servicio solo escribe en **su** cajón. Un agente (terminal, IA, contenido…) usa su
enlace en vez de la identidad de `dotrino-env`: `--link <carpeta del enlace> --ns <cajón>`.

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
  hay que (re)enrolar. El cert no caduca por fecha: vale mientras tu acta lo diga, y se
  rehace solo cuando cambias sus permisos.
