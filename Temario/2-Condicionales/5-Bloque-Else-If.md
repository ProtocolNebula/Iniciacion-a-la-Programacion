# Bloque Else If

## Introducción

Imaginemos que tenemos un `if` y que **si no se cumple** (`else`) debemos comprobarlo con `otro if`.

### Ejemplo:

```js
// Tenemos un interruptor con intensidades de luz, puede estar apgado o encendido con diferentes intensidades
let interruptorEncendido = 1;
let intensidadInterruptor = 1; // Podemos tener la intensidad del 1 al 100

// Comprobamos si está apagado
if (!interruptorEncendido || intensidadInterruptor < 1) {
    // Si está apagado o la intensidad es menor de 1 (como si estuviera apagado)
    console.log('Interruptor apagado');
} else {
    // Si está encendido y además la intensidad es mayor de 60
    if (intensidadInterruptor > 60) {
        console.log('El interruptor emite mucha luz');
    } else {
        // Si es menor O IGUAL a 60, comprobaremos la intensidad de nuevo
        if (intensidadInterruptor < 40) {
            // Intensidad menor de 40
            console.log('El interruptor emite poca luz');
        } else {
            // En este caso, estamos entre >= 40 y <= 60
            console.log('El interruptor emite la luz justa');
        }
    }
}
```

Como podemos observar, para una sencilla comprobación el código se ha hecho excesivamente complicado de seguir, incluso con comentarios.

Pero existe una solución: Darle una condición al else.

> Si le damos una condicion al `else` (`else if`) podremos seguir capturando el `else` si no **concide con ninguno**.


### Ejemplo con Else If

**IMPORTANTE:** Una vez se ejecute cualquier `if`, el resto de condicionales serán *ignorados* aunque coincidan, por lo tanto es importante que las condiciones esten en **orden**. En el próximo tema veremos un caso de esto, ahora sólo `refactorizaremos` el ejemplo anterior.

**RECORDAD:** El código se ejecuta en el mismo órden que está escrito.

Descargaremos el archivo [Bloque Else If](/Ejemplos/2-Condicionales/5-Bloque-Else-If.js) y lo ejecutaremos:

```bash
node 5-Bloque-Else-If.js
```

> Si nos fijamos bien, lo único que hemos hecho ha sido extraer del `else` y moverlo un nivel arriba los `if` anidados.

**ESTO NO SIEMPRE ES LA SOLUCIÓN**: Puede darse el caso de que realmente **necesitemos** un else y dentro añadir los IF, en caso de que alguno de los condicionales tenga *varias posibilidades*. No os proecupéis, esos casos son fáciles de detectar y se acaban refactorizando (moviendo el código) de forma intuitiva.
