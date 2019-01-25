const codificar = document.getElementById('codificar');
const decodificar = document.getElementById('decodificar');
let valorOffset = document.getElementById('numerosab');
let mayus = document.getElementById('cajacodificar');
let cajaDecodificar = document.getElementById('cajadecodificar')
let buttonAceptar = document.getElementById('aceptar')
let buttonContinuar = document.getElementById('continuar')
let buttonFinalizar = document.getElementById('finalizar')
let buttonReiniciar = document.getElementById('reiniciar')

codificar.addEventListener('click', () => {

  let newValorOffset = valorOffset.value;
  let newMayus = mayus.value;
  const resultadoImpreso = window.cipher.encode(newValorOffset, newMayus)
  cajaDecodificar.innerHTML = resultadoImpreso;


});
decodificar.addEventListener('click', () => {

  let newValorOffset = valorOffset.value;
  let newMayus = mayus.value;
  window.cipher.decode(newValorOffset, newMayus)
  const resultadoImpreso2 = window.cipher.decode(newValorOffset, newMayus)
  cajaDecodificar.innerHTML = resultadoImpreso2;
});

const acept = () => {
  const name = document.getElementById('name').value;
  const userww = document.getElementById('userww');
  const box1 = document.getElementById("box1");
  const box2 = document.getElementById("box2");

  userww.innerHTML = 'Bienvenido(a) ' + name;
  box1.classList.add('ocultar');
  box2.classList.remove('ocultar');
}

buttonAceptar.addEventListener('click', acept)


const continuar = () => {
  const box2 = document.getElementById("box2")
  const box3 = document.getElementById("box3")

  box2.classList.add('ocultar');
  box3.classList.remove('ocultar');
}
buttonContinuar.addEventListener('click', continuar)

const finalizar = () => {
  const box1 = document.getElementById("box1")
  const box3 = document.getElementById("box3")

  box3.classList.add('ocultar');
  box1.classList.remove('ocultar');
  location.reload(true);
}
buttonFinalizar.addEventListener('click', finalizar)

const reiniciar = () => {
  document.getElementById('numerosab').value = '';
  document.getElementById('cajacodificar').value = '';
  document.getElementById('cajadecodificar').innerHTML = '';
}

buttonReiniciar.addEventListener('click', reiniciar)
