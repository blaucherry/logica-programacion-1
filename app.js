
// alert('Hola Mundo');
// //prompt("Me indicas un número por favor:");
// //3 Palabras reservadas para indicar como se va a comportar el cuadro del prompt
// //let, cons y var
// //vamos a usar el var
// //CamelCase "nombreDeVariable", el nombre de las variables debe tener sentido
// let numUsuario = prompt("Me indicas un número por favor:");
// //Almacenamos la variable en la consola
// console.log(numUsuario); //Javascript es sensible a las mayúsculas

//Agrupar variables es una buena práctica de programación
// let numSecreto = 6;
// let numUsuario = prompt("Me indicas un número por favor:");



// console.log(numUsuario); //Javascript es sensible a las mayúsculas

// if (numUsuario == numSecreto){
//     alert("Acertaste el número");
// }

// Muestra una alerta con el mensaje "¡Bienvenida y bievenido a nuestro sitio web!".
// Declara una variable llamada nombre y asígnale el valor "Luna".
// Crea una variable llamada edady asígnale el valor 25.
// Establece una variable numeroDeVentas y asígnale el valor 50.
// Establece una variable saldoDisponible y asígnale el valor 1000.
// Muestra una alerta con el texto "¡Error! Completa todos los campos".
// Declara una variable llamada mensajeDeError y asígnale el valor "¡Error! Completa todos los campos". Ahora muestra una alerta con el valor de la variable mensajeDeError .
// Utiliza un prompt para preguntar el nombre del usuario y almacénalo en la variable nombre .
// Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edad.
// Ahora, si la edad es mayor o igual a 18, muestra una alerta con el mensaje "¡Puedes obtener tu licencia de conducir!".

alert("¡Bienvenida y bienvenido a nuestro sitio web!");

let nombre = "Luna";
let edady = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;

let mensajeDeError = "¡Error! Completa todos los campos.";

nombre = prompt("Me indicas tu nombre por favor");
edady = prompt("Me indicas tu edad por favor");

if(edady >= 18){
    alert("¡Puedes obtener tu licencia de conducir!");
}else{
    alert(mensajeDeError);
}


