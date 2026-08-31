---
title: Instalar con Docker
description: La imagen oficial (amd64 y arm64, GHCR), por qué aquí la clave del disco no es opcional, y las dos formas de conectar el primer aparato.
---

# Instalar con Docker

La única vía **empaquetada** para ARM (una Raspberry encendida en casa es el caso
normal, no el exótico), y sirve en cualquier sistema. No abre ningún puerto ni hay que
tocar el router: la bóveda no escucha nada, se conecta ella hacia afuera.

```sh
docker volume create dotrino-vault
docker run -d --name dotrino-vault --restart unless-stopped \
  -e AWS_REGION=us-east-1 -e DOTRINO_KMS_KEY_ID=alias/dotrino-vault \
  -v dotrino-vault:/data ghcr.io/imdotrino/dotrino-vault
```

La imagen se publica en GHCR en cada versión, para **amd64 y arm64**.

## Aquí la clave del disco NO es opcional

Esas dos variables no son un adorno, y es lo primero que hay que entender de esta página.

La clave que cifra la bóveda se deriva por defecto de la máquina, y en un contenedor «la
máquina» **es el id del contenedor, que cambia en cada `docker run`**. Sin una clave que
no dependa de él, el ciclo normal —actualizar la imagen, borrar el contenedor y levantarlo
de nuevo, mover el disco a otra instancia— dejaba la cuenta **ilegible para siempre**.

Hoy la bóveda **se niega a arrancar** y lo explica en vez de romper nada. Pero negarse no
recupera. Levántalo con su clave **desde el primer día** y el contenedor pasa a ser lo que
debe ser: desechable.

Cómo se configura, con AWS KMS o con cualquier otro (OpenBao, un script tuyo):
**[La clave del disco (KMS)](/vault/kms/)**.

## El primer aparato: dos caminos

Es el único problema de verdad de un contenedor. Una bóveda tiene que **enseñar** una
invitación y **recibir** un código tecleado, y aquí no hay pantalla ni teclado. La
diferencia entre los dos caminos es **dónde está el humano**.

### 1) Cuenta nueva, nacida aquí — hay que entrar al contenedor

Esta bóveda es la única, así que le toca invitar a ella, y alguien tiene que alcanzarla.
No es un defecto: es lo que significa enseñar algo y recibir una respuesta.

```sh
docker exec dotrino-vault dotrino-vault pair --admin --quiet
# → escupe UNA línea: la invitación. Ábrela (o pégala) en vault.dotrino.com/vault
# → el navegador enseña un código de 6 dígitos:
docker exec dotrino-vault dotrino-vault approve 123456
```

- `--admin` es lo que convierte a ese aparato en una **consola**: podrá conectar y quitar
  aparatos sin volver aquí. El QR **no** lleva el permiso —ningún QR concede
  administración—: es una nota local de la bóveda y se aplica al aprobar el código.
- `--quiet` da la invitación y termina, en vez de pintar un QR y quedarse esperando.
  Un QR en la terminal de un servidor no lo mira nadie.

En Kubernetes es `kubectl exec`; en ECS, `aws ecs execute-command`.

### 2) Ya tienes una bóveda — el contenedor se une a esa cuenta

Este es el camino para desplegar, porque **todo lo interactivo pasa del lado donde hay un
humano**: tu máquina invita, el contenedor acepta, y el código que hay que teclear lo
teclas tú. Al contenedor no se entra nunca.

Está explicado entero, con el `docker run` completo, en
**[Dos bóvedas en la misma cuenta](/vault/multivault/)**.

De paso te deja donde quieres estar: dos bóvedas en la misma cuenta, y la nueva puede
admitir aparatos ella sola el día que la primera se pierda.

## El CLI, por `docker exec`

La bóveda le habla a su CLI por archivos del volumen, no por un socket:

```sh
docker exec -it dotrino-vault dotrino-vault status
docker exec -it dotrino-vault dotrino-vault members
docker exec -it dotrino-vault dotrino-vault tui
```

## Lo importante

- **El volumen ES tu cuenta.** Si lo borras, esa identidad **no se recupera** — no hay
  frase de respaldo. Para que un desastre no se la lleve, ten una
  [segunda bóveda](/vault/multivault/).
- **Un disco, una bóveda por carpeta.** Dos contenedores sobre los mismos datos no son dos
  bóvedas: son la misma corriendo dos veces. El segundo se niega y dice quién la tiene.
  Varias bóvedas sí caben en un mismo disco (un EFS), cada una con su carpeta.
- Si matas el contenedor a la fuerza (`docker rm -f`), el candado tarda un minuto en
  caducar antes de que otro pueda arrancar. Con `docker stop` se suelta al momento.
- Actualizar: `docker pull ghcr.io/imdotrino/dotrino-vault && docker restart dotrino-vault`
  (el volumen conserva todo).

Siguiente paso: [conecta tu primer aparato](/vault/emparejar/).
