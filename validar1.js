//seleccionar el formulario del DOM
const formulario = document.querySelector('form');

document.getElementById('formularioRegistro').addEventListener('submit', function(event) {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var checkBox = document.getElementById('terminos');

    var errorMessages = [];

    if (nombre === '') {
        errorMessages.push('Por favor, ingresa tu nombre');
    }

    if (apellido === '') {
        errorMessages.push('Por favor, ingresa tu apellido');
    }

    if (email === '') {
        errorMessages.push('Por favor, ingresa tu email');
    }

    if (password === '') {
        errorMessages.push('Por favor, ingresa tu contraseña');
    }

    if (!checkBox.checked) {
        errorMessages.push('Debes aceptar los términos y condiciones');
    }

    if (errorMessages.length > 0) {
        event.preventDefault();
        displayErrors(errorMessages);
    }
});

function displayErrors(errors) {
    var errorDiv = document.querySelector('.error-text');
    errorDiv.innerHTML = '';
    
    errors.forEach(function(error) {
        var errorPara = document.createElement('p');
        errorPara.textContent = error;
        errorDiv.appendChild(errorPara);
    });
}
document.getElementById('formularioIniciarSesion').addEventListener('submit', function(event) {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var errorMessages = [];

    if (email === '') {
        errorMessages.push('Por favor, ingresa tu email');
    }

    if (password === '') {
        errorMessages.push('Por favor, ingresa tu contraseña');
    }

    if (errorMessages.length > 0) {
        event.preventDefault();
        displayErrors(errorMessages);
    }
});

function displayErrors(errors) {
    var errorDiv = document.querySelectorAll('.error-text');
    
    errorDiv.forEach(function(div) {
        div.innerHTML = '';
        errors.forEach(function(error) {
            var errorPara = document.createElement('p');
            errorPara.textContent = error;
            div.appendChild(errorPara);
        });
    });
}
// ----------------------------------------------
// funcion para mostrar error
//const mostrarError = (input,mensaje) =>{
    //acceder al div padre
  //  const divPadre = input.parentNode;
    //encuantra el elemento error-text
    //const errorText = divPadre.querySelector('.error-text');
    //agrega la clase de error al elemento padre
   // divPadre.classList.add('error');
    //agregamos mensaje de error
   // errorText.innerText = mensaje;
    //console.log(divPadre);-->

//};

//function validarFormulario() {
//    var nombre = document.getElementById('nombre').value;
//    var apellido = document.getElementById('apellido').value;
//    var email = document.getElementById('email').value;
//    var password = document.getElementById('password').value;
    
    
    

  //  if (nombre === '' || apellido === '' || email === '' || password ==='') {
  //      alert('Por favor, complete todos los campos del formulario.');
  //      return false;
 //   }

   // return true;
//} 
// mostrarError(document.querySelector('#password'),'INGRESA ESTE CAMPO');

