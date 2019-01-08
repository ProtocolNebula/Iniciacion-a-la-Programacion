# Variables de Ámbito local

## Preparación del entorno

Utilizamos el archivo generado en [Operadores de Variables](/Ejemplos/1-Variables-Vectores/5-Variables-Ambito-Local.js).

## Introducción

Como se ha comentado, las variables pueden contener `textos`, vamos a crear una variable que contendrá el `nombre del cocinero`.

## Scripting

### Iniciamos la variable
--------------------

Al principio del código (encima de `huevos`), iniciaremos la variable: 

```js
// Instanciamos el nombre del cocinero
var nombreCocinero;
```

> Como podemos observar, no se ha asignado ningún nombre todavía, si ahora hacemos un `console.log(nombreCocinero)` veremos que la variable está en estado `undefined`.


### Asignando un nombre
--------------------

> No hay problema en `instanciar` la variable `con valor` (`var nombreCocinero = 'Nombre'`);

Vamos a asignar un nombre (por ahora asignado manualmente en el código), añadimos justo después del fragmento anterior:

```js
// Asignamos un cocinero
nombreCocinero = 'Rubén';

// Le damos la bienvenida
console.log('¡Bienvenido de nuevo a la cocina ' + nombreCocinero + '!');
console.log('Espero que no salga en llamas la cocina, otra vez.');

```

> Los textos deben ir entre comillas `simples` o `dobles`, al igual que lo hacíamos en el `console.log`.

Si ejecutamos el script `node index.js` podemos ver el nombre del cocinero.


> Para las `variables que no cambian` se utilizan `constantes`, generalmente no se utiliza (por ahora) `JavaScript` por temas de compatibilidad.

> Las constantes se escriben (por estándar, no es obligatorio) en `mayúsculas` separadas por `barras bajas`. *EJ:* `const NOMBRE_COCINERO`
