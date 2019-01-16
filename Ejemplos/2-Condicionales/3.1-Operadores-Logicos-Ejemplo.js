let var1 = 1;
let var2 = 2;

// EJEMPLO DE ANIDACIÓN DE IF
// UTILIZAR ÚNICAMENTE SI REALMENTE REDUCE LA DIFICULTAD DE COMPRENSIÓN Y CÓDIGO

// ES MUY COMÚN ENCONTRAR ANIDACIONES ERRÓNEAS.
if (var1 === 1) {
    if (var2 === 2) {
        console.log('La variable 1 es 1 y la 2 es 2');
    }
    
    // Sería correcto si ahora hicieramos algo como
    // if (var2 === 3) {
    //    console.log('La variable 1 es 1 pero la 2 es 3.');
    // }
}

// EJEMPLO SIN ANIDACIÓN (en la que no necesitamos var2 === 3)
if (var1 === 1 && var2 === 2) {
    console.log('La variable 1 es 1 y 2 es 2');
}
