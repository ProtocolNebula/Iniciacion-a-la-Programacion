let sal = 'Sal';
let ingredientes = [
    'Huevos',
    sal
];

console.log(ingredientes.length);

ingredientes.push('Pimienta', 'Comino');
console.log('Ingredientes: ',ingredientes);

ingredientes = ingredientes.slice(0,3);
console.log('Ingredientes: ', ingredientes);
console.log('Ingrediente 0' + ingredientes[0]);

let indexIngrediente = ingredientes.indexOf(sal);
console.log('Indice sal:', indexIngrediente);
console.log(ingredientes[indexIngrediente]);

delete ingredientes[indexIngrediente];
console.log(ingredientes);
