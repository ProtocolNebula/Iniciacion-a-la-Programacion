let nombreCocinero = 'Rubén';
let huevosACocinar = 4; // Cantidad de huevos a cocinar

console.log(nombreCocinero);
console.log('¡Bienvenido de nuevo ' + nombreCocinero + '!');

// Hacemos un grupo de logs, nos permitirá diferenciar
// más rápidamente los logs cuándo tenemos muchos mensajes
console.group('Preparando ingredientes');
var huevos = 1;
console.log('Actualmente tienes ' + huevos + ' huevos.');

// Nos aseguramos de comprar huevos (con un while)
// Entraremos en el bucle MIENTRAS "huevos" sea MENOR de lo que queremos cocinar
while (huevos <= huevosACocinar) {
    huevos++;
    console.log('Añadido un huevo. Total: ' + huevos + ' huevos.');
}

// Cerramos el grupo
console.groupEnd();


console.group('Preparamos la cocina');
console.log('Preparando sartén.');
console.log('Encendiendo el fuego.');
console.groupEnd();

console.group('Cocinando...');
// Comenzamos a cocinar, en este ejemplo cocinaremos
let faltanCocinar = huevosACocinar;
// huevos > 0 en este caso es redundante,
// pero nos sirve para ejemplificar multiples parámetros
// En un ejemplo futuro nos será útil
while (faltanCocinar > 0 && huevos > 0) {
    console.group('Cocinando huevo, restantes: ', faltanCocinar);
    console.log('Echamos aceite.');
    console.log('Echamos el huevo.')
    huevos--; // Nos restamos un huevo del total que tenemos
    faltanCocinar--; // Calculamos cuantos huevos faltan por cocinar
    console.log('Esperando a que esté cocinado.');
    console.log('Sacando el huevo de la sartén.');
    console.groupEnd();
}
console.groupEnd();

console.group('Terminando de cocinar');
console.log('Recogiendo cocina...');
console.log('Te quedan ' + huevos + ' huevo/s.');
console.groupEnd();

console.log('Disfruta de la comida!');