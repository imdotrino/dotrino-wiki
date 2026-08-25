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
npx @dotrino/tunnel --port 3000
```

Te devuelve una dirección `https://r.dotrino.com/<llave>/…` que apunta a tu
puerto local.

> **La llave de la dirección es el secreto.** Quien la tenga llega a tu servicio,
> así que se comparte con el mismo cuidado que una contraseña. Cuando dejes de
> necesitarla, corta el túnel.

## Como librería

El paquete `@dotrino/tunnel` también se usa desde tu propio programa, para exponer
un manejador en vez de un puerto. Su README tiene la API.

## El probador

La página `r.dotrino.com` no es solo una presentación: es un **probador**. Puedes
ver en vivo las peticiones que llegan al túnel y responderlas a mano, que es la
forma rápida de entender qué te está mandando el servicio del otro lado.

Límites: **1 MB** por petición y 30 segundos de espera.
