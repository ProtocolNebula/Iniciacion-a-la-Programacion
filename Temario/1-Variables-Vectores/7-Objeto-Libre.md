# Objetos libres

## Introducción

Una de las ventajas de `JavaScript` actual es la versatilidad que nos da para trabajar con `Objetos` (próximamente veremos como trabajar de forma correcta con ellos).

Por ahora solo entender que un objeto es una especie de `Vector` que puede contener cualquier cosa, excepto `índices numéricos`.

Dado que los `Objetos Libres` son "exclusivo" de JavaScript (no con una estrictidad absoluta) y no es fundamental para aprender a programar, lo veremos *muy por encima*.

## Scripting


### Objeto simple
Vamos a crear un objeto que contenga el `Ingrediente` y la `cantidad` necesaria para la receta:

> Nótese que los objetos se "crean" con llaves `{}`

```js
// Separamos cada elemento con ',' y podemos poner una ',' al final para que sea más fácil la manipulación de este
let miIngrediente = {
    nombre: 'Huevo',
    cantidad: 1,
};

// Mostramos el objeto, importante separar con , y no con +
console.log('Ingrediente: ' , miIngrediente);
```

### Vector de Objetos

Como comentábamos en `Vectores`, estos pueden contener un listado de elementos cualquiera, vamos a crear un listado de ingredientes para la receta.

```js
// Nótese como ahora comenzamos con [] para generar el Vector e introducimos el Objeto con {} separado con , para el siguiente elemento
let ingredientes = [
    {
        nombre: 'Huevo',
        cantidad: 1,
    },
];

// Añadimos de forma dinámica un nuevo ingrediente
let miIngrediente = {
    nombre: 'Sal',
    cantidad: '10gr', // En efecto, aqui usamos un string en lugar de un numero
};
ingredientes.push(miIngrediente);
// Podriamos haber hecho ingredientes.push({ nombre: 'Sal' ... }) y hubiese funcionado igualmente
```
