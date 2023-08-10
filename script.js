const screen = document.querySelector('.screen');

// AGREGAR A LA PANTALLA AL PRESIONAR LOS BOTONES
const buttons = document.querySelectorAll('.button');

function agregarALaPantalla(value) {
	screen.value += value;
}

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		agregarALaPantalla(button.value);
	});
});

// LIMPIAR LA PANTALLA AL PRESIONAR "C"
const delateButton = document.querySelector('.delate');

function limpiarPantalla() {
	screen.value = '';
}

delateButton.addEventListener('click', limpiarPantalla);

// CALCULAR AL PRESIONAR "="
const resultButton = document.querySelector('.result');

function calcular() {
	try {
		screen.value = eval(screen.value);
	} catch {
		screen.value = 'SyntaxError';
	}
}

resultButton.addEventListener('click', calcular);
