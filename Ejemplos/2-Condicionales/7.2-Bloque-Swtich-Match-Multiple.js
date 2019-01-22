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
