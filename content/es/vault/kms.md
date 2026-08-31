---
title: La clave del disco (KMS)
description: De dónde sale la clave que cifra la bóveda, cómo se enrola un perfil que NACE en un KMS, y por qué migrar después no es lo mismo.
---

# La clave del disco (KMS)

Todo lo que la bóveda guarda va cifrado en el disco: la maestra, tus secretos, tu
contenido. La pregunta es **de dónde sale la clave que lo cifra**, y hay dos respuestas:

| | De la máquina (por defecto) | De un KMS |
|---|---|---|
| De dónde sale | material de esta máquina + una sal del disco | de un servicio externo que la envuelve y la desenvuelve |
| Quién puede abrir el disco | quien tenga **esta** máquina | quien pueda **pedírselo al KMS** |
| Mover el disco a otro equipo | no se abre | se abre |
| Un contenedor | **se rompe** (ver abajo) | funciona |

En un PC de escritorio la primera está bien y no hay nada que hacer. La segunda existe
para dos casos: **un contenedor** y **una empresa que quiere la clave fuera del equipo**.

## En un contenedor, el KMS no es opcional

Es la trampa más cara de esta página, así que va antes que nada.

La clave por defecto se deriva de la máquina, y en una imagen Alpine **no existe
`/etc/machine-id`**: se cae al nombre del equipo, que en Docker **es el id del
contenedor y cambia en cada `docker run`**. Con los datos en un volumen o en un disco
aparte, el ciclo normal —actualizar la imagen, borrar el contenedor y levantarlo de
nuevo, mover el disco a otra máquina— dejaba la cuenta **ilegible para siempre**.

Desde 0.55 eso ya no pasa callando: la bóveda guarda una huella de quién escribió y
**se niega a arrancar** explicando el motivo. Pero negarse no recupera nada. Levanta el
contenedor con su KMS **desde el primer día**.

## Enrolar un perfil en el KMS: nace, no se migra

**Un perfil con la clave en el KMS tiene que NACER así.** No es una preferencia de
estilo: si el perfil ya existía, su maestra ya se escribió bajo la clave vieja, y
**una copia del disco anterior a la migración la sigue abriendo para siempre**. Migrar
cierra la puerta de hoy en adelante; no borra que estuvo abierta.

Por eso la opción va en el momento de crear, y solo ahí:

```sh
# un perfil nuevo, vacío, cuya maestra nunca existe bajo la clave de esta máquina
dotrino-vault profile add "empresa" --kms kms.json

# un sitio que nace esperando la cuenta que trae un aparato (camino de adopción)
dotrino-vault pair --adopt --kms kms.json

# una cuenta nueva, estrenada aquí, con el aparato que se empareja
dotrino-vault pair --new-account "empresa" --kms kms.json
```

Si le pasas `--kms` a un `pair` que **no** crea un sitio, la bóveda lo rechaza y te dice
por qué en vez de aceptarlo sin hacer nada: la llave de ese aparato ya se escribió.

La comprobación es previa. Antes de dejar un solo byte en el disco, la bóveda le pide al
KMS que envuelva y desenvuelva una prueba; **si el KMS no contesta, el perfil no se crea**
—ni a medias—. Y no se cae a la clave de la máquina: eso crearía una cuenta débil sin que
nadie lo pidiera, y en un contenedor esa cuenta se pierde al recrearlo.

### En un contenedor, por variables

Dentro de la imagen no hace falta escribir ningún JSON: el primer perfil nace ya con su
clave en el KMS si las variables están puestas al arrancar.

```sh
docker run -d --name dotrino-vault --restart unless-stopped \
  -e AWS_REGION=us-east-1 \
  -e DOTRINO_KMS_KEY_ID=alias/dotrino-vault \
  -v /mnt/dotrino-vault:/data ghcr.io/imdotrino/dotrino-vault
```

Las variables **solo se consultan al crear** un perfil. Uno que ya existe manda con su
propio `atrest.json`, porque cambiarle el proveedor con un `docker run` distinto lo
dejaría ilegible — para eso está `atrest rekey`, mirando.

## El archivo `kms.json`

Dos formas de decir de dónde sale la clave.

**AWS KMS**, con el cliente que ya viaja en la imagen (no hace falta el CLI de AWS):

```sh
-e AWS_REGION=us-east-1 -e DOTRINO_KMS_KEY_ID=alias/dotrino-vault
```

En EC2 las credenciales las da el rol de la instancia; no se ponen en el `compose`.

**Cualquier otro** (OpenBao, Vault de HashiCorp, `gcloud`, un script tuyo): un programa
que cumpla un contrato de dos líneas — **base64 por la entrada, base64 por la salida** —
y se invoca con `wrap` o `unwrap`.

```json
{
  "provider": "command",
  "label": "OpenBao de la empresa",
  "wrap":   { "cmd": "/opt/dotrino/kek-openbao.sh", "args": ["wrap"] },
  "unwrap": { "cmd": "/opt/dotrino/kek-openbao.sh", "args": ["unwrap"] }
}
```

En un contenedor, lo mismo con `-e DOTRINO_KEK_CMD=/opt/dotrino/kek-openbao.sh`.

## Comprobar y cambiar

```sh
dotrino-vault atrest status              # de dónde sale la clave de este perfil
dotrino-vault atrest test                # ¿el KMS envuelve y desenvuelve? SIN tocar los datos
dotrino-vault atrest rekey kms.json      # cambia de proveedor, recifrando todo
dotrino-vault atrest rekey --machine     # y de vuelta a la clave de esta máquina
```

`rekey` descifra **todo** antes de escribir nada y verifica cada archivo; si algo falla,
lo de antes queda intacto y deja una copia `.bak-rekey`. **Editar `atrest.json` a mano no
vale**: la clave cambiaría sin recifrar y el perfil quedaría ilegible.

Sobre un perfil que ya tiene identidad, `rekey` avisa de lo que dijimos arriba —que una
copia vieja del disco lo sigue abriendo— y pide `--anyway` para seguir. No es un obstáculo
burocrático: es la única forma de que nadie crea que migrar equivale a nacer.

## Una llave, una carpeta

Cada perfil es una llave distinta y vive en **su propia carpeta**, cuyo nombre sale de la
llave (`5977-8919-c2698f30600a0f0d`; empieza por el mismo identificador que la bóveda
imprime al arrancar). Dos llaves no pueden compartir carpeta porque no se llaman igual, y
cada carpeta lleva además su propio proveedor de clave: puedes tener un perfil personal
con la clave de la máquina y uno de empresa en el KMS, en el mismo equipo.

Si vienes de una versión anterior, la carpeta **se muda sola** al arrancar y la bóveda lo
dice en su log. No hay nada que hacer.

Y una bóveda por carpeta: dos procesos sobre los mismos datos no son dos bóvedas, son la
misma corriendo dos veces —misma maestra, las dos sellando como el mismo sellador—. La
segunda se niega a arrancar y dice quién tiene la carpeta, también entre máquinas
distintas (un disco de red compartido).

> El porqué, las amenazas que cierra y lo que **no** cubre:
> [`docs/llaves-de-hardware.md`](https://github.com/imdotrino/dotrino-vault/blob/main/docs/llaves-de-hardware.md).
