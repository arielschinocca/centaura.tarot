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
let links2 = document.querySelectorAll("nav a");
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

        // Variables globales
        var scene, camera, renderer, cube;

        function init() {
            // Crea una escena
            scene = new THREE.Scene();

            // Crea una cámara
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 5;

            // Crea un renderizador
            renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(renderer.domElement);

            // Crea una geometría de cubo (box)
            var geometry = new THREE.BoxGeometry(100, 100, 100);

            // Crea un material con la textura de estrellas
            var texture = new THREE.TextureLoader().load('./img/cielo-estrellado.jpg');
            var material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide });

            // Crea la malla con la geometría y el material
            cube = new THREE.Mesh(geometry, material);

            // Añade el cubo a la escena
            scene.add(cube);

            // Maneja el cambio de tamaño de la ventana
            window.addEventListener('resize', onWindowResize, false);

            // Inicia la animación
            animate();
        }

        function animate() {
            requestAnimationFrame(animate);

            // Rota el cubo para el efecto 3D
            cube.rotation.x += 0.005;
            cube.rotation.y += 0.005;

            // Renderiza la escena
            renderer.render(scene, camera);
        }

        function onWindowResize() {
            // Ajusta el tamaño del renderizador cuando cambia el tamaño de la ventana
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        // Inicializa la aplicación
        init();
