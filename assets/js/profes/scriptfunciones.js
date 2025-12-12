// Función para saludar al usuario
function saludarUsuario(nombre) {
	console.log("¡Hola, " + nombre + "! Bienvenido a nuestro sitio web.");
}
// Uso de la función con diferentes nombres
saludarUsuario("Carlos");
saludarUsuario("María");
let nombreIngresado = "Juan Carlos";
saludarUsuario(nombreIngresado);
// Función para calcular el área de un rectángulo
function calcularAreaRectangulo(base, altura) {
	let area = base * altura;
	return area;
}
// Uso de función con valores directos
let area1 = calcularAreaRectangulo(5, 10);
console.log("El área del rectángulo es: " + area1);
// Uso de función con variables
let baseIngresada = 7;
let alturaIngresada = 4;
let area2 = calcularAreaRectangulo(baseIngresada, alturaIngresada);
console.log("El área del rectángulo es: " + area2);