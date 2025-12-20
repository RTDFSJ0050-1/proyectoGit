document.addEventListener("DOMContentLoaded", () => {
  const contactoBtn = document.querySelector("#contacto a.btn");
  contactoBtn.addEventListener("mouseover", () => {
    contactoBtn.textContent = "¡Escríbeme ahora!";
  });
  contactoBtn.addEventListener("mouseout", () => {
    contactoBtn.textContent = "Escríbeme";
  });
});