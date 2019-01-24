const numero1 = 6;
const numero2 = 11;
const operacion = '/';

let resultado = null; // Si al final es null, la operacion es incorrecta

// Comprobamos el numero 1
// if (numero1 < 1 || numero1 === 5 || numero1 > 10) {
//     console.log('El numero 1 debe ser mayor de 0, menor de 11 y no puede ser 5');
//     process.exit();
// }

// if (numero2 < 1 || numero2 === 5 || numero2 > 10) {
//     console.log('El numero 2 debe ser mayor de 0, menor de 11 y no puede ser 5');
//     process.exit();
// }

// If reducido (contra: no sabemos que número está mal)
if (numero1 < 1 || numero1 === 5 || numero1 > 10 ||
    numero2 < 1 || numero2 === 5 || numero2 > 10) {
    console.log('Los números introducidos deben ser mayor de 0, menor de 11 y no puede ser 5');
    process.exit();
}

// Hacemos un pre-check de las operaciones (puramente ejemplificativo)
if (operacion !== '+' && operacion !== '-' && operacion !== '/' && operacion !== '*') {
    console.log('Por favor, introduce una operación correcta.')
    process.exit();
}

// Realizamos la operacion
if (operacion === '+') {
    resultado = numero1 + numero2;
}
if (operacion === '-') {
    resultado = numero1 - numero2;
}
if (operacion === '*') {
    resultado = numero1 * numero2;
}
if (operacion === '/') {
    resultado = numero1 / numero2;
}

if (resultado === null) {
    console.log('El número no se ha calculado correctamente.')
    process.exit();
}

console.log('El resultado de calcular' , numero1, operacion, numero2, '=', resultado);
