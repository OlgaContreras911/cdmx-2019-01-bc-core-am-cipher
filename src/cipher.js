window.cipher = {



  encode: (newValorOffset, newMayus) => {
    let primerCifrado = "";
    for (let i = 0; i < newMayus.length; i++) {
      let formulaCifrado = (newMayus.charCodeAt(i) - 65 + parseInt(newValorOffset)) % 26 + 65;
      let resultadoFinal = String.fromCharCode(formulaCifrado);
      primerCifrado += resultadoFinal;
      //document.getElementById('cajadecodificar').innerHTML= primerCifrado;
    }
    return primerCifrado
  },

  decode: (newValorOffset, newMayus) => {

    let primerCifrado = "";
    for (let i = 0; i < newMayus.length; i++) {
      let formulaCifrado = (newMayus.charCodeAt(i) + 65 - parseInt(newValorOffset)) % 26 + 65;
      let resultadoFinal = String.fromCharCode(formulaCifrado);
      primerCifrado += resultadoFinal;
    }
    return primerCifrado
  },




};
