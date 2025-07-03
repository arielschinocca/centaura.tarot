const form = document.getElementById("form-testimonio");
const contenedor = document.getElementById("testimonios-nuevos");
const inputTestimonio = document.getElementById("input-testimonio");
const inputNombre = document.getElementById("nombre");
const inputInstagram = document.getElementById("instagram");
const botonEnviar = form.querySelector("button[type='submit']");
const mensajeError = document.getElementById("mensaje-error");

let puntuacion = 0;

// Validar campos
function validarFormulario() {
  const palabras = inputTestimonio.value.trim().split(/\s+/).filter(Boolean).length;
  const nombreValido = inputNombre.value.trim().length > 0;
  const textoValido = palabras >= 2;
  const estrellasValidas = puntuacion > 0;

  if (textoValido && nombreValido && estrellasValidas) {
    botonEnviar.disabled = false;
    botonEnviar.style.cursor = "pointer";
    botonEnviar.style.opacity = "1";
    mensajeError.style.display = "none";
  } else {
    botonEnviar.disabled = true;
    botonEnviar.style.cursor = "not-allowed";
    botonEnviar.style.opacity = "0.6";

    if (!textoValido) {
      mensajeError.textContent = "Tu testimonio debe tener al menos 2 palabras.";
      mensajeError.style.display = "block";
    } else if (!estrellasValidas) {
      mensajeError.textContent = "Por favor, seleccioná una puntuación.";
      mensajeError.style.display = "block";
    } else {
      mensajeError.style.display = "none";
    }
  }
}

inputTestimonio.addEventListener("input", validarFormulario);
inputNombre.addEventListener("input", validarFormulario);

// Manejo de estrellas
const estrellas = document.querySelectorAll(".estrella");
estrellas.forEach(estrella => {
  estrella.addEventListener("click", () => {
    puntuacion = parseInt(estrella.dataset.value);
    estrellas.forEach(e => e.classList.remove("seleccionada"));
    for (let i = 0; i < puntuacion; i++) {
      estrellas[i].classList.add("seleccionada");
    }
    validarFormulario();
  });
});

// Envío del formulario
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const texto = inputTestimonio.value.trim();
  const nombre = inputNombre.value.trim() || "Anónimo";
  const instagram = inputInstagram.value.trim().replace("@", "") || "";

  const data = {
    texto,
    nombre,
    instagram,
    estrellas: puntuacion
  };

  await fetch("https://TUDOMINIO.onrender.com/api/testimonios", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  form.reset();
  puntuacion = 0;
  estrellas.forEach(e => e.classList.remove("seleccionada"));
  validarFormulario();
  cargarTestimonios();
});

// Cargar testimonios
async function cargarTestimonios() {
  const res = await fetch("https://TUDOMINIO.onrender.com/api/testimonios");
  const testimonios = await res.json();

  contenedor.innerHTML = testimonios.reverse().map(t => `
    <div class="testimonio-box">
      <p class="testimonio-texto">"${t.texto}"</p>
      <p class="testimonio-nombre">– ${t.nombre}</p>
      <div class="testimonio-estrellas">${"★".repeat(t.estrellas || 0)}${"☆".repeat(5 - (t.estrellas || 0))}</div>
    </div>
  `).join("");
}

cargarTestimonios();

