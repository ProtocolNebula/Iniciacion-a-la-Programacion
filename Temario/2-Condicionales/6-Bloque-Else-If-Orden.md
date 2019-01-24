# Bloque Else If - Orden (prioridades)

## Introducción

Como comentábamos en el temario anterior, una vez se ejecuta un `if` o `else if`,
el resto de bloques es `saltado` (ignorado).

---

## Ejemplo

Volvamos al caso del interruptor.

Vamos a comprobar la intensidad pero únicamente usando `>` (en el anterior usábamos también `<`).


```js
let interruptorEncendido = 1;
let intensidadInterruptor = 100; // Podemos tener la intensidad del 1 al 100

// Comprobamos si está apagado
if (!interruptorEncendido || intensidadInterruptor < 1) {
    // Si está apagado o la intensidad es menor de 1 (como si estuviera apagado)
    console.log('Interruptor apagado');
} else if (intensidadInterruptor > 40) {
    // Si está encendido y además la intensidad es mayor de 40
    console.log('El interruptor emite la luz justa');
} else if (intensidadInterruptor > 60) {
    // ESTO NUNCA PASARÁ
    // Si está encendido y además la intensidad es mayor de 60
    console.log('El interruptor emite mucha luz');
} else {
    // RESTO, este SI PUEDE PASAR (por como tenemos puestas las condiciones)
    // En este caso, estamos <= 40
    console.log('El interruptor emite poca luz');    
}
```

> Si ejecutamos el ejemplo, veremos como **nunca** entrará en `> 60` dado que **primero** se ejecuta `> 40`.

Esto demuestra que:
 - El código se ejecuta **en orden**
 - Una vez entra en un condicional, **sale** del bloque entero.

---

## Solventando el problema

> Al final todo se trata de tener el código ordenado y legible.

Descargaremos el archivo [Bloque Else If - Orden](/Ejemplos/2-Condicionales/6-Bloque-Else-If-Orden.js) y lo ejecutaremos:

```bash
node 6-Bloque-Else-If-Orden.js
```

Como podemos ver, ahora funciona y es **más legible**.
