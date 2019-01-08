# Variables de Ámbito local

## IMPORTANTE

Las variables de `ámbito local` son `exclusivas` de JavaScript (2014), en el resto de lenguajes podemos encontrarnos que:
- Todas las variables son "globales"
- Todas las variables son de ámbito local

> Generalmente dentro de `funciones` (lo veremos en unos temas) TODAS las variables son de `ámbito local` (normalmente genera un nuevo ámbito global que sólo se aplica a la función).

> A pesar de esto, utilizaremos `ámbito local` (let) de forma normal.

## Introducción

En la programación común nos encontramos que podemos tener bloques, como `condicionales` y `bucles`.

Las variables que hemos visto hasta ahora declaradas con `var` se pueden utilizar en *cualquier momento* desde que se declaran.

Podemos identificar los bloques porque es un código encerrado entre `llaves` **{ `codigo aqui` }** y, si el código es limpio, está `tabulado` respecto al `padre`.

Podemos tener tantos niveles como queramos de bloques, pero si definimos las variables con `let` sólo podremos acceder a esa variable en el `bloque que se delcara` y `sus hijos`.

## Scripting

Descargaremos el archivo [Operadores de Variables](/Ejemplos/1-Variables-Vectores/5-Variables-Ambito-Local.js) y lo ejecutaremos:

```bash
node 5-Variables-Ambito-Local.js
```

Si prestamos atención al código veremos como no es posible acceder a las variables definidas dentro del bloque con `let` una vez salimos de éste.