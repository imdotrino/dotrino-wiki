---
title: CLI de control
description: Todos los comandos de dotrino-vault: emparejar, aprobar, permisos, secretos, bitácora.
---

# CLI de control

```sh
dotrino-vault tui                  # interfaz de terminal a pantalla completa
dotrino-vault status               # estado del servicio + fingerprint
dotrino-vault pair                 # empareja: muestra el QR (más URL y código pegable) y espera
dotrino-vault pair --new-account [nombre]   # estrena una cuenta VACÍA y mete al dispositivo en ella
dotrino-vault pair --adopt [nombre]         # al revés: la bóveda adopta la cuenta que trae el aparato
dotrino-vault pair --service <ns>  # empareja un SERVICIO con acceso SOLO a sus secretos
dotrino-vault pair --scope <lista> # los PERMISOS del cert: sign,read,store,secrets:<ns>
dotrino-vault pair --approval      # el que entre pedirá tu aprobación al recibir claves
dotrino-vault pending              # qué dispositivo espera, y cómo aprobarlo
dotrino-vault approve <código>     # aprueba tecleando los 6 dígitos que MUESTRA el dispositivo
dotrino-vault reject  <deviceId>   # rechaza un dispositivo pendiente
dotrino-vault devices              # dispositivos enrolados / revocados
dotrino-vault members              # el acta: qué llaves son tuyas y qué puede cada una
dotrino-vault caps <ID> ±permiso   # +firma -guarda +lee +administra +aprueba +permiso
dotrino-vault revoke  <nonce>      # revoca un dispositivo (le ordena autoborrarse)
dotrino-vault activity [n]         # bitácora: firmas, renovaciones, enrolados, rechazos
dotrino-vault logs                 # últimas líneas del servicio (donde hay systemd)
dotrino-vault version              # versión instalada
```

`approve` recibe el **código**, no el `deviceId`: la bóveda no conoce el código —solo
su compromiso— y lo aprende cuando lo tecleas. El que sí recibe `deviceId` es `reject`.

## Variables (secretos)

```sh
dotrino-vault secret set <ns> <CLAVE> <valor>    # del SCOPE: la comparten los aparatos del ns
dotrino-vault secret set <ns> CLAVE=valor CLAVE2=valor2   # varias DE UNA VEZ (un solo aviso)
dotrino-vault secret import <ns> [archivo.env]   # lo mismo desde un .env (o stdin)
dotrino-vault secret rm  <ns> <CLAVE>
dotrino-vault secret device set <ID> <CLAVE> <valor>   # de UN aparato: solo la lee él
dotrino-vault secret list                        # por nombre; nunca valores
```

El `ns` va en minúsculas (`[a-z0-9-]`, hasta 32), la clave en
`MAYUSCULAS_CON_GUION_BAJO` (hasta 64) y el valor es texto de hasta 8 KB.

### Carga la configuración JUNTA, no de una en una

Guardar una variable hace que la bóveda **avise al servicio**, y el servicio se
reinicia para leerla fresca. De una en una, seis variables son seis reinicios — y el
primero arranca con la configuración a medias. Por eso: `secret import <ns> .env`, o
varios `CLAVE=valor` en un solo `set`. **Todo o nada**: si una línea está mal, no se
guarda ninguna.

### Dos cajones: por scope y por aparato

| Dónde | Quién la lee | Para qué |
|---|---|---|
| `secret set <ns> …` | todos los aparatos que sirven ese namespace | lo que es igual en todas partes: la llave de la API, la URL de la base |
| `secret device set <ID> …` | solo ese aparato | lo que cambia por máquina: el puerto, el nombre del nodo |

Al servicio se le entrega **un solo bundle**: el del scope con el suyo **encima** —
lo específico gana. Al quitar el aparato, sus variables se van con él.

### Pública o privada

Cada variable es pública o privada, y eso decide **una sola cosa**: si su valor puede
verse desde la [consola remota](https://vault.dotrino.com/devices). **Se nace
privada**, y privada es para siempre (tapar una pública sí se puede; destapar, no).
Al servicio le da igual: recibe las dos.
