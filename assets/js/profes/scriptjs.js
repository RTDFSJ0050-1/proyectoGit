const saludo = 'Hola, bienvenido al curso RTD FSJ 0050-1';
let numero = 2;
{ 
	let alternador = 5;
	let resultado = alternador + 50; // 55
	console.log(resultado);
	console.log(alternador); // Esto imprimirá 5
	resultado = resultado + alternador; // 55 + 5 = resultado es 60
	alternador = resultado - 45; // alternador es 15
	console.log(alternador); // Esto imprimirá 15
	resultado = resultado + alternador; // 60 + 15 = 75
	console.log(resultado); // Esto imprimirá 75
	console.log(alternador); // Esto imprimirá 15
	console.log(typeof alternador); // Esto imprimirá 'number'
}
var datoGlobal = 'Este dato es accesible en todo el script';
console.log(saludo);
console.log(datoGlobal);

//suma simple
let numero1;
let numero2;

let suma;
numero1 = 15;
numero2 = 10;
suma = numero1 + numero2;
console.log('La suma de ' + numero1 + ' y ' + numero2 + ' es: ' + suma);

//resta simple
let resta;
resta = numero2 - numero1;
console.log('La resta de ' + numero2 + ' y ' + numero1 + ' es: ' + resta);

//multiplicacion simple
let multiplicacion;
multiplicacion = numero1 * numero2;
console.log('La multiplicación de ' + numero1 + ' y ' + numero2 + ' es: ' + multiplicacion);

//division simple
let division;
division = numero2 / numero1;
console.log('La división de ' + numero2 + ' y ' + numero1 + ' es: ' + division);

//modulo simple
let modulo;
modulo = numero2 % numero1;
console.log('El módulo de ' + numero2 + ' y ' + numero1 + ' es: ' + modulo);

typeof saludo; 
typeof numero; 
typeof datoGlobal; 
typeof suma; 

console.log(typeof saludo); 
console.log(typeof numero); 
console.log(typeof datoGlobal); 
console.log(typeof suma);
console.log(typeof resta)
console.log(typeof alternador)

console.log(alternador); // Esto generará un error porque 'alternador' no está definido en este ámbito(fuera del bloque o los corchetes)