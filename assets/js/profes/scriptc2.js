//Sentencia if...else
let numero=18;
let mensaje;
if (numero>=18){
	mensaje="Es mayor de edad";
}else {
	mensaje="Es menor de edad";
}
console.log(mensaje);

//Sentencia if...else if...else
let calificacion=100;
let resultado;
if (calificacion==100){
	resultado="Aprobado con honores";
} else if (calificacion>=80 && calificacion<100){
	resultado="Aprobado sin examen";
} else if (calificacion>=60){
	resultado="Aprobado con examen";
} else {
	resultado="Reprobado";
}
console.log(resultado);

//Sentencia switch
let dia=3;
let nombreDia;
switch (dia){
	case 1:
		nombreDia="Lunes";
		break;
	case 2:
		nombreDia="Martes";
		break;
	case 3:
		nombreDia="Miércoles";
		break;
	case 4:
		nombreDia="Jueves";
		break;
	case 5:
		nombreDia="Viernes";
		break;
	case 6:
		nombreDia="Sábado";
		break;
	case 7:
		nombreDia="Domingo";
		break;
	default:
		nombreDia="Día no válido";
}
console.log(nombreDia);

//Sentencia switch con múltiples casos
let numeroMes=4;
let estacion;
switch (numeroMes){
	case 12:
	case 1:
	case 2:
		estacion="Verano";
		break;
	case 3:
	case 4:
	case 5:
		estacion="Otoño";
		break;
	case 6:
	case 7:
	case 8:
		estacion="Invierno";
		break;
	case 9:
	case 10:
	case 11:
		estacion="Primavera";
		break;
	default:
		estacion="Mes no válido";
}
console.log(estacion);

//Switch menú
let opcion=2;
let accion;
switch (opcion){
	case 1:
		accion="Iniciar sesión";
		break;
	case 2:
		accion="Registrarse";
		break;
	case 3:
		accion="Recuperar contraseña";
		break;
	default:
		accion="Opción no válida";
}
console.log(accion);

//Ejercicio con strings
let nombreMes="octubre";
let mensaje2;
if(nombreMes=="octubre"){
	mensaje2='Usted es Libra o Escorpio';
}else if(nombreMes=="noviembre"){
	mensaje2='Usted es Escorpio o Sagitario';
}else if(nombreMes=="diciembre"){
	mensaje2='Usted es Sagitario o Capricornio';
}else{
	mensaje2='Mes no válido para determinar el signo zodiacal';
}
console.log(mensaje2);

//Ejercicio switch con booleanos
let esEstudiante=false;
let descuento;
switch (esEstudiante){
	case true:
		descuento="Tiene derecho a un descuento del 15%";
		break;
	case false:
		descuento="No tiene derecho a un descuento";
		break;
}
console.log(descuento); 