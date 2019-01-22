# Bloque Switch

## Introducción

El bloque `Switch` es una variante del bloque `if-else-if`.

Este tiene varias diferencias respecto a if:
 - Le pasamos un valor (u operación) y comprobamos el valor de ésta.
 - Una vez se encuentre un elemento (`case`), salvo que se indique con `break`, se ejecutarán *todos* los eventos *siguientes* aunque no coincidan.

> El operador switch además permite "decisiones libres" en las cuales no vamos a entrar porque no es el objetivo del `switch`.

`Switch` suele usarse para comprar valores `iguales` (`==` o `===`)
---

## Ejemplos

### Match único

Supongamos que tenemos un ingrediente y queremos más información sobre éste.

#### Ejemplo con if
```js
let ingrediente = 'huevo';
let receta = '';

if (ingredietne === 'huevo') {
    receta = 'Huevo frito';
} else if (ingredietne === 'huevo') {
    receta = 'Patatas al Horno';    
} else if (ingredietne === 'huevo') {
    receta = 'Ensalada de verano';
} else {
    receta = 'No se ha encontrado ninguna receta';
}

console.log('Receta: ' + receta);
```

----
#### Ejemplo con Switch

```js
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
```

Como podemos apreciar, queda bastate claro el código y es bastante más sencillo añadir condiciones.

----

### Match múltiple

Vamos a realizar la gestión de **permisos de usuario**, un usuario está en un **grupo**, en función del grupo tendrá una lista de **permisos** (array).


> **Recuerda:** El orden es importante, comenzaremos a comprobar de arriba a abajo.

Una vez encontremos la coincidencia, añadiremos el resto de elementos en modo descarte (se entiende que si un usuario es `Administrador`, también podrá realizar las tareas de `Editor`).

#### Ejemplo con if

Este ejemplo se complica bastante con un simple IF, pero vamos a verlo para ver como realmente mejora con `Switch`.

```js

let GRUPO_USUARIO = 'ADMINISTRADOR';
let permisos = [];

if (GRUPO_USUARIO === 'INVITADO') {
    permisos.push('VER_NOTICIAS', 'COMENTAR');
} else if (GRUPO_USUARIO === 'MODERADOR') {
    permisos.push('VER_NOTICIAS', 'COMENTAR', 'MODERAR_COMENTARIOS');
} else if (GRUPO_USUARIO === 'EDITOR') {
    permisos.push('VER_NOTICIAS', 'COMENTAR', 'MODERAR_COMENTARIOS', 'EDITAR_NOTICIAS');
} else if (GRUPO_USUARIO === 'ADMINISTRADOR') {
    permisos.push('VER_NOTICIAS', 'COMENTAR', 'MODERAR_COMENTARIOS', 'EDITAR_NOTICIAS', 'ADMINISTRAR USUARIOS');
} else {
    console.error('Grupo no encontrado');
    process.exit();
}

console.log('Un usuario ' + GRUPO_USUARIO + ' puede:');
console.log(permisos);
```

Como podemos observar estamos repitiendo constantemente lo del condicional anterior.

Hay muchas formas de mejorar esto, vamos a ver por ejemplo con Switch (podríamos tener un array con los permisos e ir asignandola, pero nos encontraríamos el mismo problema aunque con menos código).

----


#### Ejemplo con switch


```js
let GRUPO_USUARIO = 16;
let permisos = [];

switch (GRUPO_USUARIO) {

    // EN ESTE CASO DEBEMOS INVERTIR EL ORDEN (DE MAYOR PERMISIVIDAD A MENOR)

    case 'ADMINISTRADOR':
        // Añadimos unicamente los permisos ESPECIFICOS de administrador
        permisos.push('ADMINISTRAR USUARIOS');
        // NOTESE QUE NO HACEMOS BREAK;
        // A partir de aqui ya no se comprobarán los "case", sino que se 
        // EJECUTARÁ el contenido de estos
    
    case 'EDITOR':
        permisos.push('EDITAR_NOTICIAS');
        // Permisos específicos de EDITOR SIN BREAK

    case 'MODERADOR':
        permisos.push('MODERAR_COMENTARIOS');
        // Permisos específicos de MODERADOR SIN BREAK

    case 'INVITADO':
        permisos.push('VER_NOTICIAS', 'COMENTAR');
        // Permisos específicos de INVITADO CON BREAK
        break; // Porque NO QUEREMOS EL DEFAULT

    default:
        console.error('Grupo no encontrado');
        process.exit();
}

console.log('Un usuario ' + GRUPO_USUARIO + ' puede:');
console.log(permisos);
```

> No siempre el `switch` es mejor que el `if` ni viceversa, si bien es cierto generalmente se utiliza la estructura `if`.

