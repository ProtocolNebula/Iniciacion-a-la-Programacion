let sal = 'Sal';
let ingredientes = [
    'Huevos',
    sal
];

console.log('Total ingredientes al comenzar:', ingredientes.length);
console.log();

console.log('Ingrediente 0' + ingredientes[0]);
console.log();

console.log('Añadiendo ingredientes');
ingredientes.push('Pimienta', 'Comino');
console.log('Ingredientes: ',ingredientes);

console.log();
let indexIngrediente = ingredientes.indexOf(sal);
console.log('Indice de Sal:', indexIngrediente);
console.log(ingredientes[indexIngrediente]);

console.log();
console.log('Eliminando sal con DELETE (quedara el hueco vacio)');
delete ingredientes[indexIngrediente];
console.log(ingredientes);

console.log('Eliminando sal con SPLICE (redimensiona el array)');
// Eliminamos el elemento encontrado.
// IMPORTANTE: Lo que DEVUELVE son los ELEMENTOS ELIMINADOS, no los nuevos elementos.
// ingredientes.splice(indexIngrediente, 1); // <-- Por tanto esto haría exactamente lo mismo
let ingredientesEliminados = ingredientes.splice(indexIngrediente, 1);
console.log('Se han eliminado:' , ingredientesEliminados);
console.log('Quedan:', ingredientes);