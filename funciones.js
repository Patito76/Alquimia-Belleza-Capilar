
saludar();

// uilizacion de la funcion
// 1-DECLARACION
function saludar() {
    console.log("hola,soy una funcion");
}

// 2-EJECUCION
saludar();
saludar();

//--PARAMETROS
function saludarPersonalizado(persona) {
    console.log(`¡Bienvenido ${persona} !`);/*backticks*/
    // console.log("¡Bienvenido " + persona + " !");
}
saludarPersonalizado("Fabio");
saludarPersonalizado("pedro");
saludarPersonalizado("matias");

// let persona = prompt("introduce tu nombre");

// saludarPersonalizado(persona);
// saludarPersonalizado(prompt("nombre!"));

//--PARAMETROS MULTIPLES

function tablaMultiplicar(tabla, hasta = 10) {
    for (let i = 1; i <= hasta; i++) {
        console.log(`${tabla} X ${i} = ${(tabla * i)}`);
    }
}
let hasta = 15;
tablaMultiplicar(3, 5);
tablaMultiplicar(3);
tablaMultiplicar(5, hasta);

//--devolucion de valores(return)
function sumar(a, b) {
    return a + b;
}


// let num1 = parseInt(prompt("ingrese el primer numero"));
// console.log(typeof num1);
// let num2 = parseInt(prompt("ingrese el segundo numero"));
// let resultado = sumar(num1,num1);

// let resultado = sumar(5,5);
// console.log(resultado);
// console.log(sumar(10,10));

// --FUNCIONES ANONIMAS
const imprimirConsola = function (mensaje) {
    console.log(mensaje);
}

//funcion flecha (arrow function)
const imprimirAlert = mensaje => alert(mensaje);

function saludar2(nombre, mostrar/*funcion*/) {
    const saludo = `hola ${nombre}`;
    mostrar(saludo);
}

// saludar2("maria",imprimirConsola);
saludar2("Fabio", imprimirAlert);
