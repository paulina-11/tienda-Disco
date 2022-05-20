var botonAdicionar = document.querySelector("#adicionar-disco");

botonAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adicionar");

    // Almacenamiento de los valores ingresados en variables
    var nameDisco = form.nombre.value;
    var autor = form.autor.value;
    var anioDisco = form.anio.value;
    var precioDisco = form.precio.value;
    form.reset();


    // Validacion 
    if(nameDisco === '' || autor === '' || anioDisco === '' || precioDisco === '' ){
        return 
    }

    var tabla = document.querySelector("#tabla-discos");

    // Creación de elementos para la tabla
    discoTr = document.createElement("tr");
    idTd = document.createElement("td");
    nombreTd = document.createElement("td");
    autoresTd = document.createElement("td");
    anioTd = document.createElement("td");
    precioTd = document.createElement("td");


    idTd.textContent = crearDisco(nombre);
    nombreTd.textContent = nameDisco;
    autoresTd.textContent = autor;
    anioTd.textContent = anioDisco;
    precioTd.textContent = precioDisco;

    discoTr.appendChild(idTd);
    discoTr.appendChild(nombreTd);
    discoTr.appendChild(autoresTd);
    discoTr.appendChild(anioTd);
    discoTr.appendChild(precioTd);


    tabla.appendChild(discoTr);
    
    // crear clases 
    discoTr.classList.add("disco");
    nombreTd.classList.add("info-nombre");
});

