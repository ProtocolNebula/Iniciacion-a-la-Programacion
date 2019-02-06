# Bucles - For (para)

## Introducción

El bucle `for` (`para`) es una "capa" para `recorrer` o `iterar` elementos (vectores, números)...

Por ahora veremos la estructura más básica del `for`, que es `ir de un número al otro`.

El funcionamiento es igual que el `while` pero la capa extra nos añade:
- La variable de inicio
- La variable de fin
- El incrementador

Si observamos bien el `while` del ejemplo anterior, tenemos que `decrementar` o `incrementar` manualmente (dentro del bucle) la variable del condicional, en el `for`, el incremento forma parte de la estructura.

> Podemos manipular igualmente en cualquier momento cualquier parámetro del `for` desde dentro del propio bucle.


## Estructura del for básica (script)

```js
// de (declaraciones iniciales; mientras condicional; accion por cada iteración) {
for (let n = 1; n < 10; n++) { // 
    // Haz algo
    console.log('n actualmente es:', n);
    // Como hemos comentado, aqui podríamos incrementar o modificar cualquier parámetro (siempre y cuándo sean variables)
    n = n + 1; // Esto hará que recorra de 2 en 2
    console.log('n después de modificar es:', n);
    
    // TIP: También podemos forzar la salida del bucle con "break"
    break;
}

// El bucle anterior podríamos escribirlo así (para omitir n = n + 1 dentro del bucle):
for (let n = 1; n < 10; n += 2) {
    console.log('n actualmente es:', n);
}
```

La descomposición de nuevo sería:
- `let n = 1`: Especificamos/declaramos las variables iniciales en el estado QUE QUERAMOS (no tiene que ser 1)
- `n < 10`: Especificamos el `condicional` (mientras `n` sea menor de `10`).
- `n += 2`: Incrementamos `n` en `2` en `cada iteración`.


De esta forma demostramos que `for` es una capa de abstracción que nos permite mucha libertad.

---------------------------------

## Ejemplo

Modifiquemos el ejemplo de `While` de la cocina, esta vez usaremos `for` para que el código sea un poco más limpio.

De paso observaremos que podemos instanciar variables fuera del bucle.

### Diagrama de flujo

[PENDIENTE]

---------------------------------

### Script

Descargaremos el archivo [For](/Ejemplos/3-Bucles/3-For/3-For.js) y lo ejecutaremos:

```bash
node 3-For.js
```
