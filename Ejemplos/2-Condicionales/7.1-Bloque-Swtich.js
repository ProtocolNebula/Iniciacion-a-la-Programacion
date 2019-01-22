let ingrediente = 'Huevo';

let receta = '';

// toLower convertirá "Huevo" a minúsculas, quedando "huevo".
// Fijemonos que no hemos hecho ninguna comparación dentro del "switch" (aunque podríamos)
switch (ingrediente.toLower()) {
    
    // Si el match (el "resultado" del switch) es "huevo"
    case 'huevo':
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
