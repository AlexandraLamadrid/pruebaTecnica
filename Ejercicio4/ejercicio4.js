function agregarAplicacion() {
    var nombreApp = document.getElementById('nombreApp').value.trim();
    var categoria = document.getElementById('categoria').value;

    if (nombreApp !== '') {
        var listaAplicaciones = document.getElementById('listaAplicaciones');
        var nuevaEntrada = document.createElement('li');
        nuevaEntrada.innerHTML = `
            <strong>#${listaAplicaciones.children.length + 1}</strong>
            ${nombreApp}
            ${categoria}
            <button onclick="eliminarAplicacion(this)">Eliminar</button>
        `;
        listaAplicaciones.appendChild(nuevaEntrada);
        document.getElementById('nombreApp').value = '';
    }
}

function eliminarAplicacion(botonEliminar) {
    var listaAplicaciones = document.getElementById('listaAplicaciones');
    listaAplicaciones.removeChild(botonEliminar.parentNode);
}