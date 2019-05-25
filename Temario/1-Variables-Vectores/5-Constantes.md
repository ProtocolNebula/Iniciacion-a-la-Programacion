# Constantes

## Introducción

Las constantes son bloques de memoria igual que las `variables` (*var* y *let*) pero que **no se pueden modificar** una vez declaradas.

> Las constantes se comportan como `variables de ámbito local`, es decir `let`.

Podemos definir una constante utilizando `const` seguido del nombre que queramos.

```js
const MI_CONSTANTE = 'Contenido de la constante';

console.log(MI_CONSTANTE);
```

> Es buena práctica utilizar `mayúsculas` y separar las palabras con `guiones bajos _`).

## Scripting
Descargaremos el archivo [Operadores de Variables](/Ejemplos/1-Variables-Vectores/5-Constantes.js) y lo ejecutaremos:

```bash
node 6-Constantes.js
```

Como podemos observar no se reemplazan las constantes ni se pueden leer en bloques padres del definido.

> El bloque try-catch sirve para capturar errores y evitar que el programa pete, lo veremos más adelante.