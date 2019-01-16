var idioma = 'Español';

// Se mostrará si SE HABLA ESPAÑOL
if (idioma === 'Español') {
    console.log('¡Bienvenido!');
}

// Se mostrará si NO SE HABLA ESPAÑOL
if (idioma !== 'Español') {
    console.log('Veo que no hablas español...');
}

// Se mostrará si SE HABLA INGLÉS
if (idioma === 'English') {
    console.log('Welcome!');
}

// Demostramos como podemos mostrar por pantalla el resultado de la "operación"
console.log('El idioma es español?', idioma === 'Español');

// También podríamos haberlo guardado en una booleana
var esEspanol = (idioma === 'Español');
console.log('Comprobamos si es español desde variable', esEspanol);

if (esEspanol) {
    console.log('Si, definitivamente la variable contiene "Español".');
}