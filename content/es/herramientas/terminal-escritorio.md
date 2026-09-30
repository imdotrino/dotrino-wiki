---
title: Terminal en tu computadora
description: La app de Dotrino Terminal para Linux y macOS. Cada ventana que abres se puede retomar desde el navegador de otro aparato tuyo.
---

# Terminal en tu computadora

Dotrino Terminal es también la terminal de tu propia computadora, en Linux y macOS. Se usa
como cualquier terminal, con una diferencia: **cada ventana que abres puedes retomarla desde
el navegador de otro aparato tuyo** (el teléfono, otra computadora), tal como la dejaste.
Para eso está [`terminal.dotrino.com`](https://terminal.dotrino.com/consoles).

Hay dos formas de usarla:

- **La app de escritorio**, con sus ventanas, su menú y sus perfiles. Es lo que explica esta
  página.
- **Dentro de la terminal que ya usas**: escribes `dotrino-terminal` y esa ventana pasa a ser
  una consola de Dotrino. Ver [Comandos](#comandos).

## Instalar

La app sola ya es una terminal normal. El programa de las consolas solo hace falta para usar
**perfiles**, que es lo que deja abrir tus ventanas desde otros aparatos.

**1. El programa de las consolas** (para los perfiles). Necesita Node 20 o más reciente:

```
npm install -g @dotrino/terminal-agent
```

**2. La app.** Bájala de la
[página de versiones](https://github.com/imdotrino/dotrino-terminal/releases/latest):

| Sistema | Archivo | Cómo se instala |
|---|---|---|
| Ubuntu, Debian | `dotrino-terminal-desktop_<versión>_amd64.deb` | `sudo apt install ./dotrino-terminal-desktop_*.deb` · aparece en el menú como «Dotrino Terminal» |
| Otro Linux | `dotrino-terminal-desktop-<versión>-linux-x64.tar.gz` | descomprímelo y abre `dotrino-terminal-desktop` |
| macOS (Apple Silicon e Intel) | `dotrino-terminal-desktop-<versión>-macos-universal.zip` | descomprímelo y arrastra «Dotrino Terminal» a Aplicaciones |

En macOS la app todavía no va firmada por Apple, así que la primera vez el sistema no la deja
abrir con doble clic. Ábrela con **clic derecho → Abrir** y confirma. Solo se hace una vez.

## Las ventanas

Abre la app y tienes una ventana con una consola. Arriba está el menú:

| Menú | Opción | Atajo (Linux) | Atajo (macOS) |
|---|---|---|---|
| Archivo | Nueva ventana | Ctrl+Shift+N | ⌘N |
| Archivo | Cerrar ventana | Ctrl+Shift+W | ⌘W |
| Editar | Copiar | Ctrl+Shift+C | ⌘C |
| Editar | Pegar | Ctrl+Shift+V | ⌘V |
| Perfil | Sin perfil · la lista de perfiles · Enrolar… | | |
| Ayuda | Cómo se usa (esta página) | | |

Una ventana nueva usa el mismo perfil que la ventana desde la que la abriste.

**Cerrar una ventana cierra su consola**, como en cualquier terminal. Si quieres dejarla
corriendo y volver después (desde esta computadora o desde otro aparato), pulsa **Ctrl+]** y
luego **d**: la ventana se cierra y la consola sigue viva.

## Perfiles

**Cada ventana abre en un perfil**: el último que elegiste en el menú; si no, `default`; si no,
el primero enlazado. Una ventana nueva usa el perfil de la ventana desde la que la abriste.

**Sin perfil, la ventana es una terminal más**: tu shell de siempre, sin nada de Dotrino y sin
que nadie la vea desde fuera. Es lo que pasa cuando no tienes ningún perfil, o cuando falta el
programa de las consolas. El título de la ventana termina en «— sin perfil», para que se note.

Un perfil es una identidad de esta computadora para Dotrino Terminal. Cada uno puede estar
**enlazado a una cuenta** (a su bóveda) o ser **solo de esta computadora**:

- **Enlazado**: sus consolas se pueden abrir desde los aparatos de esa cuenta. En el menú sale
  con el código del aparato (por ejemplo `default · AB12-CD34`), el mismo que ves en
  `dotrino-vault members`.
- **Solo de esta computadora**: funciona igual, pero nadie entra desde fuera.

Puedes tener varios: uno para tu cuenta personal, otro para la del trabajo. **Cambiar de
perfil desde el menú (también a «Sin perfil») cierra la consola de esa ventana y abre una
nueva en el otro**,
como cerrar una terminal y abrir otra. Lo que tenías en la consola anterior se termina; si
quieres conservarlo, suéltala antes con Ctrl+] d.

## Enrolar un perfil

Enrolar es enlazar un perfil con tu bóveda, para que tus otros aparatos puedan abrir sus
consolas. Se hace una vez por perfil.

1. En la app: **Perfil → Enrolar…**. La ventana pasa a pedirte los datos.
2. Escribe un **nombre** para el perfil (letras minúsculas, números y guiones: `casa`,
   `trabajo`). El primero se sugiere como `default`.
3. En la computadora de tu bóveda corre `dotrino-vault pair` y **pega la invitación** en la
   ventana.
4. La ventana te enseña un **código**. Apruébalo en la bóveda con
   `dotrino-vault approve <código>`.
5. Listo: la ventana pasa sola al perfil nuevo, ya enlazado.

Si cancelas o algo falla, la ventana vuelve al perfil que tenía. Si enrolas un perfil que ya
estaba en uso solo en esta computadora, sus consolas abiertas siguen vivas y pasan a verse
desde tus aparatos.

## Cuando alguien entra desde otro aparato

Si abres desde el teléfono una consola que tienes en una ventana de la computadora, **esa
ventana suena y lo dice en su título**. Las dos ven y escriben en la misma consola a la vez.
En `terminal.dotrino.com` esas consolas salen como «ventana abierta en la máquina».

## Comandos

Lo mismo sin la app, desde cualquier terminal:

```
dotrino-terminal                      # abre una consola en esta ventana
dotrino-terminal --name trabajo       # en el perfil «trabajo»
dotrino-terminal ls                   # las consolas abiertas
dotrino-terminal attach <id>          # volver a una
dotrino-terminal kill <id>            # cerrar una
dotrino-terminal profiles             # los perfiles de esta computadora
dotrino-terminal link                 # enrolar un perfil
```

Si el programa de las consolas no está corriendo, `dotrino-terminal` lo arranca solo.

## Si algo no funciona

- **«Enrolar…» en gris y la nota «Para usar perfiles, instala dotrino-terminal»** en el menú
  Perfil: falta el paso 1 de [Instalar](#instalar). Instálalo y abre una ventana nueva. Sin él
  la app funciona igual, sin perfil.
- **«Hay un agente corriendo que no acepta ventanas»**: tienes corriendo una versión anterior
  a la 0.6.0 (por ejemplo, como servicio). Detenla y vuelve a arrancarla con la nueva:
  `npx @dotrino/terminal-agent@latest`.
- **Un error en la ventana que no se cierra**: la app espera a que pulses una tecla, para que
  puedas leerlo. Pulsa cualquiera.

Para entrar a tus computadoras desde el navegador, ve [Terminal — tu computadora desde el
teléfono](/herramientas/terminal/).
