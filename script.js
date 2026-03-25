const form = document.getElementById('Formulario');

// getElementById - es un método que devuelve el elemento del documento con el ID especificado
// Dentro de paréntesis - Nombre del id a cargar en la variable
// Agregar validación en el evento submit del formulario
if (form) {
    form.addEventListener('submit', function (event) {
        const correo = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        if (nombre === '' || correo === '' || password === '') {
            alert('Por favor, complete todos los campos del formulario.');
            return false; // Evita que el formulario se envíe
        }
        return true; // Permite que el formulario se envíe si todos los campos están completos
    });
}
