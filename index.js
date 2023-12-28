// Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
// oculto el menu una vez que selecciono una opcion
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible  = false;
    }
}

var menu_visible2 = false;
let menu2 = document.getElementById("nav2");
function mostrarOcultarMenu2(){
    if(menu_visible2==false){//si esta oculto
        menu2.style.display = "block";
        menu_visible2 = true;
    }
    else{
        menu2.style.display = "none";
        menu_visible2 = false;
    }
}
// oculto el menu una vez que selecciono una opcion
let links2 = document.querySelectorAll("nav2 a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu2.style.display = "none";
        menu_visible2  = false;
    }
}


document.getElementById('instagram-chat').addEventListener('click', function() {
    // Puedes agregar funciones adicionales aquí, por ejemplo, abrir una ventana de chat de Instagram
    window.open('https://ig.me/m/tarot_centaura', '_blank');
    // o realizar alguna otra acción.
});


function enviarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;

    if (nombre && telefono && email && mensaje) {
      // Aquí podrías enviar los datos del formulario a tu servidor o realizar otras acciones necesarias

      // Redirigir a la página de agradecimiento
        window.location.href = "https://tarotcentaura.com.ar/paginaGracias/gracias.html";

      // Después de 2 segundos, redirigir de nuevo a la página principal
        setTimeout(function() {
        window.location.href = "https://tarotcentaura.com.ar/";
        }, 2000);
    } else {
        alert("Por favor, completa todos los campos antes de enviar el formulario.");
    }
}
