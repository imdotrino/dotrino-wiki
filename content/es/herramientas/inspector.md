---
title: Inspector — qué contraseñas tienes a la vista
description: Revisa tu computadora y te enseña qué contraseñas y llaves están guardadas a la vista, con los pasos para protegerlas. Solo mira, y nada de lo que encuentra sale de tu máquina.
---

# Inspector

[`inspector.dotrino.com`](https://inspector.dotrino.com/) · repo
[`dotrino-inspector`](https://github.com/imdotrino/dotrino-inspector)

Con el tiempo se acumulan contraseñas escritas dentro de archivos: la clave de un
servicio en la configuración de un proyecto, la llave de tu servidor sin
proteger, una contraseña que escribiste una vez en la terminal y sigue en su
historial. El Inspector las busca, te las enseña **una por una** y te dice qué
hacer con cada una.

**Solo mira.** No edita, no mueve, no borra archivos y no arranca nada: la receta
la aplicas tú. Y **nada de lo que encuentra sale de tu computadora** — no hay
informes, ni estadísticas, ni ningún servidor que se entere de qué se halló.

## Ponerlo en marcha

```
npx @dotrino/inspector
```

Se abre en **su propia ventana**. Al cerrarla, el Inspector se apaga entero: no
queda nada corriendo por detrás. No instala nada permanente, así que cada vez que
lo lances tendrás la última versión.

¿No tienes Node? [El instalador de Dotrino](/herramientas/instalar/) se encarga:

```
curl -fsSL https://dotrino.com/install.sh | sh -s -- @dotrino/inspector
```

## Cómo se usa

1. **Elige dónde mirar.** Por defecto revisa las ubicaciones conocidas de tu
   computadora (donde los programas suelen dejar sus credenciales). Añade además
   la carpeta donde tienes tus proyectos.
2. **Pulsa revisar.** Verás los hallazgos ordenados por lo grave que es tenerlos
   así: primero lo que está a la vista de cualquiera, después lo demás.
3. **Abre uno.** Cada hallazgo dice qué archivo es, qué se encontró y **por qué**
   es un problema.
4. **Copia la receta.** Los pasos para dejar esa contraseña bien guardada, listos
   para pegar en tu terminal. Los ejecutas tú.
5. **O descártalo.** Si ese caso está bien así, márcalo y no vuelve a aparecer.

## El informe por la terminal

En una computadora sin escritorio (un servidor, una sesión por SSH) no hay
ventana que abrir. Ahí el Inspector escribe su informe en la propia terminal:

```
npx @dotrino/inspector --print
```

## Opciones

| Opción | Para qué |
|---|---|
| `--print` | el informe en la terminal, sin ventana |
| `--browser` | abrirlo en tu navegador en vez de en su propia ventana |
| `--no-open` | no abrir nada; imprime la dirección para que la abras tú |
| `--no-known` | no mirar las ubicaciones conocidas, solo las carpetas que le indiques |
| `--port <n>` | fijar el puerto (por defecto toma uno libre) |

También puedes pasarle carpetas sueltas: `npx @dotrino/inspector ~/proyectos`.

## Qué busca

- Contraseñas y claves dentro de los archivos de configuración de tus proyectos.
- Llaves de acceso a servidores, y en especial las que están sin protección.
- Credenciales de servicios en la nube y de tiendas de aplicaciones.
- Sesiones y contraseñas guardadas por programas de uso diario.
- Contraseñas que quedaron escritas en el historial de la terminal.
- Archivos con secretos que además puede leer cualquiera que use esa computadora,
  o que se subieron sin querer a un repositorio.

No es un antivirus, ni una auditoría, ni un arreglador automático: mira archivos
tuyos y cómo están guardados.

## Lo que viene después

El Inspector te enseña el problema; guardarlas bien es de
[tu bóveda](/vault/modelo/), que se las entrega a cada programa al arrancar sin
que queden escritas en ningún archivo. Ver
[Secretos de servicios](/vault/secretos/).

## Por dentro

El Inspector levanta un servidor **solo en tu propia máquina**: nadie de tu red
puede entrar. La dirección lleva un código de un solo uso y **el servidor muere
con el comando**, así que no queda un programa encendido con los hallazgos
detrás. La ventana es la de tu propio navegador en modo aplicación, con un perfil
temporal que se borra al cerrar.
