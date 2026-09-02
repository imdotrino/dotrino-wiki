---
title: Política de privacidad
description: Qué queda registrado cuando usas Dotrino, por cuánto tiempo y quién más lo toca. Sin cuentas, sin cookies y sin rastreo.
---

# Política de privacidad

Última revisión: **2 de septiembre de 2026**.

Esta página dice **qué queda registrado, por cuánto tiempo y quién más lo toca**. Si lo que
buscas es el porqué, está en [Cómo se protege lo tuyo](/empezar/privacidad/).

## En corto

**No tienes una cuenta con nosotros.** Tu identidad es una llave que vive en tu aparato, no
una fila en nuestra base de datos. No hay contraseña que nos confíes, ni correo que nos des,
ni perfil tuyo que podamos perder — porque no lo tenemos.

De lo poco que sí queda registrado, casi todo es para dos cosas: contar visitas de forma
agregada y evitar que alguien tire los servidores.

## Lo que NO recogemos

- **No hay cuentas ni contraseñas nuestras.** Ni correo, ni teléfono, ni nombre.
- **No usamos cookies.** Ninguna, ni siquiera de sesión.
- **No cargamos código de terceros.** Nada de Google Analytics, Meta, Hotjar ni redes de
  publicidad. Ninguna app carga JavaScript de una empresa ajena.
- **No vendemos ni cedemos nada**, y no hay publicidad. El proyecto no vive de eso.
- **No cruzamos lo que haces entre apps.** No hay con qué: no existe un identificador tuyo
  que llegue a nuestros servidores.

## Lo que sí queda registrado, y por cuánto

### Cuando visitas una página

Usamos un contador propio, alojado en nuestro servidor. **No guarda tu dirección IP** — no
hay ni un solo sitio donde se escriba. Guarda:

| Qué | Detalle |
|---|---|
| Tu país | solo el país |
| Qué página se vio y de dónde llegó el enlace | sin nada que te identifique |
| Navegador, sistema, tamaño de pantalla, idioma | agregado, para saber qué hay que soportar |

Para no contar dos veces a la misma persona el mismo día se usa un código temporal que se
calcula al vuelo y **cambia solo**; no se puede volver atrás desde él.

**Cuánto se guarda:** la visita suelta, **un día**. Después queda solo el número de visitas
por día, que no señala a nadie.

### Cuando tus apps se hablan entre sí

Los mensajes pasan por un servidor de reenvío. Ahí:

- **Tu dirección IP se cuenta durante 30 días**, y solo para distinguir un ataque de una
  persona usando la app. Pasado ese plazo se olvida. No se escribe en ningún registro.
- **Si el otro está desconectado, el mensaje espera hasta 24 horas** y luego se borra.
- Ese servidor ve **que dos llaves se hablan y cuándo**, aunque no pueda leer lo que va
  sellado. Eso es inevitable en cualquier sistema que entregue mensajes.

### Cuando nos escribes

El formulario de contacto se **reenvía por correo y no se guarda** en ningún servidor
nuestro. Lo que nos cuentes queda en ese correo.

## Quién más toca algo

Un proveedor de servidores, una red de distribución, el alojamiento de las páginas y el
servicio que envía los correos del formulario. Los nombramos, con lo que ve cada uno, en la
[lista completa](https://github.com/imdotrino/dotrino-vault/blob/main/docs/flujos-de-datos.md)
— está en el mismo documento técnico que usamos nosotros, sin versión resumida.

Lo que **ninguno** de ellos ve: lo que viaja después del `#` de un enlace, porque el
navegador no se lo manda a nadie.

## Lo que compartes tú

Cuando compartes algo, lo compartible viaja **después del `#`** de la dirección: esa parte
no llega a ningún servidor. No se guarda ni se puede buscar en Google.

**El límite honesto:** ninguna app cuida lo que su dueño decide mostrar. A partir de que
compartes, manda tu decisión y no el código.

## Tus derechos

Como no tenemos una cuenta tuya, **no hay nada que pedirnos que borremos**: lo tuyo está en
tu aparato y lo borras tú. Si aun así quieres preguntar algo sobre esta política, escribe a
**hola@dotrino.com**.

Si encuentras un fallo de seguridad, hay un canal aparte:
[cómo reportarlo](https://github.com/imdotrino/.github/blob/main/SECURITY.md).

## Menores

Las apps no piden datos personales, así que no se recogen de nadie — tenga la edad que
tenga. Tampoco hay perfiles publicitarios ni contenido dirigido.

## Si esto cambia

Esta página lleva su fecha de revisión arriba y vive en un repositorio público: **cada cambio
queda en el historial**, con lo que decía antes. No hace falta que nos creas.

## Se puede comprobar

Todo el código es abierto (MIT) en [`imdotrino`](https://github.com/imdotrino). Lo que aquí
se afirma sobre qué se guarda está sacado de mirar el código y las bases de datos, no de una
promesa: el detalle técnico está en el
[mapa de flujos de datos](https://github.com/imdotrino/dotrino-vault/blob/main/docs/flujos-de-datos.md).
