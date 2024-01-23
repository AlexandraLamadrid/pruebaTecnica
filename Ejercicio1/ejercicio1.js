function esPalindromo(cadena) {
    cadena = cadena.replace(/\s/g, '').toLowerCase();
    return cadena === cadena.split('').reverse().join('');
}

function verificarPalindromo() {
    var inputCadena = document.getElementById('cadena').value;
    var resultadoElemento = document.getElementById('resultado');

    if (esPalindromo(inputCadena)) {
        resultadoElemento.textContent = '¡Es un palíndromo!';
    } else {
        resultadoElemento.textContent = 'No es un palíndromo.';
    }
}
