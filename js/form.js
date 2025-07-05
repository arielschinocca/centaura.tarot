const form = document.getElementById("form-testimonio");
const contenedor = document.getElementById("testimonios-nuevos");
const botonEnviar = form.querySelector("button[type='submit']");
const mensajeError = document.getElementById("mensaje-error");

// Inputs
const inputTexto = document.getElementById("input-testimonio");
const inputNombre = document.getElementById("nombre");
const inputInstagram = document.getElementById("instagram");
const estrellas = document.querySelectorAll(".estrella");
let puntuacion = 5;

// URL base backend
const API_URL = "https://pagina-testimonios.onrender.com/api/testimonios";

// Estrellas: manejo de clic
estrellas.forEach((estrella, index) => {
  estrella.addEventListener("click", () => {
    puntuacion = index + 1;
    actualizarEstrellas(puntuacion);
    validarFormulario();
  });
});

function actualizarEstrellas(valor) {
  estrellas.forEach((estrella, index) => {
    estrella.classList.toggle("seleccionada", index < valor);
  });
}

// Validación en tiempo real
[inputTexto, inputNombre].forEach(input =>
  input.addEventListener("input", validarFormulario)
);

function validarFormulario() {
  const textoValido = inputTexto.value.trim().split(/\s+/).length >= 2;
  const nombreValido = inputNombre.value.trim().length > 0;

  botonEnviar.disabled = !(textoValido && nombreValido);
  botonEnviar.style.cursor = botonEnviar.disabled ? "not-allowed" : "pointer";
  botonEnviar.style.opacity = botonEnviar.disabled ? "0.6" : "1";
}

// Envío del formulario
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const texto = inputTexto.value.trim();
  const nombre = inputNombre.value.trim();
  const instagram = inputInstagram.value.trim();

  if (texto.split(/\s+/).length < 2 || !nombre) {
    mensajeError.style.display = "block";
    mensajeError.textContent = "El testimonio debe tener al menos 2 palabras y un nombre.";
    return;
  }

  const payload = {
    texto,
    nombre,
    instagram,
    puntuacion
  };

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      form.reset();
      actualizarEstrellas(5);
      puntuacion = 5;
      mensajeError.style.display = "none";
      cargarTestimonios();
    } else {
      const error = await res.json();
      mensajeError.style.display = "block";
      mensajeError.textContent = error.error || "Error al enviar el testimonio.";
    }
  } catch (err) {
    mensajeError.style.display = "block";
    mensajeError.textContent = "Error de conexión con el servidor.";
  }
});

// Cargar testimonios desde la API
async function cargarTestimonios() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Error al cargar testimonios");

    const testimonios = await res.json();

    contenedor.innerHTML = testimonios.reverse().map(t => `
      <div class="testimonio-box">
        <p class="testimonio-texto">"${t.texto}"</p>
        <p class="testimonio-nombre">– ${t.nombre}</p>
        <div class="estrellas-publicadas">
          ${"★".repeat(t.puntuacion || 5)}${"☆".repeat(5 - (t.puntuacion || 5))}
        </div>
      </div>
    `).join("");
  } catch (error) {
    contenedor.innerHTML = "<p>No se pudieron cargar los testimonios.</p>";
  }
}

cargarTestimonios();
actualizarEstrellas(puntuacion);
validarFormulario();
