// Generamos dos variables, una global (var) y una de bloque (let)
// Como estamos en el ámbito global, podremos acceder siempre
var variableGlobal1 = 'Contenido variableGlobal1'; // Acceisble en cualquier lado
let variableLocal1 = 'Contenido variableLocal1'; // Accesible a todos los "hijos" de este ámbito

// Mostramos como podemos acceder a ambas
console.group('Variables 1 - ambito global');
console.log('Var: ' + variableGlobal1);
console.log('Let: ' + variableLocal1);
console.log();
console.groupEnd();

// Bloque cualquiera (1r nivel), no es común ver un bloque de este estilo, generalmente son bloques de condicionales, bucles, funciones...
// if (cualquierCosa) // <-- esto sería lo común, lo veremos en el próximo temario "Condiciones"
{
    // Comprobamos que podemos acceder todavía a las variables globales
    console.group('Variables 1 - dentro de bloque');
    console.log('Var: ' + variableGlobal1);
    console.log('Let: ' + variableLocal1); // Podemos acceder a la variable creada con "let" porque es un bloque "hijo"
    console.log();
    console.groupEnd();

    // Creamos dos variables nuevas
    var variableGlobal2 = 'Contenido variableGlobal1'; // Accesible desde cualquier lado (a partir de ahora)
    let variableLocal2 = 'Contenido variableLocal1'; // Accesible solo en este bloque y bloques hijos

    // Comprobamos que podemos ver las nuevas variables
    console.group('Variables 2 - dentro de bloque');
    console.log('Var: ' + variableGlobal2);
    console.log('Let: ' + variableLocal2);
    console.log();
    console.groupEnd();

    // if (...) {} // Bloque hijo
}

// Comprobamos las variables creadas dentro del ámbito de bloque
console.group('Variables 2 - fuera de bloque');
console.log(variableGlobal2); // Esta funcionará, es global
console.log(variableLocal2); // Esta dará un error que hará que se pare la áplicación porque no existe
console.log();
console.groupEnd();