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

## 1. Tus emisores

Un emisor es un **RUC con su serie** (establecimiento y punto de emisión) en un
**ambiente**: pruebas o producción, y **con su firma electrónica**. En **Ajustes →
Emisores** pulsa **Añadir emisor** y pon los datos tal como están en tu RUC: razón social,
dirección matriz, establecimiento y punto de emisión (normalmente `001` y `001`), y si
llevas contabilidad, eres contribuyente especial, agente de retención o estás en el RIMPE.

- **Próximo secuencial**: el número que llevará la próxima factura de ese emisor. Si ya
  facturabas con otro sistema **en esa misma serie**, pon el siguiente al último que usaste.
- **Pruebas y producción son emisores distintos**, cada uno con su numeración. Lo cómodo es
  crear primero el de pruebas y, cuando el SRI te dé el permiso, usar **Duplicar** y
  cambiarle el ambiente a producción: la copia se lleva la misma firma.
- **Varios RUC**: añade un emisor por cada uno.
- No se pueden guardar dos emisores con **el mismo RUC, serie y ambiente**: compartirían la
  numeración y el SRI rechazaría la segunda factura con el mismo número.

Si facturas desde **más de un aparato**, dale a cada uno su propio punto de emisión, por la
misma razón.

## 2. La firma de cada emisor

En el mismo formulario del emisor, en **Firma electrónica**, elige tu archivo (`.p12` o
`.pfx`) y escribe su contraseña.

- La app abre el archivo antes de guardar el emisor: si la contraseña no es la correcta, te
  lo dice y no guarda nada.
- En la tarjeta del emisor ves el titular de la firma y hasta cuándo vale.
- El archivo se guarda **cifrado con la llave de tu perfil**.
- **La contraseña no se guarda.** La firma de cada emisor te la pide una vez cuando vas a
  emitir con él (o con **Desbloquear** en su tarjeta); al cerrar o recargar la página
  vuelve a quedar bloqueada.
- Para cambiarla, **Editar** el emisor y **Reemplazar firma**. Al quitar un emisor se quita
  también su firma.
- Las firmas quedan en **este aparato**. Para emitir desde otro, carga allí tus emisores.

## 3. Emitir una factura

En **Nueva factura**:

1. **Emisor**: elige con cuál facturas. La app te dice qué número llevará la factura y te
   avisa si es de pruebas. Se queda elegido para la siguiente.
2. **Comprador**: tipo de identificación, número y nombre. Para **consumidor final** los
   datos se ponen solos; el SRI solo lo permite hasta **USD 50**.
3. **Detalle**: una línea por producto o servicio, con cantidad, precio, descuento y la
   tarifa de IVA (15% es la general).
4. **Forma de pago**.
5. **Firmar y enviar al SRI.** Si la firma de ese emisor está bloqueada, te pide su
   contraseña. En producción te pide además confirmar.

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
**Facturas** puedes **descargar los XML del mes en un `.zip`**, con una carpeta por RUC y
ambiente (las de pruebas no se mezclan con las que valen). Si tienes varios emisores, puedes
filtrar la lista por uno. Hazlo cada mes y guarda esos archivos donde guardas tus
documentos.

## El «RUC Proveedor»

Desde la resolución del SRI NAC-DGERCGC26-00000027 (28 de julio de 2026), quien factura con
un sistema **que un proveedor vende** tiene que poner el RUC de ese proveedor en la
información adicional de cada factura.

La resolución llama proveedor a quien desarrolla o es dueño de un sistema de facturación
**para venderlo**. Facturero es gratuito y no se vende, así que no tiene un proveedor en ese
sentido, y sus facturas **no llevan** ese dato.

Es la lectura de la resolución al 16 de septiembre de 2026: el SRI todavía no ha dicho nada
sobre programas gratuitos. Si tu contador lo ve distinto para tu caso, consúltalo con él.

## Lo que la app no hace (todavía)

- **Anular** una factura: se hace en SRI en línea → Facturación Electrónica → Anulación,
  hasta 90 días después de emitirla.
- Notas de crédito, retenciones y guías de remisión.
- Enviar la factura por correo por ti: la descargas o la compartes tú.
