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

if (ingrediente === 'huevo') {
    receta = 'Huevo frito';
} else if (ingrediente === 'huevo') {
    receta = 'Patatas al Horno';    
} else if (ingrediente === 'huevo') {
    receta = 'Ensalada de verano';
} else {
    receta = 'No se ha encontrado ninguna receta';
}

console.log('Receta: ' + receta);
```

----

#### Ejemplo con Switch

Descargaremos el archivo [Bloque Else If - Orden](/Ejemplos/2-Condicionales/7.1-Bloque-Swtich.js) y lo ejecutaremos:

```bash
node 7.1-Bloque-Swtich.js
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

let GRUPO_USUARIO = 'EDITOR';
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

Descargaremos el archivo [Bloque Else If - Orden](/Ejemplos/2-Condicionales/7.2-Bloque-Swtich-Match-Multiple.js) y lo ejecutaremos:

```bash
node 7.2-Bloque-Swtich-Match-Multiple.js
```

> No siempre el `switch` es mejor que el `if` ni viceversa, si bien es cierto generalmente se utiliza la estructura `if`.

