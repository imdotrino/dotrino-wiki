---
title: Perfiles y contraseña
description: Varias identidades en la misma máquina, y el candado de la consola: qué protege y qué no.
---

# Perfiles y contraseña

## Varios perfiles en el mismo PC

Puedes tener varias identidades en la misma máquina (personal y trabajo, por
ejemplo). Cada perfil es **una cuenta distinta**: su llave, sus dispositivos, sus
datos y secretos — nada se cruza. **Todos atienden a la vez**: el «activo» solo
decide a cuál va un comando cuando no lo dices con `--profile`.

```sh
dotrino-vault profile ls                  # lista (* = el activo)
dotrino-vault profile add Trabajo         # crea un perfil (identidad nueva, vacía)
dotrino-vault profile use Trabajo         # elige el activo
dotrino-vault profile rm Trabajo          # BORRA el perfil y su identidad (confirmando)
dotrino-vault pair --profile Trabajo      # cualquier comando acepta --profile
```

No se borra el único perfil, ni una cuenta que manda esta bóveda mientras le queden
otros dispositivos: primero le pasas el mando a uno conectado.

## Contraseña del perfil — el candado es de ESTA consola

Con el perfil **bloqueado**, desde la máquina de la bóveda no se puede ver ni tocar
nada suyo: ni dispositivos, ni variables, ni el acta, ni la bitácora. La CLI y la TUI
contestan «bóveda bloqueada» hasta que alguien teclee la contraseña.

Lo que **no** cambia es el servicio: **tus dispositivos ya emparejados siguen
firmando, leyendo y guardando**. Eso viaja por el proxy, no por esta consola — un
reinicio del PC nunca deja tus apps muertas esperando a que alguien teclee algo.

```sh
dotrino-vault profile password     # pone o cambia la contraseña
dotrino-vault profile password rm  # la quita
dotrino-vault unlock               # abre la bóveda en esta consola
dotrino-vault lock                 # vuelve a cerrarla
```

El perfil se vuelve a bloquear al reiniciar el servicio. La contraseña no se guarda
(solo un verificador con sal, PBKDF2) y tras 5 intentos fallidos cada intento nuevo
espera cada vez más.

**Qué protege y qué no, dicho sin adornos:** protege la consola — que otro que se
siente en tu máquina vea o toque esa bóveda. **No** cifra la llave en el disco (de eso
se encarga el [cifrado en reposo](/vault/seguridad/), que hoy no usa la contraseña).
