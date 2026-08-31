---
title: Dos bóvedas en la misma cuenta
description: Cómo una segunda bóveda entra en tu cuenta con su propia llave, cómo se le da y se le quita el permiso de sellar, y por qué es la forma de desplegar un contenedor sin entrar en él.
---

# Dos bóvedas en la misma cuenta

Una cuenta tiene **una** bóveda que la sella. Si esa máquina se pierde y no queda nadie
que pueda firmar el acta, la cuenta muere para todos: no hay frase de respaldo que la
resucite. La respuesta es tener una **segunda bóveda** dentro de la misma cuenta, con su
propia llave, a la que le puedes dar el permiso de sellar.

Sirve para dos cosas a la vez, y por eso vale la pena:

- **Un desastre no se lleva la cuenta.** La segunda admite aparatos y cambia permisos el
  día que la primera no está.
- **Desplegar un contenedor sin entrar en él.** Es el camino de abajo.

## Cómo entra la segunda

El papel es el contrario al de emparejar un aparato: aquí no se invita, **se acepta**.

```sh
# 1) en la bóveda que YA tiene la cuenta
dotrino-vault pair --save invitacion.dpair

# 2) en la bóveda nueva
dotrino-vault join "<la invitación>" --name "cuenta de casa"
→ Tipea este código en la OTRA bóveda:   dotrino-vault approve 767527

# 3) de vuelta en la primera
dotrino-vault approve 767527
```

Dos cosas que importan de esto:

- **Entra con SU propia llave**, no con una de aparato inventada. Por eso después se le
  puede dar `+sella` y ser el respaldo de verdad.
- **El código hay que teclearlo**, como en cualquier emparejamiento. Una invitación
  interceptada no basta para entrar.

La cuenta ajena queda en la bóveda nueva como **un perfil más**, con su propia carpeta, y
pasa a ser el perfil activo: es la razón por la que hiciste el `join`. Las cuentas que esa
máquina ya tenía no se tocan — una bóveda puede respaldar varias cuentas sin dejar de
tener la suya.

Con `--kms` ese perfil **nace** con su clave de disco en el KMS
(ver [La clave del disco](/vault/kms/)).

## Sellar es un permiso, y se quita

Entrar no da poder. Como `administra`, **sellar no se empareja**: se concede a mano, desde
la bóveda que manda, y se retira igual.

```sh
dotrino-vault members                 # mira el ID de la nueva
dotrino-vault caps 622C-A2C0 +sella   # ahora puede sellar el acta
dotrino-vault caps 622C-A2C0 -sella   # y ya no
```

**No es un traspaso**: quien manda sigue mandando. Lo que cambia es que ahora hay dos
llaves que el acta reconoce como selladoras, y cualquiera de las dos puede admitir un
aparato. Lo que selle una, la otra lo adopta por las reglas de siempre —firma, encadenado,
`seq` que no baja y desempate—, así que un acta vieja o ajena se rechaza sola.

## Desplegar un contenedor sin entrar en él

Aquí está lo práctico. El problema de un contenedor no es la bóveda: es **el primer
aparato**. Una bóveda tiene que *enseñar* una invitación y *recibir* un código tecleado, y
un contenedor no tiene pantalla ni teclado.

Con una sola bóveda no hay salida: alguien tiene que alcanzarla (`docker exec`,
`kubectl exec`, `aws ecs execute-command`). Con dos, sí la hay — y es esta, porque **todo
lo interactivo pasa del lado donde hay un humano**:

```sh
# en TU máquina
dotrino-vault pair --save invitacion.dpair

# el contenedor entra solo al arrancar
docker run -d --name dotrino-vault --restart unless-stopped \
  -e AWS_REGION=us-east-1 -e DOTRINO_KMS_KEY_ID=alias/dotrino-vault \
  -e DOTRINO_JOIN_FILE=/run/secrets/invitacion \
  -e DOTRINO_JOIN_NAME="cuenta de casa" \
  -v /mnt/dotrino-vault:/data \
  -v /ruta/invitacion.dpair:/run/secrets/invitacion:ro \
  ghcr.io/imdotrino/dotrino-vault

docker logs -f dotrino-vault
→ [vault] type this code in the other vault:  767527

# de vuelta en TU máquina
dotrino-vault approve 767527
dotrino-vault caps 622C-A2C0 +sella
```

Al contenedor no se entra **nunca**.

- `DOTRINO_JOIN_FILE` apunta a un archivo, y es lo correcto: `DOTRINO_JOIN` acepta la
  invitación a secas, pero una variable de entorno la ve cualquiera con `docker inspect`.
- **Se usa una vez.** La invitación consumida queda anotada: reiniciar el contenedor no
  vuelve a pedir entrar aunque la variable siga puesta.
- La invitación es efímera y de un solo uso, y aun así hace falta teclear el código en tu
  máquina. Que se filtre no basta para entrar.

## Lo que esto NO resuelve

- **No es una copia de respaldo de tus datos.** Es una segunda llave que el acta reconoce.
  Los secretos que la primera bóveda no le haya envuelto todavía, no los puede leer.
- **No hay fusionar cuentas.** Ni aquí ni en ningún otro sitio del ecosistema.
- **No cuida contra ti mismo.** Dos selladoras significan dos máquinas que pueden admitir
  aparatos; trata a la segunda con el mismo cuidado que a la primera.

> El modelo, el desempate entre dos actas hermanas y los frenos que hay puestos:
> [`docs/acta-de-perfil.md`](https://github.com/imdotrino/dotrino-vault/blob/main/docs/acta-de-perfil.md)
> y [`docs/replicas.md`](https://github.com/imdotrino/dotrino-vault/blob/main/docs/replicas.md).
