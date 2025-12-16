//Repaso JS nativo básico

//Scope y declaración de variables
//Variables que se puede reasignar
//scope de bloque
let nombre = "Juan";
//scope global
var edad = 30;
//Constantes
const PI = 3.1416;

//Funciones matemáticas básicas y operadores aritméticos
//Operadores: + - * / %

//ejemplo suma
let numeroA = 20;
let numeroB = 10;
let sumaTotal = numeroA + numeroB;
console.log("La suma de " + numeroA + " y " + numeroB + " es: " + sumaTotal);

//ejemplo resta
let restaTotal = numeroA - numeroB;
console.log("La resta de " + numeroA + " y " + numeroB + " es: " + restaTotal);

//ejemplo multiplicación
let multiplicacionTotal = numeroA * numeroB;
console.log("La multiplicación de " + numeroA + " y " + numeroB + " es: " + multiplicacionTotal);

//ejemplo división
let divisionTotal = numeroA / numeroB;
console.log("La división de " + numeroA + " y " + numeroB + " es: " + divisionTotal);

//ejemplo módulo
let moduloTotal = numeroA % numeroB;
console.log("El módulo de " + numeroA + " y " + numeroB + " es: " + moduloTotal);

//lowercamelcase para nombrar variables y funciones
//nombreCompletoUsuario

//upperCamelCase para nombrar clases
//NombreCompletoUsuario

//snake_case para nombrar variables y funciones
//nombre_completo_usuario
//trabajo_grupal_js para nombrar archivos

//Estructuras condicionales
//if, else if, else
let edadUsuario = 25;

if (edadUsuario < 18) {
	console.log("El usuario es menor de edad.");
} else if (edadUsuario >= 18 && edadUsuario < 65)	{
	console.log("El usuario es adulto.");
} else {
	console.log("El usuario es adulto mayor.");
}

//switch case
let diaSemana = 3;
let nombreDia;

switch (diaSemana) {
	case 1:
		nombreDia = "Lunes";
		break;
	case 2:
		nombreDia = "Martes";
		break;
	case 3:
		nombreDia = "Miércoles";
		break;
	case 4:
		nombreDia = "Jueves";
		break;
	case 5:
		nombreDia = "Viernes";
		break;
	case 6:
		nombreDia = "Sábado";
		break;
	case 7:
		nombreDia = "Domingo";
		break;
	default:
		nombreDia = "Día no válido";
		break;
}
console.log("El día de la semana es: " + nombreDia);

function suma(a, b) {
	let nombreSuma = "Suma de dos números";
	console.log(nombreSuma);
	return a + b;
}
//se comenta el codigo porque la variable nombreSuma no es accesible desde aqui
/*console.log("El resultado de la suma es: " + suma(5, 10)+nombreSuma);*/
