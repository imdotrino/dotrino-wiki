---
title: El registro público de selladores
description: Dónde mira alguien de fuera para saber si la llave que firmó algo hace un año sigue siendo de tu cuenta, sin que tú tengas que publicar nada de lo tuyo.
---

# El registro público de selladores

Hay una pregunta que una firma no puede responder sola:

> Esto lo firmó una de tus bóvedas hace un año. **¿Sigue siendo tuya?**

Si le quitaste el permiso a esa máquina —se perdió, la vendiste, se fue quien la
manejaba—, quien guardó tu acta de entonces **no se entera nunca**. Y seguiría creyéndole a
un aparato que ya no habla por ti. El registro es el sitio donde mirar.

## Qué se publica (y qué no, que es casi todo)

**Tu acta no se publica.** Dentro están tus aparatos con los nombres que les pusiste,
cuándo entró cada uno y qué servicios corres: eso es el inventario de tu casa y no sale de
ella.

Lo que se publica es lo único que un extraño necesita: la lista de momentos en los que
**cambió quién puede sellar**. Es una lista corta, porque eso pasa poquísimas veces.

**Si tienes una sola bóveda no apareces en el registro. Nunca.** No es que se te oculte:
es que no hay nada que contar. Una bóveda sola no puede quitarse el permiso a sí misma, así
que nadie va a tener información tuya que se quede vieja. Solo aparece quien tiene dos, y
para él es una línea el día que sumó la segunda.

Y tu cuenta figura ahí con un **número calculado a partir de tu identidad**, no con tu
nombre ni con tu llave. Quien ya te leyó puede calcularlo y encontrarte; quien se descargue
el registro entero se lleva una lista de números que no le dicen quién es nadie.

## Por qué se puede confiar sin confiar

El registro **no puede mentir**. Cada anotación se comprueba contra el primer documento de
tu cuenta, que está firmado por la llave que le da nombre, y esa comprobación la hace el
programa de quien lee, no el registro. Nadie puede inventar ahí que una máquina suya sella
por ti: no le saldría la cuenta.

Lo peor que puede hacer un registro es **callarse** — no contarte un cambio. Y contra eso
la defensa no es confiar más en él, sino que haya varios: el registro es un repositorio
público, y **quien lo copia se convierte en otro testigo**. Si dos no dicen lo mismo, eso
ya es la respuesta.

## Quién publica

Tu bóveda lo hace sola, cuando cambia algo y cuando arranca. No tienes que acordarte.

Y si estaba apagada el día que tocaba, **puede depositarlo cualquiera**: un aparato tuyo,
o incluso quien te haya verificado. Publicar no es un privilegio, porque lo publicado se
comprueba solo — mandarlo es un favor, no un permiso.

## Montar el tuyo

El registro de Dotrino no es el único posible, y esa es la idea. Copiarlo es un
`git clone`, y correr uno propio es un programa pequeño que escucha, comprueba y anota.
Está en [dotrino-sealers](https://github.com/imdotrino/dotrino-sealers), con las
instrucciones en su README.

Una cuenta puede además **decir dónde vive su cadena**, para que quien la lea sepa a qué
registro preguntar. Si no lo dice, se mira en el de Dotrino.
