---
title: El túnel — abrir tu máquina al exterior sin abrir puertos
description: Expón un puerto o un servicio local en una dirección pública e inspecciona las peticiones en vivo.
---

# El túnel

[`r.dotrino.com`](https://r.dotrino.com/) · repo
[`dotrino-tunnel`](https://github.com/imdotrino/dotrino-tunnel)

El túnel deja que algo que corre en tu computadora sea alcanzable desde internet
**sin abrir puertos en el router** y sin contratar nada. Sirve para enseñarle a
alguien lo que estás haciendo, para que un servicio ajeno te avise de algo
(*webhooks*), o para que un bot te encuentre.

## Con un comando

```
npx @dotrino/tunnel 3000
```

La primera vez te pide **enrolarlo en tu bóveda**, como cualquier otro aparato: pegas
la invitación de tu bóveda y escribes en ella el código que te enseña para aprobarlo.
Después te devuelve una dirección `https://r.dotrino.com/<llave>/…` que apunta a tu
puerto local.

> **La dirección es de ese túnel y de nadie más.** Sale de la llave del propio túnel, y
> solo él puede atenderla: nadie puede quedarse con tu dirección ni hacerse pasar por
> tu túnel. Quien tenga la dirección sí puede mandarle peticiones, así que compártela
> con cuidado y corta el túnel cuando dejes de necesitarlo.

**Cada túnel es un aparato de tu cuenta.** Para tener otro, ponle otro nombre
(`npx @dotrino/tunnel 8080 --name api`): aparece como un aparato más en tu bóveda, y
desde ahí lo quitas cuando quieras. `npx @dotrino/tunnel info` te dice cuál es.

## Como librería

El paquete `@dotrino/tunnel` también se usa desde tu propio programa, para exponer
un manejador en vez de un puerto. Su README tiene la API.

## El probador

La página `r.dotrino.com` no es solo una presentación: es un **probador**. Puedes
ver en vivo las peticiones que llegan al túnel y responderlas a mano, que es la
forma rápida de entender qué te está mandando el servicio del otro lado. Ahí el
aparato es tu navegador: hace falta tener un perfil de Dotrino en él, y la dirección
sale de su llave.

Límites: **1 MB** por petición y 30 segundos de espera.
