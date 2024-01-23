var personas = [];

        function agregarPersona() {
            var nombre = document.getElementById('nombre').value;
            var edad = parseInt(document.getElementById('edad').value);

            if (nombre && !isNaN(edad)) {
                personas.push({ nombre: nombre, edad: edad });
                actualizarLista();
                document.getElementById('nombre').value = '';
                document.getElementById('edad').value = '';
            }
        }

        function actualizarLista() {
            var listaPersonasElemento = document.getElementById('listaPersonas');
            listaPersonasElemento.innerHTML = '';

            var personasMayores = personas.filter(function(persona) {
                return persona.edad >= 18;
            });

            personasMayores.sort(function(a, b) {
                return a.nombre.localeCompare(b.nombre);
            });

            personasMayores.forEach(function(persona) {
                var listItem = document.createElement('li');
                listItem.textContent = persona.nombre + ' - Edad: ' + persona.edad;
                listaPersonasElemento.appendChild(listItem);
            });
        }