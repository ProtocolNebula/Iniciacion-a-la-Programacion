const numero1 = 7;
const numero2 = 9;
const operacion = '*';

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
if (numero1 < 1 || numero1 === 5 || numero1 > 10) {
    console.log('El número 1 deben ser mayor de 0, menor de 11 y no puede ser 5');
} else if (numero2 < 1 || numero2 === 5 || numero2 > 10) {
    console.log('El número 2 deben ser mayor de 0, menor de 11 y no puede ser 5');
} else {
    switch (operacion) {
        case '+':  // if (operacion === '+')
            resultado = numero1 + numero2; 
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        case '*':
            resultado = numero1 * numero2;
            break;
        case '/':
            resultado = numero1 / numero2;
            break;
    }
    
    if (resultado !== null) {
        console.log('El resultado de calcular' , numero1, operacion, numero2, '=', resultado);
    } else {
        console.log('Por favor, introduce una operación correcta.');
    }
}