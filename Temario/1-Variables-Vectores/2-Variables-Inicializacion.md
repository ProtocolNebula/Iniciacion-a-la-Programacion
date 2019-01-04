# Variables - Inicialización

## Preparación del entorno

Utilizaremos el ejemplo creado en `Fundamentos`, si no lo tenemos, podemos descargarlo de [ejemplo base](/Ejemplos/0-Fundamentos/1-cocinero/).

## Scripting

**IMPORTANTE:**
> Para `inicializar` una variable escribiremos la palabra `var` seguida del nombre que queramos para la variable (ejemplo `var huevos`).

> Una vez inicialida no podemos volver a `declararla`, por tanto no volveremos a escribir `var huevos` sino `huevos` directamente.

### Control de huevos
---------------------

Vamos a tener un control de los `huevos` que tenemos, empezaremos con 0 huevos.

Para ello, añadiremos al principio del archivo:

```js
var huevos = 0; // Inicializamos la variable con el valor 0

console.log('Actualmente tenemos ' + huevos + ' huevos.');
```

Si ejecutamos el código (`node index.js`), lo primero que veremos será:
```
Actualmente tenemos 0 huevos.
```

> Podemos observar que salen mismos textos que antes a pesar de no tener huevos, eso lo solventaremos en los próximos temas.

> Además veremos que no se muestra por ningún lado el texto precedido por `//`, ya que este es un `comentario` y es ignorado por el lenguaje.
