---
title: iatosvg — archivos de Illustrator a SVG
description: Convierte archivos .ai de Illustrator a SVG en tu propio equipo, con sus capas, degradados, fotos y mesas de trabajo.
---

# iatosvg

[`iatosvg.dotrino.com`](https://iatosvg.dotrino.com/) · repo
[`dotrino-iatosvg`](https://github.com/imdotrino/dotrino-iatosvg)

Convierte tus archivos de **Illustrator (`.ai`)** a **SVG**, el formato de dibujo que
abren los navegadores, los editores web y casi cualquier programa de diseño. No hace
falta tener Illustrator.

Todo pasa **en tu equipo**: el archivo se abre en la pestaña y no se sube a ningún lado.

## Cómo se usa

1. Abre [iatosvg.dotrino.com](https://iatosvg.dotrino.com/).
2. Arrastra tus archivos `.ai` a la página, o pulsa **Elegir archivos .ai**. Puedes
   soltar varios a la vez.
3. Si el diseño lleva fotos, añade también la carpeta **Links** que va con él (o las
   fotos sueltas). Así salen en alta resolución.
4. Pulsa **Descargar SVG** en cada mesa de trabajo.

Si te falta alguna foto, la app lo dice y la pone con la vista previa pequeña que
guarda el `.ai`. Añádela y pulsa **Volver a convertir**.

Instalada como app, en Chrome o Edge de escritorio puedes abrir un `.ai` directamente
con ella desde tu explorador de archivos.

## Qué sale en el SVG

- Las **capas**, con su nombre. Las ocultas no salen, salvo que marques
  **Incluir capas ocultas**.
- Las formas, los **degradados**, la transparencia y los modos de fusión.
- Las **fotos**, tanto las que van dentro del archivo como las enlazadas. Las fotos
  muy grandes se reducen al tamaño que elijas en **Tamaño de las fotos**.
- Cada **mesa de trabajo** como un SVG aparte.

## Qué todavía no sale bien

- El **texto** sale como formas: se ve igual, pero no se puede editar como texto.
- Las **mallas de degradado**, los **símbolos** y los **rellenos con motivo** todavía
  no se dibujan.
- Los colores de impresión (CMYK) se pasan a colores de pantalla con el perfil
  estándar de Illustrator. Pueden verse un poco distintos que en tu programa si usas
  otro perfil.

## Lo que se guarda

En tu almacén solo quedan **tus ajustes** y la **lista de lo que convertiste** (nombre
del archivo, fecha y mesas de trabajo). Los archivos no se guardan en ningún lado.

## Para quien programa

La misma conversión existe como comando de terminal y como librería (`@dotrino/iatosvg`):
el [README del repo](https://github.com/imdotrino/dotrino-iatosvg) explica cómo se usa
y cómo está hecho el formato `.ai` por dentro.
