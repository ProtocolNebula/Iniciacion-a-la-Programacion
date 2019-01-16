# Operadores Relacionales


## Introducción

Los `Operadores Relacionales` son los que nos permiten comparar un elemento A con un elemento B.

Podríamos comprar por ejemplo si la `variable a` es `mayor` que la `variable b`.

Al final un operador es una `operación` (al igual que una suma o una resta) que devuelven un booleano (`0` o `1`).

> Podemos imprimir por consola el resultado de una operación `realacional` o `lógica`.


## Listado de Operadores Relacionales

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


## Ejemplos

### Comparadores de igualdad

Descargaremos el archivo [Operadores Relacionales de Igualdad](/Ejemplos/2-Condicionales/2.1-Operadores-Relacionales-Igualdad.js) y lo ejecutaremos:

```bash
node 2.1-Operadores-Relacionales-Igualdad.js
```

> Un string también se puede comparar con `>` y `<`, al hacerlo estaremos comparando por orden `Alfabético` de cada letra.


### Comparadores de mayor/menor

Volvamos a la cocina, vamos a comprobar si tenemos suficientes huevos para hacer la receta,
sino los tenemos añadiremos justo la cantidad que necesitamos.

Descargaremos el archivo [Operadores Relacionales Mayor y Menor](/Ejemplos/2-Condicionales/2.2-Operadores-Relacionales-Mayor-Menor.js) y lo ejecutaremos:

```bash
node 2.2-Operadores-Relacionales-Mayor-Menor.js
```


# Anexos
https://www.ecured.cu/Operadores_l%C3%B3gicos

http://www.sc.ehu.es/sbweb/fisica/cursoJava/fundamentos/introduccion/operadores1.htm