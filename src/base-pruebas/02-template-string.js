export function getSaludo( nombre ) {
    if(!nombre) return;
    if(!(typeof nombre === 'string')) return
    return 'Hola ' + nombre;
}
