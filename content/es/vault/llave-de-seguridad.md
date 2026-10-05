---
title: Abrir con una llave de seguridad (YubiKey)
description: Que el perfil de tu bóveda se abra con una llave física, en vez de la contraseña o además de ella.
---

# Abrir con una llave de seguridad (YubiKey)

Un perfil puede abrirse con una **llave de seguridad** —una YubiKey u otra llave
FIDO2— en vez de con la contraseña, o junto con ella. Cada forma de abrir es una
**puerta**, y abre cualquiera de las que tenga el perfil:

| Puerta | Cómo abre |
|---|---|
| contraseña | la tecleas |
| llave con toque | la llave enchufada **y** tocarla |
| llave sin toque | basta con que esté enchufada |
| llave + contraseña | hacen falta **las dos** |

Poner o quitar una puerta no cambia nada de lo que guarda el perfil: tus aparatos ni se
enteran. Como siempre, el candado es de la consola: con el perfil cerrado tus aparatos
siguen funcionando.

## Lo que hace falta

En la máquina de la bóveda, los programas que hablan con la llave:

```sh
sudo apt install fido2-tools yubikey-personalization
```

`fido2-tools` para la llave con toque y `yubikey-personalization` para la llave sin
toque. Si los tienes en otra carpeta, indícala con `DOTRINO_HWKEY_BIN`.

## Ponerla

Con el perfil abierto (`dotrino-vault unlock`):

```sh
dotrino-vault profile key add                   # con toque: la tocas dos veces
dotrino-vault profile key add --no-touch        # sin toque
dotrino-vault profile key add --with-password   # solo abre junto con una contraseña
dotrino-vault profile add Trabajo --key         # un perfil nuevo, ya con su llave
```

Después, `dotrino-vault unlock` usa la llave si está enchufada y solo te pide la
contraseña cuando hace falta. Para saltarte la llave: `dotrino-vault unlock --password`.
La TUI hace lo mismo.

## Verlas y quitarlas

```sh
dotrino-vault profile key ls            # con qué se abre el perfil
dotrino-vault profile key rm <id>       # quita una llave
dotrino-vault profile password rm       # quita la contraseña: queda solo la llave
```

Si quitas la última puerta, el perfil se queda **sin candado**: se abre solo con esta
máquina, como si nunca hubiera tenido contraseña.

## Con toque o sin toque

- **Con toque** (FIDO2): la llave no entrega nada si nadie la toca. Es la recomendada.
- **Sin toque** (reto-respuesta): usa la **ranura 2** de la YubiKey, y ponerla la
  programa. Si la ranura ya tenía algo, se niega; `--overwrite-slot` la sobrescribe y
  **borra lo que hubiera**. Mientras esté enchufada, cualquier programa de esta máquina
  puede abrir el perfil, así que desenchúfala cuando no la uses.

Sin toque **no** significa que la bóveda se abra sola al arrancar: abrir sigue siendo
algo que haces tú, con `unlock` o desde la TUI.

## No te quedes fuera

Una llave se pierde. Deja **siempre otra puerta**: una segunda llave de repuesto, o la
contraseña. Si el perfil solo se abre con una llave y la pierdes, lo pierdes.

Si al tocar la llave aparece texto raro del tipo `cccccbjujtbt…`, es la propia llave
escribiendo un código de un solo uso: la tocaste cuando no te la estaban pidiendo. No pasa
nada.
