
let liderbtn =document.getElementById ("boton_liderazgo")

liderbtn.onclick = function () {
    src = "../imagenes/liderazgo.png";
    height="10px" ;
    width="100px" ;
}

var iconoMenu = document.querySelector(".icono_menu_desplegable");

function desplegarMenu(){
    var menuDesplegable = document.querySelector(".contenedor_paginas");
    menuDesplegable.classList.toggle("desplegar_menu");

}

iconoMenu.addEventListener("click", desplegarMenu);


/**
document.getElementById("boton").addEventListener ("click", function () {
    console.log ("Capturamos el evento click");
    document.getElementById ("demo").innerHTML = "Estamos probando nuestro primer evento en JS";
});

document.getElementById("boton_color").addEventListener ("click", function () {
    document.body.style.backgroundColor = "#FF0000";
});

document.getElementById("boton_default").addEventListener ("click", function () {
    document.body.style.backgroundColor = "blue";
});
document.getElementById("boton_ocultar").addEventListener ("click", function () {
    document.getElementById ("demo").style.display = "none";
});

document.getElementById("#toc_container").addEventListener ("click", function () {
    console.log ("Capturamos el evento click");
    document.getElementById ("toc_container").innerHTML = "OCULTAR";
*/