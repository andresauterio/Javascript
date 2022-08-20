

// var suma = 4;  // var alcance global
// let nombre1 = 'pablo'; // alcance local
// const PI = 3.14; // es bueno declararla en mayúscula constante no se puede cambiar el valor//
// suma = 20;

// let numero1 = 1;
// let numero2 = 2;

// let resultado = numero1 + numero2;
// prompt // ingresar datos en la pantalla
// let nombre = prompt( 'Ingrese su Nombre para comenzar');
// let saludo = "Hola " + nombre + ", Bienvenido a mi sitio Web, presiona continuar"
// console.log (nombre);
// alert (saludo);
// let edad = prompt (' Cuantos años tenes ?');
// let años = "Te queda poco....disfruta gracias"
// alert (años);
// let si = true;
// let continuar = prompt ('Queres continuar?');
// if (continuar == si) {
//   prompt  ("bueno, sigamos");
// }
// else {
//     prompt ("chau");
//}

// const animal= prompt ("ingresa la especie de tu mascota");

// 
// if (animal == 'loro'){
// alert("Tu mascota es un loro");
// } else if (animal=="perro"){
//  alert (" es perro");
// }else if (animal=="gato"){
// alert ("es un gato");
// }else (animal == "loro")
// alert( "chau");
// 
// 

// const edad = Number(prompt("Decime tu edad, para poder ingresar deber ser mayor de edad"));
// let saludo = "Bienvenido al sitio"

// if (edad > 18){
//     alert("Podes ingresar" + ", " + saludo);
// }else if (edad < 21){
//     alert("Todavía sos menor");
// }else if  (isNaN(edad)){
//     alert("Debes ingresar un valor numerico");
//     alert("Debes volver a ingresar");

// }else {
//     alert("Gracias por ingresar");
// }
// const anioNacimiento = Number(prompt("ingresa tu año de nacimiento"));
// const anioActual = 2022;
// const condicion =  (anioActual - anioNacimiento) >= 21;
// const diferencia = (anioActual - anioNacimiento);




// if (condicion) {
//     alert ("felicitaciones pudiste entrar ya que tienes" + " "+ diferencia + " " + "años");
// }else if (diferencia > 14){
//     alert("no te desanimes "+ diferencia + "años puedes venir a comprar acá");
// }else{
//  alert ("uuh, sos menor, no puedes entrar tenes" + " "+ diferencia + " " +"años");
// }

//DESAFIO

const inputValue = Number(prompt("Ingresá un número para saber la tabla del mismo"));


for (let i = 0; i <= 10; i++) {
    const resultado = i * inputValue
    if (isNaN(inputValue)) {
        alert("Debes ingresar un valor numérico");
        break;
    }
    alert("el resultado de " + " " + i + " * " + inputValue + " = " + resultado);
}
alert("Muy bien ahora sabes la tabla del " + " " + inputValue)
let nombre = prompt("ok, ahora decime tu nombre");
alert(`Gracias ${nombre}`);
const anios = Number(prompt("Gracias" + " " + nombre + " " + "Cuantos años tenes?"));
const anioActual = 2022;
let edad = (anioActual - anios);
if (anioActual - anios) {
    let respuesta = prompt("Naciste en el año" + " " + edad + "" + " " + "?");
} else if (respuesta === "si") {
    alert("Gracias por tu respuesta");
} else {
    alert("No entiendo que esta pasando");
}