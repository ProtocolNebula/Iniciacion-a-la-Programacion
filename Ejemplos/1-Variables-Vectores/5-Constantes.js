// Recordemos que las constantes funcionan en ámbito local
const MI_CONSTANTE_1 = 'Contenido constante 1'; // Accesible a todos los "hijos" de este ámbito

// Mostramos como podemos acceder a ambas
console.log('Valor constante 1 - ambito global: ' + MI_CONSTANTE_1);

console.log('Intentamos reemplazar la constante.');
// Más adelante estudiaremos el bloque try-catch, por ahora sólo lo utilizamos para poder probra todo el script sin que se pare
try {
    MI_CONSTANTE_1 = 'Otra cosa'; // Si intentamos hacer esto también dará un error
} catch (ex) {
    console.error(ex);
}
console.log('Valor constante 1 - después de intentar modificar: ' + MI_CONSTANTE_1);
console.log();

// Bloque cualquiera...
// if (true)
{
    // Comprobamos que podemos acceder todavía a la constante
    console.log('Valor constante 1 - dentro de bloque: ' + MI_CONSTANTE_1);

    // Creamos una constante de bloque
    const MI_CONSTANTE_2 = 'Contenido constante 2'; // Accesible a todos los "hijos" de este ámbito

    // Comprobamos que podemos ver la nueva constante
    console.log('Valor constante 2 - dentro de bloque: ' + MI_CONSTANTE_2);
    console.log();

    // if (...) {} // Bloque hijo
}

// Comprobamos las variables creadas dentro del ámbito de bloque
console.log('Valor constante 1 - fuera otra vez: ' + MI_CONSTANTE_1);
console.log('Valor constante 2 - fuera de bloque: ' + MI_CONSTANTE_2);
