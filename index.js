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

