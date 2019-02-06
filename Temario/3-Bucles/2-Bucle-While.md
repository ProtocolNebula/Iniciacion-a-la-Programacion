# Bucles - While (mientras)

## Introducción

El bucle `while` (`mientras`) es el más genérico de todos, nos permite poner un condicional personalizado.

Este bucle recibirá un `condicional` (un if de tantos parámetros como queramos) y se ejecutará mientras la evaluación de ese condicional de `true`.

Tenemos que entender que, cada vez que el `contenido` del bucle termina (cada `iteración`), vuelve a `evaluarse el condicional`, con lo cual podemos controlar en todo momento el estado.

> Tenemos el contrario `until` que se aplica mientras el total de la operación de `false`.

## Estructura del while básica (script)

```js
// mientras (se cumple condicion) {
while (true) { // El bucle de nunca acabar
    // Haz algo

    // TIP: Podemos forzar la salida del bucle con "break"
    // Esto es algo de lo que no se debe abusar, pero puede optimizar mucho el código
    // Se puede poner dentro de un condicional (el bucle puede tener otros bucles, condicionales...)
    break;
}
```

---------------------------------

## Ejemplo

Vamos a volver al ejemplo de la cocina, vamos a cocinar `todos los huevos` con un `while`.

### Diagrama de flujo

[PENDIENTE]

---------------------------------

### Script

Descargaremos el archivo [While](/Ejemplos/3-Bucles/2-While/2-While.js) y lo ejecutaremos:

```bash
node 2-While.js
```

Si observamos la estructura del `while`, hemos pusto la condición que hemos puesto como si fuera un `if` normal y corriente, con la diferencia de que si el resultado es `true`, volverá a llamarse.

> Antiguamente se utilizaba la instrucción `GOTO`.