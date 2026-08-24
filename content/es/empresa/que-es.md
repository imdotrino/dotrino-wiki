---
title: Qué es Dotrino Enterprise
description: El mismo ecosistema puesto al servicio de la privacidad de una empresa: claves en un solo sitio, permisos que caducan y todo en tus servidores.
---

# Qué es Dotrino Enterprise

Dotrino Enterprise **no es otro producto ni otro código**: es el mismo ecosistema,
presentado para una empresa. Las claves y la información sensible dejan de andar
repartidas, cambiar una clave toma minutos y todo funciona en los servidores de la
empresa.

> **Nada que no deba salir sale.**

## Qué resuelve

| | Cómo queda |
|---|---|
| **Las claves, en un solo sitio** | Dejan de estar copiadas en un archivo de configuración de cada máquina. Viajan cifradas hasta el servicio que las pide y ahí solo existen en memoria. Ver [Secretos de servicios](/vault/secretos/). |
| **Cambiar una clave, en minutos** | Escribes el valor nuevo en un lugar y los servicios vuelven solos con la nueva, sin editar servidor por servidor ni volver a desplegar. |
| **En los servidores de tu empresa** | Todo se instala en tus máquinas y la información se queda en tu red. El equipo que custodia las claves no necesita quedar abierto a internet. |
| **Cada servicio, solo su cajón** | Cada aplicación recibe únicamente las claves de su propio cajón, aunque compartan máquina. |
| **Quien entra y quien sale** | Autorizar un equipo exige teclear un código en ese mismo equipo; retirarlo corta el acceso en el acto y el permiso caduca solo a los 30 días. Ver [Emparejar un aparato](/vault/emparejar/). |
| **Una persona autoriza desde su teléfono** | Un servicio marcado así no recibe sus claves hasta que alguien aprueba desde el teléfono. Ver [Aprobación desde el teléfono](/vault/aprobacion/). |
| **Sin llaves sueltas en los computadores** | Las llaves de conexión a los servidores también son un secreto más, y no quedan escritas en disco. Ver [Llaves SSH sin archivos](/vault/ssh/). |
| **El código está a la vista** | Todo es abierto con licencia MIT: tu gente puede leerlo, compilarlo y correr las pruebas. Cada firma, cada permiso y cada intento rechazado quedan anotados con su fecha en tu propia máquina. |

## Qué NO ofrece

Se dice en voz alta para que nadie compre humo: **no hay** certificaciones,
auditorías de terceros, cumplimiento normativo, inicio de sesión corporativo (SSO)
ni soporte 24/7. Lo que se afirma arriba está implementado y se puede leer en el
código.

Siguiente paso: [Cómo empezar en tu empresa](/empresa/como-empezar/).
