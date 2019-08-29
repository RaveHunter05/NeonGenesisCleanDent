var suma=0;
var laesperanza=document.getElementById("desplegar");


laesperanza.addEventListener("click", function(){
    suma++;
    if (suma % 2 == 0) {
        recorrido.style.visibility="hidden";
    } else {
        recorrido.style.visibility="visible";

    }

})

let perfilUsuario=()=>{
    window.location.href="inicioUsuario.html";
}

let citasUsuario=()=>{
    window.location.href="usuarioCitas.html";
}

let historialUsuario=()=>{
    window.location.href="usuarioHistorial.html";
}

let cerrar = () => {
    window.location.href="index.html";
}