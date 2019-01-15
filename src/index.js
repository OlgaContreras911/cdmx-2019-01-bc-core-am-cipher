const acept = document.getElementById('aceptar');
acept.addEventListener("click", window.cipher.acept);
const continuar = document.getElementById('continuar');
continuar.addEventListener('click', window.cipher.continuar);
const finalizar= document.getElementById('finalizar');
finalizar.addEventListener('click', window.cipher.finalizar);
const encode= document.getElementById('codificar');
encode.addEventListener('click', window.cipher.encode);


/*const cajacodificar= document.getElementById("cajacodificar");
const codificar= document.getElementById('codificar');
const offset= parseInt(document.getElementById('numerosab').value);
let primerCifrado='';

codificar.addEventListener('click', msj);
function msj(){
    let mensajeIngresado= cajacodificar.value;
    let mayuscula= mensajeIngresado.toUpperCase();
    let mayus= mayuscula.charCodeAt();

    for(let i=0; i<mayuscula.length; i++){
    let letraAscii=mayuscula.charCodeAt(i);
    let formula=(letraAscii-65+offset)%26+65;
    let resultado= String.fromCharCode(formula);
    cifradoFinal+=resultado;
}
alert(cifradoFinal+'.');
}
*/
event = encode 

event = decode