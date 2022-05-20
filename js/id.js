class Discos{
    constructor(id,nombre){
        this.id = id
        this.nombre = nombre
    }
}

discosLista = []

function crearDisco(nombre){
    let idDisco = discosLista.length;
    var discografia = new Discos(idDisco, nombre);
    return discosLista.push(discografia);
    
}
