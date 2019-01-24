let ingrediente = 'Huevo';

let receta = ''; // Se rellenará con la receta encontrada

// Ejemplo de transpilación de SWITCH sin BREAK a IF
// if (ingrediente === 'huevo' || ingrediente === 'lechuga' || ingrediente === 'pata') {
//     receta = 'Tu receta';
// }
// receta = 'No se ha encontrado ninguna receta';

// toLowerCase convertirá "Huevo" a minúsculas, quedando "huevo".
// Fijemonos que no hemos hecho ninguna comparación dentro del "switch" (aunque podríamos)
switch (ingrediente.toLowerCase()) {
    
    // Si el match (el "resultado" del switch) es "huevo"
    case 'huevo':
        // if (ingrediente === 'huevo')
        // Modificamos el valor de la variable del bloque padre
        receta = 'Huevo frito';
        break; // Forzamos la salida del switch
    
    case 'patata':
        receta = 'Patatas al Horno';
        break; // Forzamos la salida del switch

    case 'lecuhga':
        receta = 'Ensalada de verano';
        break; // Forzamos la salida del switch
    
    // Como hemos forzado la salida en todos los case,
    // solo entrará aquí si no se encuentra el ingrediente
    default:
        receta = 'No se ha encontrado ninguna receta';
}

console.log('Receta: ' + receta);
