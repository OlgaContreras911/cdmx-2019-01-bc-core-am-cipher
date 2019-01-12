document.getElementById('aceptar').addEventListener("click", acept);
function acept(){
    const name=document.getElementById('name').value;
    userww=document.getElementById('userww');
    userww.innerHTML= 'Binevenido(a)' +name ;
   box1.classList.add('ocultar');
   box2.classList.remove('ocultar');    
}
const continuar = document.getElementById('continuar');
continuar.addEventListener('click', window.cipher.continuar);

evnet = encode 

event = decode