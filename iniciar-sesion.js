// ---- Para inicio de Sesión ----

const formulario = document.querySelector('form');


document.addEventListener ('DOMContentLoaded',()=>{
    // ----------------------------------------------
    // funcion para mostrar error
    function mostrarError(input, mensaje) {
        //acceder al div padre
        const divPadre = input.parentNode;
        //encuantra el elemento error-text
        const errorText = divPadre.querySelector('.error-text');
        //agrega la clase de error al elemento padre
        divPadre.classList.add('error');
        //agregamos mensaje de error
        errorText.innerText = mensaje;
        console.log(divPadre);
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
    
    // const formulario = document.querySelector('form');
    
    // formulario.querySelector('input').forEach(input => {
    // input.addEventListener('change', ()=>{
    //     const valor = input.value.trim();
    
    //     if (valor !== ''){
    //         eliminarError(input);
    //     }
    // })
    // })

    const inputs = formulario.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('change', () => {
        const valor = input.value.trim();
        if (valor !== '') {
            eliminarError(input);
        }
    });
});
    
    
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
        return false;
    }else if(!isEmail(email)){
        mostrarError(campo,mensaje);
        return false;
    }else{
        eliminarError(campo);
        return true;
    }
    }
    
    
    const validarFormulario = () =>{
    let validar = true;
    
    validar = validarEmail('email','El correo electrónico no es válido') && validar;
    
    validar = validarCampo('password','La contraseña es obligatoria') && validar;
    
    return validar;
    }
    
    
    // formulario.addEventListener('submit', event =>{
    // event.preventDefault();
    // if (!validarFormulario()){
    //     event.preventDefault()
    //     console.log("El formulario no es válido");
    // }else{
    //     event.preventDefault();
    //     console.log("El formulario es válido");
    // }
    // })

    formulario.addEventListener('submit', event => {
        event.preventDefault();
        if (!validarFormulario()) {
            console.log("El formulario no es válido");
        } else {
            console.log("El formulario es válido");
        }
    });
    
    
    })
    
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
    
    