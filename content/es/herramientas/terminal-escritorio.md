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

**1. El programa de las consolas** (para los perfiles):

```
curl -fsSL https://install.dotrino.com/install.sh | sh -s -- @dotrino/terminal-agent
```

No pide permisos de administrador y, si no tienes Node, lo trae
([el instalador de Dotrino](/herramientas/instalar/)). Cuando termina, los perfiles,
«Enrolar…» y el panel de consolas de la app se activan solos.

Otras dos formas de instalarlo, las dos con Node 20 o más reciente ya puesto:

- Desde la propia app: **Perfil → Instalar dotrino-terminal…** abre una ventana aparte que
  lo instala en el acto; el resultado se queda a la vista hasta que pulses Enter.
- A mano: `npm install -g @dotrino/terminal-agent`.

Cuando ya está instalado, la misma opción se llama **Actualizar dotrino-terminal…** y trae la
versión más nueva. El agente que ya estaba corriendo sigue con la versión anterior hasta que se
reinicia.

**2. La app.** Bájala de la
[página de versiones](https://github.com/imdotrino/dotrino-terminal/releases/latest):

| Sistema | Archivo | Cómo se instala |
|---|---|---|
| Ubuntu, Debian | `dotrino-terminal-desktop_<versión>_amd64.deb` | `sudo apt install ./dotrino-terminal-desktop_*.deb` · aparece en el menú como «Dotrino Terminal» |
| Fedora, RHEL, openSUSE | `dotrino-terminal-desktop-<versión>-1.x86_64.rpm` | `sudo dnf install ./dotrino-terminal-desktop-*.x86_64.rpm` (en openSUSE: `sudo zypper install --allow-unsigned-rpm ./dotrino-terminal-desktop-*.x86_64.rpm`) · aparece en el menú como «Dotrino Terminal» |
| Otro Linux | `dotrino-terminal-desktop-<versión>-linux-x64.tar.gz` | descomprímelo y abre `dotrino-terminal-desktop` |
| macOS (Apple Silicon e Intel) | `dotrino-terminal-desktop-<versión>-macos-universal.zip` | descomprímelo y arrastra «Dotrino Terminal» a Aplicaciones |

En macOS la app todavía no va firmada por Apple, así que la primera vez el sistema no la deja
abrir con doble clic. Ábrela con **clic derecho → Abrir** y confirma. Solo se hace una vez.

## Como terminal de tu escritorio (XFCE y Thunar)

En Linux con XFCE puedes hacer que Dotrino Terminal sea **tu terminal de siempre**:

1. Abre **Configuración → Aplicaciones preferidas → Utilidades**.
2. En **Emulador de terminal**, elige **Dotrino Terminal**.

Desde ese momento, **«Abrir terminal aquí»** en Thunar abre una ventana de Dotrino Terminal
**en esa carpeta**, con tu perfil. Lo mismo cualquier programa que pida «abrir en una
terminal».

Una ventana abre siempre en la carpeta desde la que se lanzó. Si esa carpeta ya no existe, la
ventana lo dice en vez de abrir en otra.

## Dentro de VS Code

La terminal del panel de VS Code también puede abrir consolas de Dotrino Terminal, para
retomarlas luego desde tu teléfono u otro aparato. Se configura con una orden:

```
dotrino-terminal vscode
```

Deja a Dotrino como terminal por defecto en VS Code, VS Code Insiders, VSCodium y Cursor, los
que tengas instalados. El resto de tu configuración queda como estaba. Las terminales que ya
tenías abiertas no cambian: abre una nueva.

Desde la app es lo mismo: **Perfil → Usar en la terminal de VS Code** lo pone con el perfil de
esa ventana, y **Perfil → Quitar de la terminal de VS Code** lo deshace.

- Para usar un perfil concreto: `dotrino-terminal vscode --name trabajo`.
- Para deshacerlo: `dotrino-terminal vscode --off`.
- Si actualizas o cambias de versión de Node, vuelve a correr la orden.

Si la misma consola está abierta en otra pantalla, la terminal de VS Code toma el tamaño en
cuanto tecleas en ella.

Cerrar la pestaña de la terminal no cierra su consola: sigue abierta y la encuentras en el
panel. Se cierra escribiendo `exit` en ella o desde el panel.

## Las ventanas

Abre la app y tienes una ventana con una consola. Arriba está el menú:

| Menú | Opción | Atajo (Linux) | Atajo (macOS) |
|---|---|---|---|
| Archivo | Nueva ventana | Ctrl+Shift+N | ⌘N |
| Archivo | Nueva ventana con consola nueva | Ctrl+Shift+T | ⌘T |
| Archivo | Cerrar ventana | Ctrl+Shift+W | ⌘W |
| Editar | Copiar | Ctrl+Shift+C | ⌘C |
| Editar | Pegar | Ctrl+Shift+V | ⌘V |
| Ver | Panel de consolas | Ctrl+Shift+B | ⌘B |
| Perfil | Sin perfil · la lista de perfiles · Renombrar · Enrolar… · Instalar/Actualizar dotrino-terminal… | | |
| Ayuda | Cómo se usa (esta página) | | |

Una ventana nueva usa el mismo perfil que la ventana desde la que la abriste y **se engancha a una
consola que no esté abierta en ninguna ventana**, si la hay; si no, abre una nueva. Igual al
abrir la app. Para una consola nueva siempre: **Archivo → Nueva ventana con consola nueva**
(Ctrl+Shift+T).

**Cerrar la app no cierra ninguna consola**: siguen vivas y la próxima vez que la abras las
encuentras ahí.

### El panel de consolas

A la izquierda, cuando la ventana tiene perfil, sale **un botón por cada consola abierta** en ese
perfil, con su **número fijo**: si cierras la 1, la 2 sigue siendo la 2 y la próxima consola
nueva será la 1. Empieza **colapsado**: una franja estrecha con un número por consola (el título aparece al
pasar el ratón); **»** lo abre con los nombres y **«** lo vuelve a colapsar. Cada ventana tiene el
suyo. Abierto, enseña todas las consolas del perfil: las de esta ventana, las de tus otras ventanas y las que abriste desde otro aparato. Debajo
de cada una dice dónde está abierta, o si está suelta.

- **Clic en una consola**: la ventana pasa a ella al instante. La que tenías **no se cierra**: queda
  en la lista para volver.
- **Varias pantallas en la misma consola** (ventanas, el teléfono) ven lo mismo y escriben en lo
  mismo, a la vez. El **tamaño** lo tiene una sola: **la última en la que tecleaste** o, si nadie
  ha tecleado desde entonces, la última que se enganchó o lo eligió con ⤢. Las demás la ven a ese
  tamaño, con el resto de la ventana vacío. Esa pantalla se sigue al redimensionarla o girarla;
  dar foco a otra, o mover el ratón en ella, no lo cambia.
- **⤢ Usar el tamaño de esta pantalla.** Está en el panel, debajo de **+** (y en *Ver*), y actúa
  sobre **la consola que muestra esa ventana**. Encendido se ve resaltado, y el panel desplegado
  dice de quién es el tamaño (*Tamaño de la 2: esta ventana (87×33) · elegido a propósito*). Si
  esa pantalla ya tenía el tamaño, no cambia nada a la vista: lo que cambia es que otra pantalla
  que llegue después ya no se lo quita. Teclear en otra pantalla sí se lo quita. La elección es **de la pantalla**: si pasas a otra consola
  y vuelves, la recupera. Mientras no está, manda la última que llegó. Se suelta pulsando ⤢ otra
  vez, cuando otra pantalla lo elige o cuando tecleas en otra.
- **+** abre una consola nueva en la ventana; **×** cierra esa consola (si era la de la ventana,
  la ventana pasa a otra, o queda sin consola si no hay ninguna).
- **Clic derecho sobre una consola** del panel (también colapsado): **Abrir aquí**, **Abrir en
  otra ventana** y **Cerrar consola**.
- **Ver → Panel de consolas** (Ctrl+Shift+B) lo esconde o lo muestra.
- Con un `dotrino-terminal` anterior a la 0.11 el panel sale deshabilitado y lo dice: actualízalo
  desde **Perfil → Actualizar dotrino-terminal…**.

A la derecha, cuando hay historial, una **barra de desplazamiento** enseña dónde estás; se puede
arrastrar, y la rueda del ratón sube y baja de tres en tres líneas.

**Clic derecho** sobre la terminal: **Copiar** lo seleccionado y **Pegar**. Lo pegado queda en el
prompt y no se ejecuta hasta que pulses Enter, aunque traiga varias líneas (bash lo marca
resaltado hasta la siguiente tecla).

**Cerrar una ventana nunca cierra una consola.** La consola que mostraba sigue corriendo y
puedes volver a ella después, desde esta computadora o desde otro aparato. Una consola se cierra
con la **×** del panel, con **Cerrar consola**, o escribiendo `exit` en ella. (Una ventana «Sin
perfil» es la excepción: ahí no hay consola que guardar, y cerrarla termina lo que corría.)
En una consola de `dotrino-terminal`, **Ctrl+]** y **d** la suelta y cierra la ventana, y
**Ctrl+]** y **n** abre otra (soltando la actual).

**Dónde está abierta cada consola.** Un **punto verde** en la esquina de arriba a la derecha de
una consola del panel dice que está abierta en una ventana de esta computadora (esta ventana,
otra, o la terminal de VS Code). Sin punto, no la está mostrando ninguna. El punto **parpadea** cuando esa consola terminó y todavía no la has mirado; deja de parpadear en cuanto su ventana tiene el foco.

**Qué está haciendo cada consola.** En el panel, el número de una consola cambia de color:
**ámbar** si hay algo trabajando en ella y **verde** si terminó y todavía no la has mirado (el verde
se apaga al entrar a esa consola o al teclear en ella). Sirve para dejar un agente de IA trabajando
en una consola y seguir en otra. La regla es la misma para cualquier programa (Claude Code,
Codex, OpenCode, un comando): si el título o la pantalla de la consola cambian de seguido, está
trabajando; cuando llevan diez segundos sin cambiar, terminó. Ese tiempo se ajusta con la variable
`DOTRINO_TERMINAL_IDLE_SECONDS` al arrancar el agente: súbelo si usas comandos que pasan mucho rato
sin escribir nada.

**Y al revés: cerrar una consola nunca cierra la ventana.** Si se cierra la consola de una ventana
(con la **×**, escribiendo `exit` en ella, o desde **otra pantalla**: el teléfono, la web, el panel
de otra ventana), la ventana pasa a la primera consola que nadie tiene abierta; si
todas lo están, a la primera de ellas; y si no queda ninguna, la ventana **sigue abierta, sin
consola**, con su panel: el **+** abre una cuando quieras.

**Cuándo se crea una consola.** Solo con el **+**, o al abrir una ventana cuando no hay ninguna
consola sin abrir. Así no se acumulan consolas que nadie mira.

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
perfil desde el menú (también a «Sin perfil») suelta la consola de esa ventana y pasa a una del otro** (una que nadie tenga
abierta; si no hay, una nueva). Lo que tenías en la consola anterior sigue corriendo en su perfil.

### Cambiarle el nombre a un perfil

El nombre de un perfil es solo tuyo, de esta computadora: no lo ve tu cuenta. Para cambiarlo,
**Perfil → Renombrar «…»…** escribe en tu consola `dotrino-terminal rename <perfil> `;
completa el nombre nuevo y pulsa **Enter**. La ventana sigue, ya en el perfil con su nombre
nuevo. Es el mismo aparato: no hace falta volver a enrolar.

Renombrarlo reinicia el programa de ese perfil, así que **se cierran sus consolas abiertas**.
Si hay otras además de la tuya, te pregunta antes.

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
dotrino-terminal                      # abre una consola en esta ventana, en la carpeta actual
dotrino-terminal --name trabajo       # en el perfil «trabajo»
dotrino-terminal ls                   # las consolas abiertas
dotrino-terminal attach <id>          # volver a una
dotrino-terminal kill <id>            # cerrar una
dotrino-terminal profiles             # los perfiles de esta computadora
dotrino-terminal link                 # enrolar un perfil
dotrino-terminal rename <perfil> <nuevo>   # cambiarle el nombre
dotrino-terminal vscode               # la terminal de VS Code abre consolas de aquí (--off lo deshace)
```

Si el programa de las consolas no está corriendo, `dotrino-terminal` lo arranca solo.

## Si algo no funciona

- **«Enrolar…» en gris y la nota «Para usar perfiles, instala dotrino-terminal»** en el menú
  Perfil: falta el paso 1 de [Instalar](#instalar). Usa **Perfil → Instalar dotrino-terminal…**.
  Sin él la app funciona igual, sin perfil.
- **La instalación dice EACCES**: tu npm instala en una carpeta del sistema. Usa
  [nvm](https://github.com/nvm-sh/nvm), o instálalo con `sudo` desde otra terminal.
- **«No encuentro npm»**: falta Node. Instala Node 20 o más reciente desde
  [nodejs.org](https://nodejs.org).
- **«Hay un agente corriendo que no acepta ventanas»**: tienes corriendo una versión anterior
  a la 0.6.0 (por ejemplo, como servicio). Detenla y vuelve a arrancarla con la nueva:
  `npx @dotrino/terminal-agent@latest`.
- **Un error en la ventana que no se cierra**: la app espera a que pulses una tecla, para que
  puedas leerlo. Pulsa cualquiera.

Para entrar a tus computadoras desde el navegador, ve [Terminal — tu computadora desde el
teléfono](/herramientas/terminal/).
