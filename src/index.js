

const acept = document.getElementById('aceptar');
acept.addEventListener("click", window.cipher.acept);
const continuar = document.getElementById('continuar');
continuar.addEventListener('click', window.cipher.continuar);
const finalizar= document.getElementById('finalizar');
finalizar.addEventListener('click', window.cipher.finalizar);

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

const codificar= document.getElementById('codificar');
const decodificar= document.getElementById('decodificar');
let valorOffset= document.getElementById('numerosab');
let mayus = document.getElementById('cajacodificar');

codificar.addEventListener('click', ()=>{

    let newValorOffset= parseInt(valorOffset).value;
    let newMayus = mayus.value.toUpperCase();
    window.cipher.encode(newValorOffset, newMayus)    
});
decodificar.addEventListener('click', ()=>{

    let newValorOffset= parseInt(valorOffset).value;
    let newMayus = mayus.value.toUpperCase();
    window.cipher.decode(newValorOffset, newMayus)
});