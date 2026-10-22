---
title: Expenses — tus ingresos y gastos del mes
description: Lleva lo que entra y lo que sale cada mes en un calendario, con movimientos que se repiten solos y un resumen por categoría. Todo queda en tu almacén.
---

# Expenses — tus ingresos y gastos del mes

[`expenses.dotrino.com`](https://expenses.dotrino.com/) · repo
[`dotrino-expenses`](https://github.com/imdotrino/dotrino-expenses)

Expenses lleva **lo que entra y lo que sale cada mes**. Lo anotas, lo ves en un calendario
y al final del mes sabes en qué se fue el dinero. Lo que anotas se guarda en
[tu almacén](/empezar/privacidad/), dentro de tu perfil: no pasa por los servidores de
Dotrino.

> La app está **en desarrollo**. Hoy se anota a mano, con una frase, dictando o con los avisos
> del banco de tu correo, y puedes darle tu propia llave de IA.

## Anotar un movimiento

Hay dos formas:

- **El botón +** abre el formulario: elige **Gasto** o **Ingreso**, pon el importe, la
  fecha, la categoría y, si quieres, una nota.
- **Una frase** en el cuadro «Escribe una frase»: `almuerzo 4.50`, `cobré 1200 del sueldo`,
  `taxi 3 ayer`, `arriendo 350 el 5`. La app busca el importe, adivina si es gasto o
  ingreso, la categoría y el día, y te enseña el formulario ya lleno. **Nada se guarda sin
  que lo revises.**

Con el [dictado](#dictado) encendido, al lado del cuadro aparece un micrófono: púlsalo, di la
frase («almuerzo, cuatro dólares con cincuenta») y vuelve a pulsarlo. Lo que dijiste cae en
el cuadro y se entiende igual que lo escrito.

Para tocar un movimiento ya anotado, púlsalo en la lista: puedes cambiarlo o eliminarlo.

## El calendario

La pestaña **Mes** enseña el mes con lo que entró (en verde) y lo que salió (en rojo) cada
día, y arriba los totales: ingresos, gastos y balance. Pulsa un día para ver solo lo de ese
día; vuelve a pulsarlo, o pulsa **Todo el mes**, para ver el mes entero. Las flechas cambian
de mes.

## Lo que se repite cada mes

En **Cada mes** añades reglas para lo que pagas o cobras todos los meses: el sueldo, el
arriendo, una suscripción. Cada regla dice el importe, la categoría, el día del mes y desde
qué mes (y, si quieres, hasta cuál).

Al abrir un mes, cada regla anota sola su movimiento **por confirmar**: aparece con un borde
punteado y un punto en el día del calendario, y **no cuenta en los totales** hasta que lo
confirmas. Si ese mes no hubo ese pago, descártalo y ya no vuelve a aparecer en ese mes.

Si una regla cae el día 31 y el mes es más corto, se anota en su último día.

## El resumen

La pestaña **Resumen** reparte los gastos y los ingresos del mes por categoría, de mayor a
menor, y te dice cuánto gastaste más o menos que el mes anterior. Desde ahí descargas el mes
en **CSV** para abrirlo en una hoja de cálculo.

## Tu propia IA (opcional)

En **Ajustes → Tu IA** puedes poner la llave de un proveedor de IA que ya uses: OpenAI,
Anthropic (Claude), Google Gemini, DeepSeek, Groq, OpenRouter, o un modelo en tu propia
computadora con Ollama. Con ella:

- **las frases las entiende tu modelo**, así que puedes escribir más libre («llené el tanque
  ayer, 30 dólares»). Igual revisas lo que entendió antes de guardar;
- en **Resumen**, el botón **Descríbeme el mes** te lo cuenta en tres o cuatro frases.

La llamada sale de tu navegador directo a ese proveedor, con tu llave y a tu cuenta: Dotrino
no la ve. La llave se guarda cifrada con la llave de tu cuenta. Al proveedor va lo que
escribes en el cuadro de frases y, para el resumen, solo los totales por categoría (nunca
tus notas). Si el proveedor no contesta, la app te lo dice y entiende la frase con sus
reglas. Pulsa **Probar** antes de guardar para saber si la llave funciona; **Quitar la
llave** la borra.

## Correo

Los avisos con los que tu banco te cuenta un consumo, una transferencia o un depósito se
convierten en movimientos **por confirmar**: aparecen en la pestaña **Por confirmar** y no
cuentan hasta que los aceptas. Ahí puedes **Aceptar**, **Revisar** (cambiar algo antes de
guardarlo) o **Descartar**. Un correo ya visto no vuelve a entrar.

Hay dos formas de traerlos:

- **Pegarlo a mano.** Copia el correo del banco y pégalo en «Pegar un aviso del banco». La app
  busca el importe (el de la operación, no tu saldo), si entró o salió, dónde y cuándo.
- **Desde tu buzón, con el agente en tu computadora.** Un programa pequeño que corre en tu PC
  lee los avisos de tu correo y se los pasa a la app cuando la abres. Tu usuario y tu
  contraseña del correo se guardan cifrados en tu [bóveda](/vault/emparejar/): la app no los
  ve nunca. Con el PC apagado la app funciona igual; solo no llega correo nuevo.

Para poner el agente:

1. En el PC de tu bóveda, saca una invitación: `dotrino-vault pair --service expenses --scope sign`.
2. En el PC donde va a correr (puede ser el mismo): `npx @dotrino/expenses-agent`, pega la
   invitación y aprueba el código en tu bóveda.
3. `npx @dotrino/expenses-agent setup` te pide el servidor de correo, tu usuario, la contraseña,
   la carpeta y, si quieres, los remitentes del banco (así solo se leen esos correos).
4. `npx @dotrino/expenses-agent check` comprueba que entra a tu buzón.

**Gmail y Outlook piden una «contraseña de aplicación»**, no la de siempre: se saca en la
cuenta de Google (Seguridad → Contraseñas de aplicaciones, con la verificación en dos pasos
encendida) o de Microsoft. Servidores: `imap.gmail.com`, `outlook.office365.com`.

Este navegador tiene que estar enlazado a tu bóveda para encontrar el agente. Si tienes tu IA
configurada, el texto del correo se le manda para leerlo; si no, lo lee la app con sus reglas.

## Dictado

En **Ajustes → Dictado** eliges si usarlo y dónde se convierte tu voz en texto:

- **En este aparato**: la primera vez que pulsas el micrófono se descarga el modelo de voz
  (unos 77 MB, desde huggingface.co) y queda guardado. Desde ahí tu voz se convierte en texto
  en tu aparato y no sale de él. Funciona también sin conexión.
- **Con tu IA**: tu voz va al proveedor de [tu IA](#tu-propia-ia-opcional) con tu llave.
  Sirven OpenAI, Groq y Gemini; si tu proveedor no convierte voz en texto, la opción sale
  deshabilitada y te dice por qué.
- **Apagado**, que es como empieza: no hay micrófono.

La app nunca usa el dictado del navegador, que manda tu voz a Google o a Apple.

## Ajustes

- **Dónde están tus datos**: si tu perfil está enlazado a tu [bóveda](/vault/emparejar/),
  lo que anotas se copia allí cifrado y lo recuperas desde otro aparato de tu cuenta. Si no,
  queda solo en este navegador.
- **Moneda**: solo cambia cómo se muestran los importes.
- **Tus categorías**: añade las tuyas con su icono. Las de la app no se borran.
