const acept = document.getElementById('aceptar');
acept.addEventListener("click", window.cipher.acept);
const continuar = document.getElementById('continuar');
continuar.addEventListener('click', window.cipher.continuar);
const finalizar= document.getElementById('finalizar');
finalizar.addEventListener('click', window.cipher.finalizar);


/*const cajacodificar= document.getElementById("cajacodificar");
const codificar= document.getElementById('codificar');
const offset= parseInt(document.getElementById(numerosab));
let primerCifrado='';

codificar.addEventListener('click', mensaje1);
function mensaje1(){
    let mensajeIngresado= mensaje.value;
    let mayuscula= mensajeIngresado.toUpperCase();
    let mayuscula2= mayuscula.charCodeAt();

    for(let i=0; i<mayuscula.length; i++)
    let letraAscii=mayuscula.charCodeAt(i);
    let formula=(letraAscii+65-offset)%26+65;
    let resultado= String.fromCharCode(formula);
    cifradoFinal+=resultado;
}
alert(cifradoFinal+'.');*/
event = encode 

event = decode