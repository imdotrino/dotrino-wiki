---
title: Gestor de contraseñas
description: Guarda tus contraseñas y tus datos en tu propia bóveda. El navegador recibe una cada vez, y solo cuando tú lo pides. Cómo instalarlo y cómo se usa.
---

# Gestor de contraseñas

[`pass.dotrino.com`](https://pass.dotrino.com/) · repo
[`dotrino-passmanager`](https://github.com/imdotrino/dotrino-passmanager)

Una extensión de Chrome que guarda tus contraseñas —y los datos que rellenas una y otra
vez: tu correo, tu teléfono, tu dirección— **en tu propia bóveda**. Cuando entras a un
sitio, pide la contraseña **de ese sitio**, la usa y la suelta. Lo normal en un navegador
es tener una copia de todas; aquí no hay ninguna copia.

Nada de esto llega a los servidores de Dotrino: ni tus contraseñas, ni los sitios donde
las usas.

## Instalarla

Todavía no está en la tienda de Chrome, así que se pone a mano. Se hace una vez:

1. Descarga la extensión desde [pass.dotrino.com](https://pass.dotrino.com/) y
   descomprime la carpeta.
2. En Chrome, abre `chrome://extensions` y activa **Modo de desarrollador**.
3. Pulsa **Cargar descomprimida** y elige la carpeta que descomprimiste.

Ya funciona. Desde ese momento guarda lo tuyo cifrado en tu propio navegador, sin pedirte
nada más: sin cuenta, sin contraseña maestra y sin instalar nada en tu computadora.

> Al actualizarla, **recárgala** en esa misma página. Chrome mantiene la versión anterior
> corriendo por detrás hasta que se lo dices, y mientras tanto verás avisos raros.

## El botón de cada campo

Al pinchar en una página, algunos campos tienen un **cuarto de círculo azul** en su
esquina, con el pájaro de Dotrino. Aparece **solo cuando puede hacer algo ahí**:

| El campo… | y de eso… | El botón |
|---|---|---|
| está vacío | no tienes nada guardado | no aparece |
| está vacío | tienes algo guardado | **rellenar** |
| tiene algo escrito | — | **guardar** |
| **es una contraseña y está vacío** | da igual | **una contraseña nueva** |

Dicho en una frase: **solo se esconde si el campo está vacío y no tienes nada guardado
suyo.** Con **una sola letra** escrita ya aparece. La última fila es la excepción: una
casilla de contraseña vacía siempre te ofrece una nueva, tengas algo guardado o no.

Si lo que hay escrito ya está guardado en una de tus cuentas, el botón **sigue ahí**: puede
que quieras guardarlo también en otra, o en una nueva. Al pulsarlo lo verás — la cuenta que
ya lo tiene igual no te ofrece nada, y la que no, sí.

Para saber eso el gestor **no abre nada**: tu bóveda le manda una huella de cada dato —que
no permite reconstruirlo— y él compara huellas. Por eso puede decirte que una contraseña no
ha cambiado sin llegar a verla.

**Nada se rellena solo.** El gestor nunca escribe en un formulario por su cuenta: marca
dónde puede ayudar y espera a que tú lo pidas. Es a propósito — rellenar solo obliga a
decidir por ti en qué campo va cada dato, y equivocarse ahí significa escribir una
contraseña en el sitio equivocado.

## Una contraseña nueva

Cuando pulsas el botón de una **casilla de contraseña vacía**, lo primero que ves es una
contraseña recién hecha: veinte caracteres, sin las letras y números que se confunden al
leerlos (la ele y el uno, la O y el cero). Se crea en tu navegador, en ese momento, y no
pasa por ningún servidor.

- **Usar** la escribe en el campo. Si el formulario tiene la casilla de *«repite la
  contraseña»*, la escribe también ahí — no tienes que copiarla a mano.
- **↻** te da otra, por si esa no te sirve. Mientras no lo pulses, la que ves no cambia:
  puedes leerla con calma o apuntarla.

> **Guárdala.** En cuanto la usas, el gestor la deja preparada: al enviar el formulario te
> preguntará dónde guardarla, y el botón del propio campo pasa a decir **guardar** por si
> prefieres hacerlo ya. Una contraseña que no guardas es una cuenta a la que no vuelves a
> entrar.

Esto es lo que hace que las contraseñas de tus cuentas dejen de parecerse entre sí. La que
te inventas tú se parece a la anterior; esta no se parece a ninguna, y no hace falta que te
la aprendas porque la guarda tu bóveda.

**Todavía no aparece en un cambio de contraseña.** En los formularios que piden la actual y
la nueva a la vez, el botón sale en la primera casilla. Por ahora, para cambiar una
contraseña, genérala desde una casilla vacía de un registro o desde la aplicación de
consola.

## Lo privado no sale sin que lo autorices

Cuando el gestor va a sacar de tu bóveda **un dato privado** —una contraseña, un código de
dos pasos, o cualquier campo que hayas marcado como privado— **sale una confirmación** y no
se entrega nada hasta que pulses **Autorizar**. Aparece en la propia extensión, nunca en la
página: el sitio que estás mirando no puede dibujarla ni responderla por ti.

**Lo que no pregunta**, y es a propósito:

- rellenar un dato **público** tuyo (tu nombre, tu correo, tu teléfono): escribir en un
  formulario lo que tú mismo tecleaste ahí no es sacar ningún secreto;
- **guardar** o **reemplazar**: al guardar no sale nada de tu bóveda, entra.

Pedir permiso para todo suena más seguro y es lo contrario: acabas dando al botón sin leer,
y el día que importa ya no lo miras.

Esto vale **igual** guardes donde guardes: en la propia extensión, en la bóveda de tu
computadora o en la de una pestaña. Si cierras la ventanita sin contestar, cuenta como un
**no** y no pasa nada — solo vuelve a pedirlo.

## Guardar

Hay dos momentos, y en los dos decides tú:

- **Después de entrar.** Al enviar un formulario, en la página siguiente sale un aviso
  abajo a la derecha con lo que se va a guardar. Es cuando ya sabes si la contraseña
  servía.
- **Desde el propio campo**, sin enviar nada: pulsas su botón y ahí mismo lo guardas.

En los dos casos ves **una fila por dato**, con su nombre, y eliges cuáles entran. Un dato
que ya tenías igual no sale: no hay nada que decidir en él.

### Dos cuentas que se ven iguales siguen siendo dos

Puedes tener dos cuentas del mismo sitio con el mismo correo —una de trabajo y otra
personal—, o dos fichas con el mismo nombre. **Son dos, y no se juntan.** Cada una tiene su
propia identidad por dentro, que no se te muestra porque no te sirve de nada: lo que ves es
el nombre, y el nombre puede repetirse.

Cuando dos se parecen tanto que no hay forma de saber cuál querías, el aviso **no elige por
ti**: viene marcada la entrada nueva y tú dices cuál. Para distinguirlas, cada fila lleva su
fecha.

### Ponerle nombre a una entrada

Cada entrada se llama, de entrada, por lo que lleva dentro: el usuario, o el correo, o el
primer dato que tenga. Sirve, pero con dos cuentas del mismo sitio las dos se llaman igual.

Pulsa el **lápiz** que hay al lado del nombre y escríbelo tú: «la del trabajo», «la de mi
mamá». Confirma con el **visto** que aparece al lado (Enter y salir del campo hacen lo
mismo), Escape lo deja como estaba, y si lo borras vuelve el nombre de antes — ninguna
entrada se queda sin nombre.

El lápiz está en los tres sitios donde salen tus entradas: el recuadro de un campo, el
aviso de guardar y la lista de la extensión.

Al crear una entrada nueva puedes escribirle el nombre ahí mismo. Ese no lleva visto, y es
a propósito: la entrada todavía no existe — se crea al guardar.

### En qué entrada

Arriba eliges **dónde va**: una de las entradas que ya tienes de ese sitio, o **una
entrada nueva**. Es una decisión tuya y no del gestor, porque una página no tiene forma de
saber cuál es cuál: puedes tener la misma cuenta guardada dos veces y que una ya no sirva.

Cada botón de guardar dice lo que va a hacer: **Guardar** si el dato es nuevo en esa
entrada, **Reemplazar** si ya estaba con otro valor.

### Datos privados

Al guardar un dato puedes marcarlo **privado**. Es tu manera de decir que ese dato no es
como los demás — el número de tu documento no se trata igual que el teléfono que rellenas
en veinte sitios.

## Rellenar

Pulsa el botón del campo y elige de qué entrada. Puedes rellenar **ese dato** o **todos
los valores** que esa entrada tenga en la página, de una vez.

Cada línea de la lista lleva, al lado del nombre, **con qué se va a rellenar**: en pequeño
y recortado, para que puedas distinguir dos cuentas sin abrir nada. Lo que hayas marcado
como privado sale tapado (`••••••`) y solo aparece al pulsar Completar, que es cuando se te
pide autorización.

### Cuando la cuenta está guardada en otro sitio

Pasa mucho: cambia el subdominio y la cuenta es la misma. En el modal hay una **lupa**:
búscala por su nombre, su usuario o su dirección, y podrás rellenar con ella aunque esté
guardada en otro dominio. Si además guardas ahí, ese sitio se suma a los suyos y la
próxima vez aparece sola.

## La lista de la extensión

Al pulsar el icono de Dotrino en la barra de Chrome ves lo que tienes **para el sitio que
estás mirando**. De cada entrada puedes:

- **Rellenarla** en la página.
- Abrir el **chevron** de la izquierda para ver lo que guarda, campo a campo, y **copiar**
  el que quieras. Los datos normales se copian sin más; **un dato privado te lo pregunta**,
  y solo ese — copiar tu teléfono nunca saca tu contraseña.
- Marcarla **predeterminada**: es la que sale elegida al abrir el botón de un campo. Una
  por sitio.
- **Borrarla**, con una confirmación en su propia tarjeta.
- **Editarla**, que abre su ficha en el gestor.

La lista va en **orden alfabético**, para que cada cosa esté siempre donde la dejaste.

Debajo de la lista hay un botón que abre **el gestor** entero.

## El gestor: cambiar lo que ya está guardado

Es una pestaña aparte, y no tiene nada que ver con la página que estés mirando: es donde
administras lo tuyo. Se abre desde el botón **Editar** de una tarjeta —entra directo a esa
ficha— o desde el botón de debajo de la lista.

Arriba ves **en qué sitios tienes algo guardado**, con cuántas entradas en cada uno. Pulsa
uno para ver las suyas, o escribe en el buscador para encontrar una por su nombre.

Dentro de una ficha puedes cambiar el **nombre** de la entrada, cambiar cualquier valor,
**añadir** uno nuevo y **quitar** los que ya no uses. Abajo están **los sitios donde vale**:
puedes ponerle varios —la misma cuenta te sirve en dos direcciones distintas— o quitarlos
todos, y entonces vale en cualquier sitio, que es lo que quieres para tu correo o tu
teléfono. Un sitio cubre también sus subdominios, así que con `banco.com.ec` ya entras en
`www.banco.com.ec`. Todo se guarda de una vez con un solo
botón, o se cancela de una vez: hasta que pulsas *Guardar los cambios*, no se toca nada.
Lo que marques para quitar se queda tachado a la vista, para que sepas qué vas a perder.

### Lo privado sigue sin salir, ni siquiera aquí

Un dato marcado como privado **no se enseña en el gestor**: su casilla sale vacía, y lo que
puedes hacer es **escribir encima para reemplazarlo**. Si escribes exactamente lo mismo que
ya había, el gestor te lo dice y no guarda nada — lo sabe comparando, sin llegar a ver lo
guardado.

Por eso abrir una ficha y guardar los cambios **no te pide ninguna confirmación**: nada de
lo que protege tu bóveda sale de ella. También puedes quitarle a un dato la marca de
privado sin que el gestor lo vea: a partir de ahí sí se enseña.

### Cada sitio es cada sitio

Una cuenta guardada en `pass.ejemplo.com` **no** aparece en `otra.ejemplo.com`: compartir
el dominio de arriba no los hace el mismo sitio, y ahí puede haber servicios que no tienen
nada que ver entre sí. Si de verdad quieres que una cuenta valga en todo un dominio,
guárdala con el dominio a secas (`ejemplo.com`) y entra en todos sus subdominios.

### Si tu bóveda vive en una pestaña, avísala

Una bóveda abierta en una pestaña solo responde mientras esa pestaña esté abierta. Para que
no te quedes a medias, enciende los avisos desde ella (**«Avísame cuando alguien pida
algo»**): a partir de ahí, si pides una contraseña con la bóveda cerrada, tu navegador te
avisa. Al pulsar el aviso se abre la bóveda y responde lo que quedó esperando — no hay que
pedirlo otra vez.

El aviso **no dice qué se pidió**, solo que alguien pide. Y aunque la bóveda esté abierta,
si la pestaña está en segundo plano también te avisa: así no se queda una pregunta esperando
en una pantalla que nadie mira.

## Dónde viven tus contraseñas

De entrada, **en la propia extensión**: cifradas, con una llave que ni el gestor puede
sacar de tu navegador. No hace falta nada más. Lo que implica, y conviene saberlo: si
desinstalas la extensión, se van con ella.

Cuando quieras tenerlas **en un solo sitio para todos tus navegadores**, conecta [una
bóveda](/vault/instalacion/) desde la propia extensión. Eso **añade** una cuenta: la que
tenías sigue estando, con lo suyo dentro, y eliges cuál miras. Cada una es un
[perfil](/empezar/identidad/) distinto y no se ven entre ellas — la personal y la del
trabajo conviven sin mezclarse.

Con una bóveda conectada, la confirmación puede además pedirse **en el teléfono**, con tu
huella (ver [aprobación](/vault/aprobacion/)).

## Traer y llevarte lo que tienes

- **Importar** lo que ya guardaste en 1Password, Bitwarden o Chrome.
- **Exportar** en el formato que elijas, cuando quieras. Es tu información, y llevártela
  es decisión tuya.

Las dos cosas las hace **tu bóveda**, no el navegador:

```
dotrino-passmanager import claves.csv
dotrino-passmanager export
```

## Códigos de dos pasos y passkeys

Los **códigos de dos pasos** viven junto a su contraseña, y se ven al abrirla. Las
**passkeys** también: al crear una en un sitio, la llave se guarda en tu bóveda y firmar
exige pedírsela, como cualquier otra credencial.
