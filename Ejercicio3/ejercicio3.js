function verificarFizzBuzz() {
    var inputNumero = parseInt(document.getElementById('numero').value);
    var resultadoElemento = document.getElementById('resultadoFizzBuzz');

    if (!isNaN(inputNumero)) {
        resultadoElemento.textContent = obtenerResultadoFizzBuzz(inputNumero);
    } else {
        resultadoElemento.textContent = 'Por favor, ingresa un número válido.';
    }
}

function obtenerResultadoFizzBuzz(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) {
        return 'FizzBuzz';
    } else if (numero % 3 === 0) {
        return 'Fizz';
    } else if (numero % 5 === 0) {
        return 'Buzz';
    } else {
        return numero.toString();
    }
}