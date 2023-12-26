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

//carrousel de fotos

let currentIndex = 0;
const intervalTime = 5000; // Cambia el tiempo en milisegundos según tus preferencias
const direction = 1; // 1 para avanzar hacia la derecha, -1 para avanzar hacia la izquierda
let interval;

function startInterval() {
    interval = setInterval(() => {
    nextSlide();
    }, intervalTime);
}

function stopInterval() {
    clearInterval(interval);
}

function showSlide(index) {
    const carousel = document.getElementById('carousel');
    const totalSlides = document.querySelectorAll('.carousel-item').length;
    index = (index + totalSlides) % totalSlides;

    const offset = -index * 100 + '%';
    carousel.style.transform = 'translateX(' + offset + ')';
    currentIndex = index;
}


function nextSlide() {
    showSlide(currentIndex + direction);
}

startInterval(); // Inicia el carrusel automáticamente al cargar la página


// Puedes agregar scripts adicionales según tus necesidades
// Este script es opcional y se utiliza para un comportamiento adicional

document.getElementById('instagram-chat').addEventListener('click', function() {
    // Puedes agregar funciones adicionales aquí, por ejemplo, abrir una ventana de chat de Instagram
    window.open('https://ig.me/m/tarot_centaura', '_blank');
    // o realizar alguna otra acción.
});