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

//obtener el formulario
const formulario = document.getElementById('formulario');

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

// function validarFormulario(){
    //obtener los valores de los campos
 const nombre = document.getElementById('nombre').value;
 const email = document.getElementById('email').value;
 const contraseña = document.getElementById('contraseña').value;
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


// ---- Para inicio de Sesión ----


document.addEventListener('DOMContentLoaded',()=>{



// ----------------------------------------------
// funcion para mostrar error
const mostrarError = (input,mensaje) =>{
    //acceder al div padre
    const divPadre = input.parentNode;
    //encuantra el elemento error-text
    const errorText = divPadre.querySelector('.error-text');
    //agrega la clase de error al elemento padre
    divPadre.classList.add('error');
    //agregamos mensaje de error
    errorText.innerText = mensaje;
    // console.log(divPadre);
}

const input = document.querySelector('#password');
const mensaje = 'Campo obligatorio';

const eliminarError = input=>{
    //Acceder a la etiqueta contenedora
    const divPadre = input.parentNode;
    divPadre.classList.remove('error');
    const errorText = divPadre.querySelector('.error-text');
    errorText.innerText = '';
}

const formulario = document.querySelector('form');

formulario.querySelector('input').forEach(input => {
    input.addEventListener('change', ()=>{
        const valor = input.value.trim();

        if (valor !== ''){
            eliminarError(input);
        }
    })
})


function validarCampo(campoId, mensaje){
    const campo = document.getElementById(campoId);
    const value = campo.value.trim();

    if(value ==''){
        mostrarError(campo, mensaje);
        return false;
    }else{
        eliminarError(campo);
        return true;
    }
}


function isEmail (email){
    const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresionRegular.test(email);
}

function validarEmail(campoId, mensaje){
    const campo = document.getElementById(campoId);
    const email = campo.value.trim();

    if(email ===''){
        mostrarError(campo, 'El correo electrónico es obligatorio');
        return false
    }else if(isEmail(email)){
        mostrarError(campo,mensaje);
        return false
    }else{
        eliminarError(campo);
        return true
    }
}


const validarFormulario = () =>{
    let validar = true;

    validar = validarEmail('email','El correo electrónico no es válido') && validar;

    validar = validarCampo('password','La contraseña es obligatoria') && validar;

    return validar;
}


formulario.addEventListener('submint', event =>{
    event.preventDefault();
    if (!validarFormulario()){
        event.preventDefault()
        console.log("El formulario no es válido");
    }else{
        event.preventDefault();
        console.log("El formulario es válido");
    }
})

})
// mostrarError(document.querySelector('#password'),'INGRESA ESTE CAMPO');

