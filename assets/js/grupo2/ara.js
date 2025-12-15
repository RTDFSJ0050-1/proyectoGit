let numero1 =16; // cambiar a cualquier número
let numero2 =4;
let operacion = "dividir"; // cambiar a "sumar", "restar", "multiplicar" o "dividir"
let resultado;
// Completar el código para la operación
if (operacion === "sumar") { // Sumar
    resultado = numero1 + numero2; // Completar el código para la operación
}  else if (operacion === "restar") {// Restar
    resultado = numero1 - numero2; // Completar el código para la operación
} else if (operacion === "multiplicar") { // Multiplicar
  resultado = numero1 * numero2;// Completar el código para la operación
} else if (operacion === "dividir") {
  // Manejar división por cero si fuera necesario
    if (numero2 !== 0) {
    resultado = numero1 / numero2;
    } else {
    resultado = "Error: División por cero"; // Manejo de error
    }
} else {
  resultado = "Operación no válida"; // Manejo de operación desconocida
}
console.log(resultado); // Mostrar el resultado en la consola
// Si operacion es "dividir", mostrará 4.
// Si operacion es "sumar", mostrará 20.

