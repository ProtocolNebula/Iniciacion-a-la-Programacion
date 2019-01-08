# Ejemplo - Fundamentos de la programación

## Introducción al ejemplo

El ejemplo descrito a continuación se utilizará como base para introducir los conceptos principales de la programación, lo iremos ampliando poco a poco.

Utilizaremos el ejemplo de `La receta del Huevo Frito`, simularemos que el ordenador puede cocinar e informará al usuario de todas las acciones que hace.

Como es simplemente ejemplificativo no hará ninguna acción real (ni comprará de verdad - utilizando apis, claro, tampoco es un robot físico) ni hará ninguna acción fuera de su entorno `sandbox`.


## Diagrama de flujo

El ejemplo del huevo frito más básico.

![Diagrama - Ejemplo básico del huevo frito](/Ejemplos/0-Fundamentos/2-cocinero/diagrama.jpg)

> Podemos observar como se `conidiciona` el hecho de poder o no sacar el huevoo con un `rombo/cuadrado`

## Scripting

### Preparando el entorno

- Descargamos e instalamos:
    - [Visual Studio Code](https://code.visualstudio.com/)
    - [NodeJS](https://nodejs.org/es/) (última versión o LTS)
- Creamos una carpeta (en el `escritorio` por ejemplo).
- Dentro creamos una nueva carpeta llamada `2-cocinero`.
- Abre `Visual Studio Code`.
- Ves a `Archivo` -> `Abrir Carpeta/Directorio` y escoge `2-cocinero`.


#### Importante sobre las carpetas y archivos

Intenta utilizar unicamente:
- Letras (sin tildes/acentos)
- Guiones
- Puntos (solo en archivos)

Si puedes además `evita los espacios (" ")` para evitar problemas.

**Ejemplo:** En lugar de escribir `Mi primer ejercicio genérico` escribe `mi-primer-ejercicio-generico` o `MiPrimerEjercicioGenerico`.

### Añadiendo código

A partir de ahora deberías mimetizarte con el editor `Visual Studio` para poder desarrollar comodamente, cuándo debas crear carpetas o archivos utiliza el `Explorador de Archivos` (el primer icono del menú izquierdo si lo tienes cerrado).

- Crea un nuevo archivo llamado `index.js`
- Pega siguiente código que encontrarás en el [ejemplo base](/Ejemplos/0-Fundamentos/2-cocinero/index.js).
- Guarda el texto `Control + s`.
- Abre un terminal (`Control + ñ` en Windows) y ejecuta `node index.js`

Si lo has hecho todo bien, deberías ver varios mensajes por pantalla.

### ¿Que está pasando?

Si observamos bien el archivo `index.js` verás que:
- Se utiliza `console.log('TEXTO');`, que simplemente muestra un mensaje en el terminal.
- Se ejecutan todos los textos en el `mismo orden` que se han escrito.

¡Con esto ya nos hemos introducido en el mundo de la programación!...

Aunque no podamos hacer gran cosa con esto, `console.log` es algo que utilizaremos continuamente cuándo desarrollemos con `JavaScript` o sus alternativas en otros lenguajes.