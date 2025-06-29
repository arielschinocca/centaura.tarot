const form = document.getElementById("form-testimonio");
const contenedor = document.getElementById("testimonios-nuevos");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const texto = document.getElementById("input-testimonio").value.trim();
  const nombre = document.getElementById("nombre").value.trim();
  const instagram = document.getElementById("instagram").value.trim();

  if (texto.split(" ").length <= 2 || !nombre) {
    alert("El testimonio debe tener al menos 2 palabras y un nombre.");
    return;
  }


  await fetch("https://pagina-testimonios.onrender.com", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ texto, nombre, instagram })
  });

  form.reset();
  cargarTestimonios();
});

async function cargarTestimonios() {
  const res = await fetch("https://pagina-testimonios.onrender.com");
  const testimonios = await res.json();

  contenedor.innerHTML = testimonios.reverse().map(t => `
    <div class="testimonio-box">
      ${t.foto ? `<img src="${t.foto}" alt="Foto de ${t.nombre}" class="testimonio-img">` : ""}
      <p class="testimonio-texto">"${t.texto}"</p>
      <p class="testimonio-nombre">– ${t.nombre}</p>
    </div>
  `).join("");
}

cargarTestimonios();

// Validación visual para el botón
const inputTestimonio = document.getElementById("input-testimonio");
const botonEnviar = form.querySelector("button[type='submit']");

function validarInput() {
  if (inputTestimonio.value.trim().split(" ").length >= 10) {
    botonEnviar.disabled = false;
    botonEnviar.style.cursor = "pointer";
    botonEnviar.style.opacity = "1";
  } else {
    botonEnviar.disabled = true;
    botonEnviar.style.cursor = "not-allowed";
    botonEnviar.style.opacity = "0.6";
  }
}

validarInput();
inputTestimonio.addEventListener("input", validarInput);


form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const texto = document.getElementById("input-testimonio").value.trim();
  const nombre = document.getElementById("nombre").value.trim() || "Anónimo";
  const instagram = document.getElementById("instagram").value.trim();

  if(texto.split(" ").length < 2){
    alert("Por favor, ingresa al menos 2 palabras en el testimonio.");
    return;
  }

  await fetch("https://pagina-testimonios.onrender.com", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ texto, nombre, instagram })
  });

  form.reset();
  cargarTestimonios();
});

async function cargarTestimonios() {
  const res = await fetch("https://pagina-testimonios.onrender.com");
  const testimonios = await res.json();

  contenedor.innerHTML = testimonios.reverse().map(t => {
    let instaFoto = "";
    let instaLink = "";
    if(t.instagram && t.instagram !== "") {
      instaFoto = `<img src="https://www.instagram.com/${t.instagram}/media/?size=l" alt="Foto de perfil de ${t.instagram}" class="insta-foto" />`;
      instaLink = `<a href="https://www.instagram.com/${t.instagram}" target="_blank" rel="noopener noreferrer">@${t.instagram}</a>`;
    }

    return `
      <div class="testimonio-box">
        <div class="testimonio-header">
          ${instaFoto}
          <p class="testimonio-nombre">${t.nombre} ${instaLink}</p>
        </div>
        <p class="testimonio-texto">"${t.texto}"</p>
      </div>
    `;
  }).join("");
}

cargarTestimonios();
