# Condiciones Ternarias

## Introducción

Imaginemos un caso bastante común:

Tenemos una variable que debe tener un valor u otro (true/false, strings, números...) en función de una condición.

Para casos cortos (`if-else` de poca lingutd) podemos utilizar condiciones ternarias.


## Ejemplos

### Resultado condicional

Este es el caso más sencillo, en función de un valor una variable será `true` o `false` (esto lo vimos al principio de `Condicionales`).

```js
let edad = 18;
let esMayor;

// Es mayor de edad?

esMayor = edad > 18; // Nosotros lo vimos así para simular 
console.log('Es mayor? (con operacion simple)', esMayor);

// Con una operación tenaria.
esMayor = edad > 18 ? true : false;
console.log('Es mayor? (con ternaria)', esMayor);
```

El caso anterior no tiene mucho sentido por como se ha planteado, imaginemonos que queremos poner "Si" o "No" en función de si es true o false:

```js
let edad = 18;
let esMayor;

// Con una operación tenaria.
esMayor = edad > 18 ? 'Si' : 'No';
console.log('Es mayor? (con ternaria)', esMayor);
```

Como podemos observar, lo que hacemos es:
 - Preguntamos si es o no: `(edad > 18)?`. (Estamos preguntándole con `?`)
 - Si es `true` (`?`): Asignamos `Si`
 - Si es `false` (`:`): Asignamos `No`.


Dentro podemos hacer varias operaciones, simplemente las añadimos dentro de los paréntesis:

```js
let edad = 18;
let edadMinima = 21;

let puedeEntrar = (edad > 18 && edad > edadMinima) ? 'Puede entrar' : 'No puede entrar'
console.log('Puede entrar?', puedeEntrar);
```