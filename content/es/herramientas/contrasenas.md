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

Dicho en una frase: **solo se esconde si el campo está vacío y no tienes nada guardado
suyo.** Con **una sola letra** escrita ya aparece.

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

### Cuando la cuenta está guardada en otro sitio

Pasa mucho: cambia el subdominio y la cuenta es la misma. En el modal hay una **lupa**:
búscala por su nombre, su usuario o su dirección, y podrás rellenar con ella aunque esté
guardada en otro dominio. Si además guardas ahí, ese sitio se suma a los suyos y la
próxima vez aparece sola.

## La lista de la extensión

Al pulsar el icono de Dotrino en la barra de Chrome ves lo que tienes **para el sitio que
estás mirando**. De cada entrada puedes:

- **Rellenar** o **copiar** su contraseña.
- Marcarla **predeterminada**: es la que sale elegida al abrir el botón de un campo. Una
  por sitio.
- **Borrarla**, con una confirmación en su propia tarjeta.

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
