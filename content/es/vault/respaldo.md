---
title: Respaldo: exportar e importar
description: Guarda en un archivo cifrado con una contraseña lo que tienes en la bóveda, entero o por cajones, y tráelo a otra bóveda sin pisar nada sin preguntarte.
---

# Respaldo: exportar e importar

Un respaldo es **un archivo cifrado con una contraseña que eliges tú**. Lleva lo que guardas en
la bóveda: las variables de cada cajón, los datos de tu perfil y tus contraseñas. Sirve para
tener una copia, y también para **mover un cajón de una bóveda a otra**.

Lo que **no** lleva: ninguna llave. Las llaves son de cada aparato y no salen de él. Al
importar, la bóveda de destino vuelve a cerrar todo con sus propias llaves, para los aparatos
de su cuenta.

Las dos cosas se hacen **con la bóveda abierta** (`dotrino-vault unlock`).

## Qué cajones hay

```sh
dotrino-vault backup list
```

Un cajón se nombra así:

| Escribes | Es |
|---|---|
| `proxy` | el cajón del servicio `proxy` |
| `@me` | los datos de tu perfil |
| `passwords` | la bóveda de contraseñas |
| `AB12-CD34` | el cajón de ese aparato |

## Exportar

```sh
dotrino-vault backup export                    # todo
dotrino-vault backup export proxy @me          # solo esos cajones
dotrino-vault backup export proxy -o proxy.json
```

Te pide la contraseña del respaldo dos veces, con un mínimo de 12 caracteres. Varias palabras al
azar funcionan bien. **Esa contraseña no se puede recuperar**: sin ella el archivo no se abre.

En el archivo no se ve nada sin la contraseña, ni siquiera los nombres de los cajones.

## Importar

```sh
dotrino-vault backup import respaldo.json                 # todo lo que trae
dotrino-vault backup import respaldo.json proxy           # solo ese cajón
dotrino-vault backup import respaldo.json --as geo=geo-viejo   # con otro nombre
dotrino-vault backup import respaldo.json --as AB12-CD34=EF56-7890   # a otro aparato
```

Antes de escribir nada te enseña qué va a pasar con cada valor:

- **nuevo**: aquí no existe, se añade.
- **igual**: ya está con el mismo valor, no se toca.
- **CHOCA**: aquí existe con otro valor.

Por cada choque eliges **conservar** lo de aquí o **reemplazar** con lo del respaldo (o lo mismo
para todos los que quedan). Después confirmas, y se importa.

Sin un terminal delante (en un script), los choques se deciden con una opción:

```sh
dotrino-vault backup import respaldo.json --on-conflict keep --yes      # conserva lo de aquí
dotrino-vault backup import respaldo.json --on-conflict replace --yes   # gana el respaldo
```

Si hay choques y no dijiste qué hacer, **no se importa nada**.

## Cosas que conviene saber

- **Lo privado sigue privado.** Si aquí una variable es privada y en el respaldo es pública,
  se importa como privada.
- **El cajón de un aparato** solo entra si ese aparato está en esta cuenta. Si no, muévelo a otro
  con `--as`.
- **Una contraseña es «la misma»** si tiene el mismo sitio y el mismo usuario. Reemplazarla
  cambia la de aquí en su sitio.
- **No se guarda el historial** de cada variable: un respaldo es lo que hay ahora.
- **Contraseñas que no entran.** Si alguna se guardó antes de que la bóveda tuviera su copia de
  recuperación, el respaldo te lo avisa. Ábrela una vez desde un aparato con el permiso
  `passwords` y repite el respaldo.
- También se hace sin la línea de comandos: en la pantalla de la bóveda (`dotrino-vault tui`, o la
  ventana) pulsa `o` sobre una bóveda; en el navegador, en la consola `vault.dotrino.com`, sección
  «Respaldo»; y en la extensión, en la pestaña que hace de bóveda.
- **En la extensión no van las contraseñas del gestor**: viven aparte, con su propia copia de
  recuperación. El respaldo de la extensión lleva los cajones, y si importas uno con contraseñas,
  te dice cuántas se quedaron fuera.

Diseño: [`docs/respaldo.md`](https://github.com/imdotrino/dotrino-vault/blob/main/docs/respaldo.md).
