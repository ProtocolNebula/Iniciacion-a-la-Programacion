// Tenemos un interruptor con intensidades de luz, puede estar apgado o encendido con diferentes intensidades
let interruptorEncendido = 1;
let intensidadInterruptor = 1; // Podemos tener la intensidad del 1 al 100

// Comprobamos si está apagado
if (!interruptorEncendido || intensidadInterruptor < 1) {
    // Si está apagado o la intensidad es menor de 1 (como si estuviera apagado)
    console.log('Interruptor apagado');
} else if (intensidadInterruptor > 60) {
    // Si está encendido y además la intensidad es mayor de 60
        console.log('El interruptor emite mucha luz');
} else if (intensidadInterruptor < 40) {
    // Intensidad menor de 40
    console.log('El interruptor emite poca luz');
} else {
    // En este caso, estamos entre >= 40 y <= 60
    console.log('El interruptor emite la luz justa');
}
