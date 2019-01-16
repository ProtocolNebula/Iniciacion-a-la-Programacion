var huevos = 3;
var huevosNecesarios = 6;

// Comprobamos si ya tenemos suficientes huevos
if (huevos >= huevosNecesarios) {
// if (huevosNecesarios <= huevos) { // También válido
    console.log('Tienes suficientes huevos');
}

// Si no hay suficientes huevos los añadiremos
// IMPORTANTE: si utilizamos >= veremos un mensaje que pondrá "hemos comprado 0 huevos", lo veremos en el próximo ejemplo
if (huevosNecesarios > huevos) {
    console.log('¡No tenemos suficientes huevos!');
    let huevosFaltantes = huevosNecesarios - huevos;
    huevos += huevosFaltantes;
    console.log('Hemos comprado', huevosFaltantes, 'huevos.');
}

// Confirmamos que tenemos suficientes huevos y mostramos cuántos
// Si aqui solo ponemos ">" y comenzamos con 3 huevos, no veríamos el mensaje.
if (huevos >= huevosNecesarios) {
    console.log('Tienes', huevos, 'huevos de los', huevosNecesarios, 'necesarios');
}

// ¿Tenemos MÁS de los que se piden?
if (huevos > huevosNecesarios) {
// if (huevosNecesarios < huevos) { // También válido
    console.log('¡Tienes más huevos de los necesarios!');
}
