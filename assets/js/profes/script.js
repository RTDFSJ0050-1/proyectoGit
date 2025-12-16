function mostrarexterno() {
	alert('Más información desde un archivo externo');
} 
// getElementById para acceder a un elemento HTML por su ID
let miDivFila = document.getElementById('miDivFila');
console.log(miDivFila);
// Modificar el contenido del div
miDivFila.innerHTML = '<div class="col col-lg-2 border border-warning">Este div cambio de 3 a 1 caja</div>';

// Cambiar el estilo del párrafo con id "lorem"
let parrafoLorem = document.getElementById('lorem');
parrafoLorem.innerText = 'Este es un texto modificado desde JavaScript.';
parrafoLorem.style.color = 'blue';
parrafoLorem.style.fontWeight = 'bold';
parrafoLorem.style.fontSize = '18px';

// Función para saludar al usuario con el boton mostrar
function mostrar(){
	// Obtener el valor del input y mostrar el saludo
	const nombreInput = document.getElementById('nombre');
	// Obtener el elemento de salida
	const salida = document.getElementById('salida');
	//Obtener el valor del nombre ingresado
	const nombre = nombreInput.value;
	// Validar si el nombre no está vacío
	if(nombre.trim() === ''){
		//si esta vacío se imprime un mensaje de error
		salida.innerText = 'Por favor, ingresa un nombre.';
		return;
	}else{
		//si tiene contenido se imprime el saludo
		salida.innerText = 'Hola, ' + nombre + '!';
	}
}
let contador = 0;
function formatear(){
	const nombre = document.getElementById('nombre').value.trim();
	const historial = document.getElementById('historial');
	/*if (nombre === ''){
		return;
	}
	 */ 
	if(!nombre)return;
	//contador = contador + 1
	contador++;
  	//Agregamos HTML con formato (negritas, énfasis)
	const item = `<p class="historial-item"><strong>${contador}.</strong> Guardado: <em>${nombre}</em></p>`;
	historial.innerHTML += item;
}

//Función para limpiar el historial
function finalizar(){
	const nombre = document.getElementById('nombre').value.trim();
	const mensajeBase = nombre ? `Proceso finalizado.` : 'Proceso finalizado.';
	alert(mensajeBase + ' El historial será limpiado.');
	
	const historial = document.getElementById('historial');// Obtener el elemento del historial
	historial.innerHTML = '';// Limpiar el contenido del historial
	contador = 0; // Reiniciar el contador

}