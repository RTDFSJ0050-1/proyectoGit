//Botón que cambia el texto del header
const titulo = document.querySelector("#myName h1");

const textoOriginal = "¡Hola soy Pamela!";
const textoAlternativo = "Desarrolladora en constante aprendizaje 🚀";

titulo.addEventListener("click", () => {
  titulo.textContent =
    titulo.textContent === textoOriginal ? textoAlternativo : textoOriginal;
});

//Resaltar sección al pasar el mouse
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.classList.add("shadow-lg");
  });

  card.addEventListener("mouseleave", () => {
    card.classList.remove("shadow-lg");
  });
});

//Alert de contacto
const botonContacto = document.getElementById("btnContacto");

botonContacto.addEventListener("click", (e) => {
  e.preventDefault();

  const modal = new bootstrap.Modal(document.getElementById("modalContacto"));

  modal.show();
});
document.getElementById("enviarCorreo").addEventListener("click", () => {
  const modal = bootstrap.Modal.getInstance(
    document.getElementById("modalContacto")
  );
  modal.hide();

  window.location.href = "mailto:pamela.kyp@gmail.com";
});

//Animación de aparición al hacer scroll
const sections = document.querySelectorAll("section");

const mostrarSeccion = () => {
  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
};

sections.forEach((section) => section.classList.add("fade-in"));

window.addEventListener("scroll", mostrarSeccion);
mostrarSeccion();

//Contador de proyectos

const proyectos = document.querySelectorAll("#proyectos li");
const contador = document.getElementById("contadorProyectos");

contador.textContent = `Total de proyectos: ${proyectos.length}`;

//Animación al hacer scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});
