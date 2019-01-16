var resultadOperacion = true; // Supongamos que esto es (5 > 1)

console.log('resutlado operación:', resultadoOperacion); // Mostrará true
console.log('! resutlado operación:', !resultadoOperacion); // Mostrará lo contrario de true (false)

if (resultadoOperacion) {
    console.log('El resultado es TRUE');
}
if (!resultadoOperacion) {
// if (!(resultadoOperacion)) { // Equivalente en órden de lectura (prioridad)
    console.log('El resultado con ! es FALSE, por eso no veremos el contenido');
}