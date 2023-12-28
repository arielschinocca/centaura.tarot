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
    // Obtener los datos del formulario
    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;

    // Verificar que se hayan ingresado todos los campos
    if (nombre && telefono && email && mensaje) {
      // Mostrar mensaje de confirmación
        alert("Mensaje enviado:\nNombre: " + nombre + "\nTeléfono: " + telefono + "\nEmail: " + email + "\nMensaje: " + mensaje);

      // Recargar la página
        location.reload();
    } else {
      // Mostrar un mensaje de error si algún campo está vacío
        alert("Por favor, complete todos los campos antes de enviar el formulario.");
    }
}
