# Operadores Lógicos

## Introducción

Normalmente, al realizar `operaciones condicionales` debemos comparar varios factores, una posible solución sería anidar if.

Estos operadores sirven para comparar DOS resultados de operaciones por cada OPERADOR, siempre es `A` y `B` por cada lado.

Es decir, podemos comparar A && B && C.

En realidad estamos comparando de la siguiente forma: `A AND B = 1`, `0 AND C = 1` (hacemos el primer AND y posterior el siguiente AND).

> El Operador de Negación sólo opera sobre UN elemento (un resultado), podríamos considerarlo la excepción.

## Listado de Operadores Lógicos

| Operador | Nombre   | Acción que realiza                               |
|:--------:|----------|--------------------------------------------------|
| `&&`     | AND (Y)  | Comprueba que 2 operaciones sean `TRUE` (verdad) |
| `||`     | OR (O)   | CUALQUIERA de 2 operaciones sean `TRUE` (verdad) |
| `!`      | NOT (NO) | Invierte el resultado de la operación            |
--------------------------------------------------------------------------

> Internamente se hace una comparación bit a bit del binario real, para más información mirar los anexos o buscar en internet, explicar esto se sale de la parte de "iniciación".

### Tabla de la verdad

Dado que solo comparamos hasta dos lados, podemos generar la denominada `Tabla de la Verdad` (al final, estamos trabajando con `true` y `false`).

#### Tabla de la verdad sobre AND (&&)

| A         | AND |  B         | RESULTADO |
|-----------|-----| -----------|-----------|
| TRUE  `1` | AND |  TRUE  `1` | TRUE  `1` |
| TRUE  `1` | AND |  FALSE `0` | FALSE `0` |
| FALSE `0` | AND |  TRUE  `1` | FALSE `0` |
| FALSE `0` | AND |  FALSE `0` | FALSE `0` |
--------------------------------------------

#### Tabla de la verdad sobre OR (||)

| A         | OR |  B         | RESULTADO |
|-----------|----| -----------|-----------|
| TRUE  `1` | OR |  TRUE  `1` | TRUE  `1` |
| TRUE  `1` | OR |  FALSE `0` | TRUE  `1` |
| FALSE `0` | OR |  TRUE  `1` | TRUE  `1` |
| FALSE `0` | OR |  FALSE `0` | FALSE `0` |
--------------------------------------------

#### Tabla de la verdad sobre NOT (!)

| NOT |  A         | RESULTADO |
|-----| -----------|-----------|
| NOT |  TRUE  `1` | FALSE `0` |
| NOT |  FALSE `0` | TRUE  `1` |
--------------------------------


### Variaciones entre lenguajes

En algunos lenguajes podemos encontrarnos que los operadores `se escriben diferente` o que hay algunos extra.

#### JavaScript

Únicamente soporta los símbolos (`&&` y `||`, `!`).

#### PHP

Soporta tanto los símbolos  (`&&` y `||`, `!`) como texto (`AND`, `OR` y `NOT`)


## Órden de lectura

Al igual que con las operaciones matemáticas (prioridades según el símbolo y paréntesis), en la gran mayoría de lenguajes primero se resuelven los `AND` y luego los `OR`.

```js
let var1 = 1,
    var2 = 2,
    var3 = 4; // Nótese que esta es 4

if (var1 == 1 && var2 == 2 || var3 == 3) {}

// Sería como
if ((var1 == 1 && var2 == 2) || var3 == 3) {}

// DESTRUCTURACIÓN
if (true || false) {}
// true || false = true

if (true) {}
```

O por ejemplo:

```js
// Resolvemos el contenido del paréntesis y luego comparamos.
if (var1 == 1 && (var2 == 2 || var3 == 3)) {}

// DESTRUCTURACIÓN:
if (var1 == 1 && true) {}
// true && true = true

if (true) {}
```


## Ejemplos de scripts

### Limpiando un condicional que no tiene operadores lógicos

```js
let var1 = 1;
let var2 = 2;

// EJEMPLO DE ANIDACIÓN DE IF
// UTILIZAR ÚNICAMENTE SI REALMENTE REDUCE LA DIFICULTAD DE COMPRENSIÓN Y CÓDIGO

// ES MUY COMÚN ENCONTRAR ANIDACIONES ERRÓNEAS.
if (var1 === 1) {
    if (var2 === 2) {
        console.log('La variable 1 es 1 y la 2 es 2');
    }
    
    // Sería correcto si ahora hicieramos algo como
    // if (var2 === 3) {
    //    console.log('La variable 1 es 1 pero la 2 es 3.');
    // }
}

// EJEMPLO SIN ANIDACIÓN (en la que no necesitamos var2 === 3)
if (var1 === 1 && var2 === 2) {
    console.log('La variable 1 es 1 y 2 es 2');
}
``` 

> Como podemos observar, el hecho de utilizar && nos ahorra algunas líneas de código y en algunos casos nos permtie escribir condicionales más limpios.


### Negación Lógica

Como hemos comentado, evaluar una condición al final es comprobar si un `boolean` es `true` o `false` (el resultado de realizar la operación).

Si añadimos `!` delante de la operación, el resultado se invertirá.

```js
var resultadOperacion = true; // Supongamos que esto es (5 > 1)

console.log('resutlado operación:', resultadoOperacion); // Mostrará true
console.log('! resutlado operación:', !resultadoOperacion); // Mostrará lo contrario de true (false)

if (resultadoOperacion) {
    console.log('El resultado es TRUE');
}
if (!resultadoOperacion) {
// if (!(resultadoOperacion)) { // Equivalente en órden de lectura (prioridad)
    console.log('El resultado con ! es FALSE, por eso no veremos el contenido');
}
```

