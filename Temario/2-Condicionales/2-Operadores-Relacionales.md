# Operadores Relacionales


## Introducción

Los `Operadores Relacionales` son los que nos permiten comparar un elemento A con un elemento B.

Podríamos comprar por ejemplo si la `variable a` es `mayor` que la `variable b`.

Al final un operador es una `operación` (al igual que una suma o una resta) que devuelven un booleano (`0` o `1`).

> Podemos imprimir por consola el resultado de una operación `realacional` o `lógica`.


## Listado de operadores Relacionales

Los operadores más comunes (y que más vamos a utilizar) son:

| Operador | nombre               | ejemplo | significado                 |
|:--------:|----------------------|:-------:|-----------------------------|
| <        | menor que            | a<b     | a es menor que b            |
| >        | mayor que            | a>b     | a es mayor que b            |
| ==       | igual a              | a==b    | a es igual a b              |
| !=       | no igual a           | a!=b    | a no es igual a b           |
| <=       | menor que o igual a  | a<=5    | a es menor que o igual a b  |
| >=       | mayor que o igual a  | a>=b    | a es menor que o igual a b  |
---------------------------------------------------------------------------

> Para conocer todos los operadores, revisar los enlaces del `Anexo` al final del documento.

### Variaciones en otros lenguajes

Como de cosutmbre, podemos encontrarnos variaciones dependiendo del lenguaje, veamos dos ejemplos:


#### Diferencias en Visual Basic

Utilizamos `=` en lugar de `==` y `<>` en lugar de `!=`.

| Operador Orignial | Nuevo Operador |
|:-----------------:|:--------------:|
| ==                | =              |
| !=                | <>             |
--------------------------------------


#### Diferencias en JavaScript y PHP

En algunos lenguajes como `JavaScript` y `PHP`, añadimos un `=` extra a `==` y a `!=`,
resultando `===` y `!==` para comparar tanto el `Contenido` como el `Tipo` de una `Variable`.

- **===**: El `TIPO` y el `VALOR` son `IDENTICOS`.
- **!==**: El `TIPO` y/o el `VALOR` son `DIFERENTES`.

> Por la naturaleza de éstos lenguajes, los comparadores `===` y `!==` son **más rápidos** dado
que solo realizan la comparación si el `tipo` coincide, en caso contrario tiene que `convertir la información` a un `tipo común` (por ejemplo `string`)


### Invertir Respuesta

Como hemos comentado, evaluar una condición al final es comprobar si un `boolean` es `true` o `false` (el resultado de realizar la operación).

Si añadimos `!` delante de la operación, el resultado se invertirá.

```js
var resultadOperacion = true; // Supongamos que esto es (5 > 1)

if (resultadoOperacion) {
    console.log('El resultado es TRUE');
}
if (!resultadoOperacion) {
    console.log('El resultado con ! es FALSE, por eso no veremos el contenido');
}
```


## Ejemplos

### Comparadores de igualdad

```js
var idioma = 'Español';

// Se mostrará si SE HABLA ESPAÑOL
if (idioma === 'Español') {
    console.log('¡Bienvenido!');
}

// Se mostrará si NO SE HABLA ESPAÑOL
if (idioma !== 'Español') {
    console.log('Veo que no hablas español...');
}

// Se mostrará si SE HABLA INGLÉS
if (idioma === 'English') {
    console.log('Welcome!');
}

// Demostramos como podemos mostrar por pantalla el resultado de la "operación"
console.log('El idioma es español?', idioma === 'Español');

// También podríamos haberlo guardado en una booleana
var esEspanol = idioma === 'Español';
console.log('Comprobamos si es español desde variable', esEspanol);
```

> Un string también se puede comparar con `>` y `<`, al hacerlo estaremos comparando por orden `Alfabético` de cada letra.


### Comparadores de mayor/menor

Volvamos a la cocina, vamos a comprobar si tenemos suficientes huevos para hacer la receta,
sino los tenemos añadiremos justo la cantidad que necesitamos.

```js
var huevos = 3;
var huevosNecesarios = 6;

// IMPORTANTE: si utilizamos >= veremos un mensaje que pondrá "hemos comprado 0 huevos", lo veremos en el próximo ejemplo
if (huevosNecesarios > huevos) {
    console.log('¡No tenemos suficientes huevos!');
    let huevosFaltantes = huevosNecesarios - huevos;
    huevos += huevosFaltantes;
    console.log('Hemos comprado', huevosFaltantes, 'huevos.');
}

// Si aqui solo ponemos ">" y comenzamos con 3 huevos, no veríamos el mensaje.
if (huevos >= huevosNecesarios) {
    console.log('Tienes', huevos, 'huevos de los', huevosNecesarios, 'necesarios');
}

// Como podemos observar aquí (igual que el primer condicional)
if (huevos > huevosNecesarios) {
    console.log('¡Tienes más huevos de los necesarios!');
}
if (huevosNecesarios < huevos) {
    console.log('Hemos comparado con `<` que tienes suficientes huevos.');
}
```

# Anexos
https://www.ecured.cu/Operadores_l%C3%B3gicos

http://www.sc.ehu.es/sbweb/fisica/cursoJava/fundamentos/introduccion/operadores1.htm