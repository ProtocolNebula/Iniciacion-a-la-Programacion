let nombreCocinero = 'Rubén';
const huevosACocinar = 4; // Cantidad de huevos a cocinar

console.log(nombreCocinero);
console.log('¡Bienvenido de nuevo ' + nombreCocinero + '!');

// Hacemos un grupo de logs, nos permitirá diferenciar
// más rápidamente los logs cuándo tenemos muchos mensajes
console.group('Preparando ingredientes');
var huevos = 1;
console.log('Actualmente tienes ' + huevos + ' huevos.');

// Nos aseguramos de comprar huevos si nos faltan (con un for)
// Nótese como el primer parámetro queda vacío porque ya lo tenemos instanciado (sería 'huevos')
// for (let n = 0; n <= huevosACocinar; n++) { // sumara siempre huevosACocinar (huevos += huevosACocinar)

// while (huevos < huevosACocinar) { // <-- con while
for (; huevos <= huevosACocinar; huevos++) {
    // huevos++; // <-- con while
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
// while (faltanCocinar > 0 && huevos > 0) {
for (let faltanCocinar = huevosACocinar; faltanCocinar > 0; faltanCocinar--) {
    // con el nuevo let evitamos decrementar la variable original
    console.group('Cocinando huevo, restantes: ', faltanCocinar);
    console.log('Echamos aceite.');
    console.log('Echamos el huevo.')
    huevos--; // Nos restamos un huevo del total que tenemos
    // faltanCocinar--; // YA NO HACE FALTA!
    console.log('Esperando a que esté cocinado.');
    console.log('Sacando el huevo de la sartén.');
    console.groupEnd();

    if (huevos < 1) {
        console.log('¡Nos hemos quedado sin huevos antes de terminar!');
        break; // Forzamos la salida
    }
}
console.groupEnd();

console.group('Terminando de cocinar');
console.log('Recogiendo cocina...');
console.log('Te quedan ' + huevos + ' huevo/s.');
console.groupEnd();

console.log('Disfruta de la comida!');