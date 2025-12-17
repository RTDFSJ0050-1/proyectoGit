// script.js

const nombreInput = document.getElementById("nombre");
const salida = document.getElementById("salida");
const historialDiv = document.getElementById("historial");

function mostrar() {
    const nombre = nombreInput.value.trim();
    if (nombre) {
        salida.textContent = `Hola, ${nombre}! Bienvenido a mi portafolio.`;
        agregarHistorial(`Mostrado: ${nombre}`);
    } else {
        salida.textContent = "Por favor, escribe tu nombre.";
    }
}

function formatear() {
    nombreInput.value = "";
    salida.textContent = "";
    agregarHistorial("Formulario formateado");
}

function finalizar() {
    salida.textContent = "Gracias por visitar mi portafolio. ¡Hasta pronto!";
    agregarHistorial("Finalizado");
}

function agregarHistorial(mensaje) {
    const p = document.createElement("p");
    p.textContent = mensaje;
    historialDiv.appendChild(p);
}
