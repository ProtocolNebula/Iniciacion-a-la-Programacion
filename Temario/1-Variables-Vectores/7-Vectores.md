# Vectores

## Introducción

A efectos prácticos, los `vectores` (`arrays`) son `variables` o `constantes` que "agrupan" más variables.

Esto nos es útil cuándo queremos tener listados de elementos (los cuales posteriormente podemos recorrer o hacer otras gestiones).

Imaginemos que queremos tener un listado de `Ingredientes` que hacen falta para una receta, podemos tenerlos todos en una variable llamada `let ingredientes` en lugar de tener `let ingrediente1; let ingrediente2; ...`.

## Ejemplo final

> Archivo final disponible en [Vectores](/Ejemplos/1-Variables-Vectores/7-Vectores.js).


## Scripting

Crearemos un archivo nuevo para el ejemplo llamado `7-Vectores.js`.

### Creamos un listado de ingredientes

Vamos a crear un listado con los ingredientes y los mostraremos por pantalla.

Posteriormente mostraremos el primer ingrediente (posición 0).

**IMPORTANTE:** Por normal general, los vectores comienzan desde la posición `0` y no `1`, lo cual es importante tener en cuenta al utilizar `condicionales` (veremos casos más adelante).

```js
let ingredientes = [
    'Huevo',
    'Sal'
];

// CUIDADO CON NO HACER ESTO, mostrará el texto "Array" en lugar delcontenido del Vector
// Esto es igual que hacer ingredientes.toString();
console.log('Ingredientes (array toString): ' + ingredientes);

// Mostramos correctamente el listado de ingredientes
console.log('Ingredientes: ', ingredientes);

// Mostramos el PRIMER ingrediente (POSICIÓN 0)
console.log('Ingrediente 1: ' + ingredientes[0]);

// Mostramos el SEGUNDO ingrediente (POSICIÓN 1)
console.log('Ingrediente 2: ' + ingredientes[1]);
```

> Nótese el úso de la `,` (coma) en lugar del `+` en el `console.log`, esto es para ver el listado de ingredientes.


### Añadiendo elementos de forma dinámica

¿Que pasa si queremos añadir más elementos? Pues tenemos varias opciones, por ejemplo, utilizar `.push()` o concatenar con `[]`.

Veamos un ejemplo con un array vacío (no es necesario que tenga ningún elemento antes de ser usado).

```js
let ingredientes = []; // No pasa nada si ya hay algún elemento

ingredientes[] = 'Sal'; // Añadimos con concatenación
ingredientes.push('Huevo'); // Añadimos utilizando la función push

console.log('Total de ingredientes:', ingredientes.length);
console.log('Litado de ingredientes:', ingredientes);
```

> Tanto `push` como `[]` nos ofrece el mismo resultado

> Podemos ver la cantidad de ELEMENTOS que hay utilizando `miVector.length`. Este comienza desde **1** en lugar de **0** dado que nos indica la **CANTIDAD** de elementos que tiene, **no la POSICIÓN**.