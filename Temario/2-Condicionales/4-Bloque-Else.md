# Bloque Else

## Introducción

El bloque `else` nos permite capturar el flujo `if` en caso de que no coincida con ninguna condición.

Nótese que al igual que `if` significa `si` (condicional), `else` signfica `sino` (en caso contrario).

## Ejemplos

#### Método SIN Else

```js
let interruptorEncendido = false;

// if (interruptorEncendido == true) { // <-- esto es lo mismo (nótese que son == no ===)
    // TIP: si no especificamos nada (=== true) le decimos al lenguaje que compruebe que sea algo.
    // Utilizar con cuidado en algunos casos

if (interruptorEncendido) {
    console.log('El interruptor está encendido');
}

if (!interruptorEncendido) {
    console.log('El interruptor está apagado');
}
```

> Como podemos observar hemos tenido que escribir el mismo condicional pero invertido.

En aplicaciones más complejas, normalmente tenemos condiciones más largas (y bloques `else if` que veremos en el próximo tema).

Por esto es importante entender `else`.


#### Ejemplo CON Else

Else no sólo permite reducir el código, sino que además lo hace más legible.

```js
if (interruptorEncendido) {
    console.log('El interruptor está encendido');
} else {
    console.log('El interruptor está apagado');
}
```
