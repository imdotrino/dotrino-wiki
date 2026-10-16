---
title: Interfaz de terminal (TUI)
description: Bóvedas, dispositivos y secretos a pantalla completa, sin memorizar subcomandos; bilingüe es/en.
---

# Interfaz de terminal (TUI)

Las bóvedas, los dispositivos y los secretos también se manejan desde una interfaz de
terminal a pantalla completa:

```sh
dotrino-vault tui             # binario instalado
dotrino-vaultd --tui          # la bóveda y su interfaz en la MISMA ventana
```

Como la CLI, la TUI no abre la identidad ni la red: le deja la orden al daemon. Si el
daemon no corre, la TUI ofrece arrancarlo con `S` (solo sabe hacerlo por systemd).

## Dos niveles

1. **Bóvedas**: la pantalla de entrada — tus perfiles. `Enter` entra a uno; `p`
   conecta un dispositivo; `j` mete esta bóveda en la cuenta de otra (pegas la
   invitación que enseña la otra, ver [Dos bóvedas en la misma cuenta](/vault/multivault/));
   también creas, renombras, borras y pones el candado.
2. Dentro, **pestañas** (`←→`): **Dispositivos** (emparejar, aprobar, rechazar,
   revocar; con `e` sobre un servicio, sus variables propias) y **Scopes y
   variables** (las compartidas; `i` importa un `.env` entero).

Al emparejar, la bóveda **pregunta primero a qué cuenta entra el dispositivo** (la
activa, una nueva, o conectar un servicio con su namespace) y recién después muestra
el QR.

Cada dispositivo dice **dónde corre**, al lado de su nombre: qué es (un comando, un
navegador, la extensión, iOS o Android), en qué sistema y cómo se llama la máquina —por
ejemplo `node · Linux 7.0.0 · mi-pc` o `browser · Windows · Chrome`—. Un navegador no
sabe el nombre de la computadora, así que enseña el navegador. Lo ves también antes de
aceptar un emparejamiento. Un dispositivo conectado antes lo enseña en cuanto se
actualiza y vuelve a hablar con la bóveda.

## Teclas

Los mnemónicos son en inglés y no cambian con el idioma (`l` conmuta español/English).

| Tecla | Acción |
|---|---|
| `Enter` | entrar a la bóveda |
| `p` | pair — conectar un dispositivo |
| `j` | join — entrar en la cuenta de otra bóveda |
| `a` / `x` / `v` | approve · quitar/rechazar · revocar |
| `n` / `r` / `d` | nueva · renombrar/refrescar · borrar |
| `c` · `u` / `k` | contraseña · candado (unlock / lock) |
| `t` | pública ⇄ privada (variables) |
| `b` / `Esc` · `q` | volver · salir |
