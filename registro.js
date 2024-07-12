const formularioRegistro = document.getElementById('formularioRegistro');

formularioRegistro.addEventListener('submit', function(event) {
    event.preventDefault(); // Detener el envío del formulario

    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const checkBox = document.getElementById('terminos');

    let errorMessages = [];

    // Validar campos
    if (nombre === '') {
        errorMessages.push('Por favor, ingresa tu nombre');
    }

    if (apellido === '') {
        errorMessages.push('Por favor, ingresa tu apellido');
    }

    if (email === '') {
        errorMessages.push('Por favor, ingresa tu email');
    } else if (!validarEmail(email)) {
        errorMessages.push('Por favor, ingresa un correo electrónico válido');
    }

    if (password === '') {
        errorMessages.push('Por favor, ingresa tu contraseña');
    }

    if (!checkBox.checked) {
        errorMessages.push('Debes aceptar los términos y condiciones');
    }

    // Mostrar errores o enviar formulario
    if (errorMessages.length > 0) {
        displayErrors(errorMessages);
    } else {
        formularioRegistro.submit(); // Enviar el formulario si no hay errores
    }
});

function displayErrors(errors) {
    // Limpiar errores anteriores
    const errorDivs = document.querySelectorAll('.error-text');
    errorDivs.forEach(div => div.innerHTML = '');

    errors.forEach(function(error) {
        const errorPara = document.createElement('p');
        errorPara.textContent = error;
        errorDivs[0].appendChild(errorPara); // Cambiar para mostrar el primer error en un div
    });
}

// Función para validar un correo electrónico utilizando una expresión regular
function validarEmail(email) {
    const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresionRegular.test(email);
}
