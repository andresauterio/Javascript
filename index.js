
const redonda = 1;
const blanca = (redonda/2);
const negra = (redonda/4);
const corchea = (negra/2);
const semicorchea = (negra/4);
const fusa = (negra/8);
const semifusa = (negra/16);


function sonido (){
   alert("Una Redonda sonaría TA"+" "+ redonda +" "+ "Tiempo" );
    alert( "Una Blanca sonaría TA TA" +" " + blanca + " "+"1/2 Tiempos");
    alert("Una negra sonaría TA TA TA TA"+ " " + negra+ " "+"1/4 Tiempos");
    alert("Una Corchea sonaria TA TA TA TA TA TA TA TA"+" " +corchea+ " "+ " 1/8 Ocho Tiempos");
    alert("Una semicorchea sonaria TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA"+" " +semicorchea+ " " +"1/16 tiempos");
    alert("Una Fusa sonaria TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA"+" "+fusa +" "+ "1/32 tiempos");
    alert("Una Semifusa sonaria TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA TA"+" "+semifusa+" "+ "1/64 tiempos");
}

sonido();
function question(){
const pregunta = Number(prompt("cuantas corcheas entran en una redonda (1 tiempo)"));
if (pregunta==8){
    alert("Perfecto")
    question2();
}
else if(pregunta!==8){
const respuesta = prompt("Te equivocaste. Quieres repasar el contenido?");
}else if(respuesta==='si'){
    sonido();}
}
question();
function question2(){
const pregunta2 = Number(prompt("Que valor tiene una semifusa con respecto a una redonda?"));
if (pregunta2==64){
    alert("Perfecto")
    question3();
}
else if(pregunta2!==64){
    const respuesta = prompt("Te equivocaste. Quieres repasar el contenido?");
    }else if(respuesta=="si")
        sonido();
}
function question3(){
    const pregunta3 = Number(prompt("Que valor tienen 2 Redondas?"));
    if (pregunta3==2){
        alert("Perfecto")
        question4();
    }
    else if(pregunta3!==2){
        const respuesta = prompt("Te equivocaste. Quieres repasar el contenido?");
        }else if(respuesta=="si"){
            sonido();}
    else (respuesta!="si") 
    alert("Hasta Luego");
        }


// }
// function direccion(calle, numeracion){
//     const direccion = prompt("Ingrese su calle y numeración");
// }
// function edades(){
//     const edad = Number(prompt("Ingrese su edad"));

// if (edad>= 18) {
//     alert("eres mayor de edad");
// }else{
//     alert("todavia eres menor")
// }
    

// }


// nombre();
// direccion();
// edades();