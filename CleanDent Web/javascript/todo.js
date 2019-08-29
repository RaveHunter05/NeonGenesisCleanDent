var suma = 0;
var usuario = document.querySelector("#texto");
var password = document.querySelector("#contrasena");
var hora=document.querySelector("#hora");
var recorrido=document.querySelector("#recorrido");
var minimizar=document.getElementsByClassName("fa-instagram");


minimizar.addEventListener("click", function(){
    document.getElementById('parte2').style.visibility="hidden";
})


function formulario() {
    suma++;
    if (suma % 2 == 0) {
        document.getElementById("esconder").style.visibility = "hidden";
    } else {
        document.getElementById("esconder").style.visibility = "visible";
    }
}
// window.location.href = "file:///home/ravehunter05/Documents/AplicacionesGraficas/Citas.html";

var redireccionar = () => {
    if (usuario.value == "walter" && password.value == "1234") {
        window.location.href = "Citas.html";
    }else if(usuario.value=="jesse" && password.value=="1234"){
        window.location.href="inicioUsuario.html"
    }
    else {
        alert("Usuario o contraseña incorrecta");
    }
}

function perfil(){
    window.location.href="Perfil.html";
}

let admin=()=>{
    window.location.href="Citas.html";
}

let citas=()=>{
    window.location.href="citas1.html";
}

let servicios=()=>{
    window.location.href="serviciosAdmin.html";
}

let mensajes=()=>{
    window.location.href="mensajes.html";
}

let agregar =() =>{
    window.location.href="newUser.html";
}

let cerrar = () => {
    window.location.href="index.html";
}

let contacto=()=>{
    window.location.href="contacto.html"
}

let nosotros =()=>{
    window.location.href="nosotros.html"
}

let setHora=()=>{
    var date=new Date;

    hora.innerHTML=date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
}
sayHello();
// setInterval(setHora(),1000);
function sayHello(){
    setHora();
    setTimeout(sayHello, 2000);
}; sayHello();



