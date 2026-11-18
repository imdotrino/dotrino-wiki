---
title: Contexto de una carpeta para Claude Code (dotrino-context)
description: Busca por significado en los documentos, la memoria, los commits y las conversaciones de una carpeta, en tu máquina, y le da a Claude Code el contexto que responde a cada mensaje.
---

# Contexto de una carpeta para Claude Code

[`@dotrino/context`](https://www.npmjs.com/package/@dotrino/context) · repo
[`dotrino-context`](https://github.com/imdotrino/dotrino-context)

Cuando trabajas con Claude Code en un proyecto grande, lo que necesita saber está
repartido: documentos de diseño, la memoria que Claude guarda de sesiones anteriores,
el porqué de cada cambio en los commits y lo que se habló en otras conversaciones.
`dotrino-context` lo junta en una base que vive **en tu máquina** y le trae a Claude
lo que responde a lo que preguntas, en cada mensaje.

Nada sale de tu computadora: los modelos que entienden el texto corren en local y la
base es un archivo dentro de la carpeta.

## Qué guarda

| Tipo | Qué | Cuándo se actualiza |
|---|---|---|
| `doc` | Todos los `.md` de la carpeta (sin `node_modules`, `dist`, carpetas ocultas…) | al cambiar el archivo |
| `memory` | La memoria de Claude Code de esa carpeta y de sus subcarpetas | al cambiar la nota |
| `git` | Los mensajes de commit de los repos que haya dentro, uno por commit | al cambiar el HEAD |
| `conv` | Las conversaciones de Claude Code: solo lo que escribiste y el texto de la respuesta | cuando llevan 10 min sin cambiar |

A los commits y las conversaciones se les tapa lo que parezca un secreto (llaves,
tokens, `password=…`) antes de guardarlos. Es una red, no una garantía.

## Cómo decide qué contexto darte

1. Busca **por significado** (un modelo multilingüe, español e inglés) y **por palabra**.
2. Un segundo modelo lee tu pregunta junto a cada candidato y los ordena.
3. Solo pasa lo que de verdad responde: lo que queda por debajo de un umbral, o muy
   por debajo del mejor resultado, se queda fuera. Como mucho, 6 trozos por mensaje.
4. Cada resultado dice su **tipo** y su **fecha**. Si dos se contradicen: un `doc` o
   una `memory` (lo vigente) ganan a un `git` o una `conv` (la historia); la norma de
   la carpeta gana a todo; entre iguales, el más nuevo.

La base **refleja los archivos**: para que olvide algo, se corrige o se borra el `.md`
y la base lo sigue sola. Lo que desaparece de la fuente desaparece de la base.

## Una base por carpeta, y las de arriba como subcontexto

Cada carpeta tiene su base en `<carpeta>/.dotrino-context/`, que se ignora a sí misma
en git. Al buscar, consulta la suya y, como subcontexto, la de cada carpeta padre,
subiendo **mientras el padre tenga base** y parando en el primero que no. Lo propio
sale primero; lo de arriba llega marcado «contexto de arriba».

Para excluir rutas, un `.dotrino-contextignore` en la raíz de la carpeta, con la
sintaxis corta de `.gitignore`.

## Instalar y usar

```
npm i -g @dotrino/context
dotrino-context index                      # indexa la carpeta actual
dotrino-context search "qué llave firma el acta"
dotrino-context status                     # qué hay, por tipo, y lo que se saltó
```

Como servidor de Claude Code, registrado en la carpeta del proyecto:

```
claude mcp add -s local dotrino-context -- dotrino-context serve
```

Claude Code gana dos herramientas, `search` y `reindex`. Para que el contexto llegue
solo en cada mensaje, añade el hook en `.claude/settings.local.json` de esa carpeta:

```json
{ "hooks": { "UserPromptSubmit": [ { "hooks": [
  { "type": "command", "command": "dotrino-context hook", "timeout": 30 }
] } ] } }
```

El hook le pregunta al servidor de la carpeta por un socket local, así que no vuelve a
cargar los modelos. Los mensajes de menos de 4 palabras no se buscan. El servidor se
apaga al cerrar Claude Code.

## Con GPU

Con `DOTRINO_CONTEXT_DEVICE=cuda` los modelos corren en la tarjeta gráfica. Hace falta
el proveedor CUDA de onnxruntime y las bibliotecas de CUDA 13 y cuDNN 9; la receta,
sin `sudo`, está en el
[README](https://github.com/imdotrino/dotrino-context#gpu). Medido en una RTX 4060 Ti
sobre 17.000 trozos: indexar todo, 2 minutos (11 en CPU); una búsqueda, ~0,4 s.

Si pides la GPU y no está, falla y lo dice: no vuelve a la CPU en silencio.
