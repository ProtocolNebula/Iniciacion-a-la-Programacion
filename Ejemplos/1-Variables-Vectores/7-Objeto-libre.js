// Nótese como ahora comenzamos con [] para generar el Vector e introducimos el Objeto con {} separado con , para el siguiente elemento
let ingredientes = [
    {
        nombre: 'Huevo',
        cantidad: 1,
    },
];

console.log(ingredientes);

// Añadimos de forma dinámica un nuevo ingrediente
let miIngrediente = {
    nombre: 'Sal',
    cantidad: '10gr', // En efecto, aqui usamos un string en lugar de un numero
};
ingredientes.push(miIngrediente);

// Podriamos haber hecho ingredientes.push({ nombre: 'Sal' ... }) y hubiese funcionado igualmente
console.log(ingredientes);
