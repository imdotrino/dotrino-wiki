---
title: El modelo: perfil, acta y llaves
description: Una cuenta es un perfil es un acta: el conjunto de llaves miembro más la política firmada que dice qué puede cada una.
---

# El modelo: perfil, acta y llaves

`dotrino-vault` es tu **bóveda personal**: un servicio *headless* que corre en tu
propia máquina y hace dos cosas.

- **Es tu certificador.** Custodia la llave que manda sobre tu cuenta y actúa como tu
  propia CA: enrolas tus dispositivos, firmas por ti y avalas a otras personas sin
  pedirle permiso a ningún portero central. Esa llave **nunca sale** de la máquina.
- **Es tu almacén.** Guarda el contenido de tus apps —hilos, «recientes», tu
  perfil— **cifrado de punta a punta**, y se lo sirve a los dispositivos que tú
  conectaste. El proxy transporta el sobre; no puede abrirlo.

**No escucha nada**: no abre puertos ni hay que tocar el router. Se conecta él hacia
afuera al proxy del ecosistema, y tus aparatos lo alcanzan por ahí.

## Una cuenta es un perfil es un acta

Tres palabras para lo mismo: una **cuenta** es un **perfil** es un **acta** — el
conjunto de llaves miembro más la política firmada que dice qué puede cada una. Un
**miembro** es una **llave**, no un aparato: un mismo aparato puede tener varias
llaves y por lo tanto varias cuentas.

```
 perfil (= cuenta) ── nombre estable: profileId = pubkey de la llave génesis
   └── ACTA firmada: quién es miembro y qué puede cada uno
         · sellador (master): UNA sola llave firma el acta (la bóveda, normalmente)
         · miembros: una LLAVE cada uno, con capacidades
             sign · store · read   → un dispositivo tuyo
             secrets + cn          → un servicio: abre SOLO su propio cajón
         · llavero: la clave de contenido, envuelta para cada miembro
```

**El nombre de la cuenta es el `profileId`**: la pubkey de la llave donde nació, y no
cambia nunca — es lo que conocen la reputación, los contactos y todo lo que esa
cuenta firmó, aunque después la bóveda la adopte.

## Certificados que caducan y se renuevan solos

Cada miembro opera con un **certificado** emitido por la bóveda («esta llave puede
`<permisos>` hasta `<fecha>`, revocable»). Dura **30 días** y, mientras siga vigente
y no esté revocado, el dispositivo pide uno fresco por su cuenta — sin QR ni
aprobación. Un cert **vencido o revocado ya no se renueva**: toca volver a emparejar.
Así una máquina robada y revocada queda fuera en cuanto expira, sin depender de que
ella se porte bien.

```sh
dotrino-vault members            # el acta: qué llaves son tuyas y qué puede cada una
dotrino-vault caps <ID> +firma   # cambia permisos (+firma -guarda +lee +administra +aprueba +permiso)
```

## Si se pierde la llave que sella, se pierde la cuenta

No hay recuperación, ni relevo, ni frase de respaldo: es la consecuencia asumida de
que las llaves no se copian. Por eso la bóveda **no te deja borrar un perfil que ella
manda si quedan otros dispositivos dentro**: primero le pasas el mando a uno conectado.

> El diseño completo está en
> [`docs/acta-de-perfil.md`](https://github.com/imdotrino/dotrino-vault/blob/main/docs/acta-de-perfil.md).
