// Definimos el número multiplicador
const multiplicador = 5;

// Definimos el vector con los multiplicadores
var multiplicadores = [
    1,
    2,
    3,
    4,
];

// Los resultados tienen que estar vacíos
var resultados = [];
resultados.push({ 
    multiplicando: multiplicadores[0], 
    resultado: multiplicador * multiplicadores[0] 
});
resultados.push({ 
    multiplicando: multiplicadores[1], 
    resultado: multiplicador * multiplicadores[1] 
});
resultados.push({ 
    multiplicando: multiplicadores[2], 
    resultado: multiplicador * multiplicadores[2] 
});
resultados.push({ 
    multiplicando: multiplicadores[3], 
    resultado: multiplicador * multiplicadores[3] 
});

// Mostramos los resultados
console.log(multiplicador, ' * ');
console.log (resultados);
