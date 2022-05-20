var tabla = document.querySelector("#tabla-discos");

tabla.addEventListener("dblclick", function(event){
    // eliminacion del tr del target
    event.target.parentNode.classList.add("animacion-eliminar");
    // espera a que se realice la animación
    setTimeout(function(){
        event.target.parentNode.remove();
    },500);
});
