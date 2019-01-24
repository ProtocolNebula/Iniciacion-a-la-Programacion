let interruptorEncendido = 1;
let intensidadInterruptor = 100; // Podemos tener la intensidad del 1 al 100

// Comprobamos si está apagado
if (!interruptorEncendido || intensidadInterruptor < 1) {
    // Si está apagado o la intensidad es menor de 1 (como si estuviera apagado)
    console.log('Interruptor apagado');
} else if (intensidadInterruptor > 60) {
    // Primero comprobaremos si es > 60
    console.log('El interruptor emite mucha luz');
} else if (intensidadInterruptor > 40) {
    // Si no es > 60, puede ser > 40? El equivalente sería:
    // if (intensidadInterruptor > 40 && intensidadInterruptor <= 60)
    console.log('El interruptor emite la luz justa');
} else {
    // Tampoco es > 40, por tanto debe ser <= 40
    console.log('El interruptor emite poca luz');    
}