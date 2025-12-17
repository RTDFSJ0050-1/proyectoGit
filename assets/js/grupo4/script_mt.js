//& Función para crear un email corporativo

function crearEmailCorporativo(usuario, empresa) {
    let email = usuario + "@" + empresa + ".com";
    return email;
}

// Uso con valores directos (literales)
let correo1 = crearEmailCorporativo("carlos.perez", "techsolutions");
console.log("El correo generado es: " + correo1);

// Uso con variables
let usuarioNuevo = "ana.garcia";
let empresaCliente = "innovacionweb";
let correo2 = crearEmailCorporativo(usuarioNuevo, empresaCliente);
console.log("El correo generado es: " + correo2);



//* Función para calcular precio con IVA (ejemplo 19%)

function calcularPrecioConImpuesto(precioSinImpuesto) {
    let impuesto = precioSinImpuesto * 0.19;
    let total = precioSinImpuesto + impuesto;
    return total;
}

// Uso directo
let precioFinal1 = calcularPrecioConImpuesto(1000);
console.log("El precio a pagar es: $" + precioFinal1);

// Uso con variables
let precioProducto = 5000;
let precioFinal2 = calcularPrecioConImpuesto(precioProducto);
console.log("El precio a pagar por el producto es: $" + precioFinal2);




//! Función de conversión de distancia
// Función para convertir kilómetros a millas
function convertirKmAMillas(kilometros) {
    const factorConversion = 0.621371;
    return kilometros * factorConversion;
}

// Uso directo
let distancia1 = convertirKmAMillas(10);
console.log("10 Kilómetros son: " + distancia1 + " millas.");

// Uso con variables
let distanciaViaje = 100;
let resultadoMillas = convertirKmAMillas(distanciaViaje);
console.log("La distancia del viaje en millas es: " + resultadoMillas);





//!funcion para ver datos de personaje 
// Función para mostrar ficha de personaje
function mostrarFichaPersonaje(nombre, clase, nivel) {
    console.log("--- FICHA DE JUGADOR ---");
    console.log("Nombre: " + nombre);
    console.log("Clase: " + clase);
    console.log("Nivel actual: " + nivel);
    console.log("------------------------");
}

// Uso directo
mostrarFichaPersonaje("Aragorn", "Montaraz", 10);

// Uso con variables
let nombreJugador = "Gandalf";
let claseJugador = "Mago";
let nivelJugador = 20;

mostrarFichaPersonaje(nombreJugador, claseJugador, nivelJugador);

