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

//agregar un evento de escucha para cuando el se envie el formulario
formulario.addEventListener('submit', evento => {
    //detener el envio del formulario
    evento.preventDefault();

    //validar los campos del formulario
    if(validarFormulario()){
        //si todos los campos son validos,enviar el formulario
        formulario.submit();
    }
});

function validarFormulario(){
    //obtener los valores de los campos
 const nombre = document.getElementById('nombre').value;
 const email = document.getElementById('email').value;
 const contraseña = document.getElementById('password').value;
 const apellido =  document.getElementById('apellido').value;

    //validar cada campo
     if(nombre === ''){
    mostrarError('nombre','Por favor ingresa tu nombre')
    return false
     }
     if(apellido === ''){
    mostrarError('apellido','Por favor ingresa tu apellido')
    return false
     }
     if(!validarEmail(email)){
    mostrarError('email','Por favor ingresa un correo electronico valido')
    return false
     }
     if(contraseña === ''){
    mostrarError('contraseña','Por favor ingresa una contraseña')
    return false
     }else{
        return true;
    }
    
}  


// ----------------------------------------------------

//funcion para mostrar un mensaje de error
 function mostrarError(campo,mensaje){
     const campoError = document.getElementById(`${campo}-error`);
     campoError.innerText = mensaje;
 }
//funcion para validar un correo electronico utilizando una expresion regular
function validarEmail(email){
    const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresionRegular.test(email)
}


