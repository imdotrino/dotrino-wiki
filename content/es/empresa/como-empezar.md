---
title: Cómo empezar en tu empresa
description: El camino corto: instalar la bóveda en una máquina tuya, conectar los aparatos del equipo y que cada servicio reciba sus claves.
---

# Cómo empezar en tu empresa

Cuatro pasos, en este orden. Cada uno tiene su página con el detalle.

## 1. Una máquina que guarde las claves

Elige un equipo de la empresa —un servidor pequeño basta— e instala ahí la bóveda:
[Instalación: elige tu vía](/vault/instalacion/). No necesita quedar abierta a
internet: es ella la que llama hacia afuera.

Antes de tocar nada conviene leer [El modelo: perfil, acta y llaves](/vault/modelo/):
son diez minutos y explican quién manda sobre qué.

## 2. Conecta los aparatos del equipo

Cada computadora o teléfono que vaya a usarse se autoriza una vez, tecleando un
código **en ese mismo aparato**: [Emparejar un aparato](/vault/emparejar/). Retirar el
permiso corta el acceso en el acto.

Quien administra tiene además su [contraseña de perfil](/vault/perfiles/).

## 3. Que los servicios dejen de llevar un archivo con claves

Cada servicio pide sus claves al arrancar y las recibe cifradas, solo en memoria:
[Secretos de servicios](/vault/secretos/). Ahí se acaba el archivo de configuración
copiado en cada servidor.

Para las conexiones a servidores, lo mismo con las llaves de acceso:
[Llaves SSH sin archivos](/vault/ssh/).

## 4. Y si quieres, que una persona autorice

Un servicio se puede marcar para que **no reciba nada hasta que alguien apruebe desde
su teléfono**: [Aprobación desde el teléfono](/vault/aprobacion/). Es lo que conviene
para lo más delicado.

## Cómo se guarda todo por dentro

Qué se cifra, con qué y hasta dónde alcanza cada permiso está en
[Cifrado, store y alcance](/vault/seguridad/).

¿Preguntas antes de empezar? Escríbenos desde
[dotrino.com/enterprise](https://dotrino.com/enterprise).
