# Vectores

**ANTES DE SEGUIR:** Este tutorial está pensado para demostrar de forma rápida cosas que podemos hacer con `Vectores`.

En este momento no tiene que preocuparte **entenderlo completamente**, solo saber que están ahí y que permiten una gran variedad de acciones en función de lo que `queramos resolver`. 

> Recuerda que siempre te puedes utilizar cualquier motor de búsqueda si necesitas cosas que no recuerdas o son más complejas.

## Introducción

A efectos prácticos, los `vectores` (`arrays`) o `arreglos` son `variables` o `constantes` que "agrupan" más variables.

Esto nos es útil cuándo queremos tener listados de elementos (los cuales posteriormente podemos recorrer o hacer otras gestiones).

Un `vector` puede contener cualquier tipo de `variable` u `objeto`, de hecho, en `JavaScript` (al igual que la mayoría de lenguajes de script) permite `diferentes tipos de elementos` a la vez, en otros lenguajes puede ser más complicado. 

Imaginemos que queremos tener un listado de `Ingredientes` que hacen falta para una receta, podemos tenerlos todos en una variable llamada `let ingredientes` en lugar de tener `let ingrediente1; let ingrediente2; ...`.


## Scripting

Crearemos un archivo nuevo para el ejemplo llamado `6-Vectores.js`.


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


### Encontrar un índice

Si no conocemos el índice del elemento al que queremos acceder, realizaremos una búsqueda con `.indexOf`.

Esto demuestra que los `Vectores` (`Array`) en realidad son una variable del tipo `Objeto`.

```js
// Creamos una variable que contendrá el nuevo ingrediente
let nuevoIngrediente = 'Azúcar';

// Añadimos el ingrediente a la lista
ingredientes.push(nuevoIngrediente);

// Buscamos el nuevo ingrediente
let indiceIngrediente = ingredientes.indexOf(nuevoIngrediente);
console.log('La sal tiene el indice: ', indiceIngrediente);
```


### Eliminando un elemento

Esto vaciará la posición pero seguirá existiendo vacía en el Vector.

Utilizar únicamente si realmente queremos esa posición vacía.

```js
delete ingredientes[indiceIngrediente];

// Mostramos los ingredientes, veremos como pone <1 empty item> dónde antes estaba el elemento
console.log(ingredientes);
```

### Eliminando posiciones

Si queremos eliminar uno o varios elementos, utilizaremos `splice`.

Esto realmente **eliminará** las posiciones indicadas.

> IMPORTANTE: Esto devuelve los elementos ELIMINADOS, asi que no reasignar sobre el array correcto

```js
// Eliminamos el azucar, recuerda no hacer ingredientes = ingredientes.splice(indiceIngrediente, 1); 
// o perderás todo salvo lo que quieres borrar
let ingredientesEliminados = ingredientes.splice(indiceIngrediente, 1);

console.log('Ingredientes eliminados:', ingredientesEliminados);
console.log('Ingredientes finales:', ingredientes);
``` 


### Operaciones sobre vectores

Recordemos que los vectores no son más que un conjunto de variables, lo que significa que podemos hacer operaciones con sus elementos, tanto `aritméticas` (con números) como de cadenas (strings) como `concatenar`.

```js
let dosPrimerosIngredientes = ingredientes[0] + '  ' + ingredientes[1];
console.log('Los dos primeros ingredientes son: ' + dosPrimerosIngredientes);
```

### Transformando en Cadena y en Vector

Por ejemplo, podemos convertir todos los elementos a un string o convertir un string a un array.

```js
// Convertimos el listado a un String, siendo ',' el elemento de unión (join).
let stringIngredientes = ingredientes.join(',');
console.log('Ingredientes en string:', stringIngredientes);
console.log('Ingredientes DESDE string:', stringIngredientes.split(','));
```

Más adelante veremos como recorrer vectores para que sean realmente útiles.