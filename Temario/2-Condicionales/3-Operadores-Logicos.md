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
| `| |`    | OR (O)   | CUALQUIERA de 2 operaciones sean `TRUE` (verdad) |
| `!`      | NOT (NO) | Invierte el resultado de la operación            |
--------------------------------------------------------------------------

> `||` se escribe sin espacio, el espacio se ha añadido por el intérprete de `Markdown` utilizado en GitHub.

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
if ((true && true) || false) {} // Paso 1
if (true || false) {} // Paso 2, true || false = true
if (true) {} // Paso 3
```

O por ejemplo:

```js
// Resolvemos el contenido del paréntesis y luego comparamos.
if (var1 == 1 && (var2 == 2 || var3 == 3)) {}

// DESTRUCTURACIÓN:
if (true && (true || false)) {} // Paso 1
if (true && true) {} // Paso 2, true && true = true
if (true) {} // Paso 3
```


## Ejemplos de scripts

### Limpiando un condicional que no tiene operadores lógicos

Descargaremos el archivo [Operadores Lógicos (ejemplo)](/Ejemplos/2-Condicionales/3.1-Operadores-Logicos-Ejemplo.js) y lo ejecutaremos:

```bash
node 3.1-Operadores-Logicos-Ejemplo.js
```

> Como podemos observar, el hecho de utilizar `&&` nos ahorra algunas líneas de código y en algunos casos nos permtie escribir condicionales más limpios.


### Negación Lógica

Como hemos comentado, evaluar una condición al final es comprobar si un `boolean` es `true` o `false` (el resultado de realizar la operación).

Si añadimos `!` delante de la operación, el resultado se invertirá.

Descargaremos el archivo [Operadores Lógicos - Negación](/Ejemplos/2-Condicionales/3.2-Operadores-Logicos-Negacion.js) y lo ejecutaremos:

```bash
node 3.2-Operadores-Logicos-Negacion.js
```
