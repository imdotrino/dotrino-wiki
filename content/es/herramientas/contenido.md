---
title: Content — tus audios en tu computadora
description: Copia tus grabaciones del teléfono a tu propia computadora y escúchalas, ábrelas con otro programa o guárdalas desde una ventana del navegador.
---

# Content

[`content.dotrino.com`](https://content.dotrino.com/) · repo
[`dotrino-content`](https://github.com/imdotrino/dotrino-content)

Content guarda tus archivos grandes en una computadora tuya. La computadora entra en tu cuenta como
un aparato más. Hoy lo usa la Grabadora.

## Instalarlo

Necesitas Node 22.5 o superior. En tu computadora:

```sh
npm i -g @dotrino/content
dotrino-vault pair --service content     # en la máquina de tu bóveda: te da un código
dotrino-content enroll <código>
dotrino-content start
```

## Copiar las grabaciones

Con Content encendido, abre la Grabadora en el teléfono.

| Conexión | Qué pasa |
|---|---|
| Directa entre el teléfono y tu computadora | Se copian solas |
| Por tu propio servidor | La grabación dice que falta copiarla. La tocas y te pregunta |
| Por los servidores de Dotrino | No se copian. Esperan a que haya conexión directa |

Los servidores de Dotrino son para el contenido de Dotrino. Tú puedes poner los tuyos.

Las copias van cifradas. Si se corta la conexión, siguen donde iban.

## Abrirlas en la computadora

```sh
dotrino-content gui
```

Se abre una ventana en tu navegador con tus grabaciones. Puedes:

- reproducirlas;
- abrirlas con otro programa, como un editor de audio;
- guardar el archivo original donde quieras;
- borrarlas de la computadora. El teléfono conserva su copia y no la vuelve a subir.

La ventana solo funciona en esa computadora.
