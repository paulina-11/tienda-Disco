var campoFiltro = document.querySelector("#filtrar-tabla");
campoFiltro.addEventListener("input", function(){

    var discos = document.querySelectorAll(".disco");

    // si mi campo filto tiene mas de una letra
    if(this.value.length > 0){

        for(var i = 0; i < discos.length; i++){
            var disco = discos[i];
            var tdNombre = disco.querySelector(".info-nombre");
            var nombre = tdNombre.textContent;

            var expresion = new RegExp(this.value,"i");
            // Si la expresion no existe lo vuelve invisible
            if(!expresion.test(nombre)){
                disco.classList.add("invisible");
            }else{
                disco.classList.remove("invisible")
            }
        }
    }else{
        // Y si no remueve
        for(var i = 0; i < discos.length; i++){
            var disco = discos[i];
            disco.classList.remove("invisible")
        }
    }


});

