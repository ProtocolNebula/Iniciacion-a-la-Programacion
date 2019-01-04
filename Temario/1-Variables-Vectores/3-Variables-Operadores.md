# Variables - Operadores

## Preparación del entorno

Utilizamos el archivo generado en [Inicialización de variables](/Ejemplos/1-Variables-Vectores/2-Inicializacion/).

## Introducción

Aparte de especificar un número, podemos manipular este utilizando `operaciones aritméticas` (suma, resta, multiplicación, división...).


## Scripting

### Añadiendo huevos
--------------------

Añadimos el siguiente código que nos sumará 5 huevos justo después del mensaje que `nos informa que tenemos 0 huevos`.

```js
huevos = huevos + 5;
console.log('Ahora tenemos ' + huevos + ' huevos.');
```

> En el ejemplo, estamos leyendo `huevos`, le `sumamos 5` y luego volvemos a `asignarlo` a `huevos`.
Esto significa que internamente `crea una variable temporal` dónde realiza la suma y luego `reemplaza` nuestra variable.

Si ejecutamos el código observaremos que por pantalla sale:
```
Ahora tenemos 5 huevos.
```

> Podemos escribir `huevos += 5` y obtendremos el mismo resultado, de hecho, a partir de ahora se utilizarán ambos métodos de forma aleatoria para ver que no hay diferencia.

### Gastando huevos
--------------------

De la misma forma que hemos sumado, justo después de `echar un huevo en la sartén` gastaremos un huevo:

```js
huevos -= 1; // huevos = huevos -1
console.log('Hemos gastado 1 huevo, nos quedan ' + huevos + ' huevos.');
```

> Cuándo solo incrementemos o decrementemos en `1`, podemos escribir `++` o `--` antes o después de la variable. **EJ:** `huevos++;` o `huevos--;`
