---
title: Facturero — facturación electrónica del SRI
description: Emite facturas electrónicas autorizadas por el SRI de Ecuador desde el navegador, con tu firma electrónica, y guárdalas en tu propio almacén.
---

# Facturero — facturación electrónica del SRI

[`facturero.dotrino.com`](https://facturero.dotrino.com/) · repo
[`dotrino-facturero`](https://github.com/imdotrino/dotrino-facturero)

Facturero emite **facturas electrónicas autorizadas por el SRI** de Ecuador. Cargas tu
firma electrónica una vez y, desde ahí, cada factura se firma en tu propio aparato, va
directo al SRI y queda guardada en [tu almacén](/empezar/privacidad/).

Tu firma, tus clientes y tus ventas no pasan por los servidores de Dotrino: la factura sale
de tu aparato hacia el SRI y de ahí vuelve la autorización.

## Antes de empezar

Necesitas tres cosas, y las tres se tramitan fuera de la app:

1. **Tu RUC** activo.
2. **Tu firma electrónica** en archivo (`.p12` o `.pfx`), emitida por una entidad
   acreditada: Banco Central, Security Data, Uanataca, ANF u otra.
3. **El permiso del SRI para emitir facturas electrónicas.** Se pide en
   [SRI en línea](https://srienlinea.sri.gob.ec/) → Facturación Electrónica. Primero en
   **Pruebas** y, cuando todo salga bien, en **Producción**.

> En el ambiente de **pruebas** el SRI también exige una firma real: con una firma que no
> venga de una entidad acreditada responde «firma inválida». Lo que no tienen las facturas
> de pruebas es validez tributaria, así que puedes emitir todas las que quieras.

## 1. Tus datos de emisor

En **Ajustes → Emisor** pon los datos tal como están en tu RUC: razón social, dirección
matriz, establecimiento y punto de emisión (normalmente `001` y `001`), y si llevas
contabilidad, eres contribuyente especial, agente de retención o estás en el RIMPE.

- **Próximo secuencial**: el número que llevará la próxima factura. Si ya facturabas con
  otro sistema **en ese mismo punto de emisión**, pon el siguiente al último que usaste.
- **Ambiente**: empieza en **Pruebas**. Cambia a **Producción** cuando el SRI te haya dado
  el permiso y tus facturas de prueba salgan autorizadas.

Si facturas desde **más de un aparato**, dale a cada uno su propio punto de emisión: dos
aparatos con el mismo punto podrían usar el mismo número, y el SRI rechaza el segundo.

## 2. Tu firma electrónica

En **Ajustes → Firma electrónica**, elige tu archivo y escribe su contraseña.

- La app comprueba que el archivo abre y que la firma está vigente, y te enseña el titular
  y hasta cuándo vale.
- El archivo se guarda **cifrado con la llave de tu perfil**.
- **La contraseña no se guarda.** Cada vez que abras la app para emitir te la pedirá una
  vez; al cerrar o recargar la página, la firma vuelve a quedar bloqueada.
- La firma queda en **este aparato**. Para emitir desde otro, cárgala también allí.

## 3. Emitir una factura

En **Nueva factura**:

1. **Comprador**: tipo de identificación, número y nombre. Para **consumidor final** los
   datos se ponen solos; el SRI solo lo permite hasta **USD 50**.
2. **Detalle**: una línea por producto o servicio, con cantidad, precio, descuento y la
   tarifa de IVA (15% es la general).
3. **Forma de pago**.
4. **Firmar y enviar al SRI.** En producción la app te pide confirmar antes.

La app firma, envía y espera la respuesta del SRI unos segundos.

## Qué significa cada estado

| Estado | Qué pasó | Qué hacer |
|---|---|---|
| **Autorizada** | El SRI la aceptó. Es la factura válida. | Entregarla al comprador. |
| **En espera** | El SRI la recibió y todavía no responde. | Consultarla más tarde: tiene hasta 24 horas. |
| **Devuelta** | El SRI la rechazó al recibirla (un dato mal formado). | Leer el mensaje del SRI y **Corregir**. |
| **No autorizada** | El SRI la revisó y no la aceptó. | Leer el mensaje del SRI y **Corregir**. |
| **Sin enviar** | No se pudo llegar al SRI (por ejemplo, sin conexión). | **Enviar de nuevo**. |

**Corregir** reenvía la factura con **el mismo número y la misma fecha**, como pide el SRI.
Tienes **72 horas** desde la emisión para que llegue al SRI.

## Entregar la factura al comprador

La ley te pide entregarle el **XML autorizado** y su versión impresa (el **RIDE**). Desde
una factura autorizada puedes:

- **Descargar XML**: el archivo que tiene validez.
- **Imprimir o guardar PDF**: el RIDE, con la clave de acceso y su código de barras.
- **Compartir**: en el teléfono, envía el XML por la app que elijas.

## Guardar tus facturas

Hay que conservar las facturas **7 años**. Además de lo que queda en tu almacén, en
**Facturas** puedes **descargar los XML del mes en un `.zip`**. Hazlo cada mes y guarda
esos archivos donde guardas tus documentos.

## Lo que la app no hace (todavía)

- **Anular** una factura: se hace en SRI en línea → Facturación Electrónica → Anulación,
  hasta 90 días después de emitirla.
- Notas de crédito, retenciones y guías de remisión.
- Enviar la factura por correo por ti: la descargas o la compartes tú.
