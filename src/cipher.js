window.cipher = {



  encode: (newValorOffset, newMayus) => {
    let primerCifrado = "";
    
    for (let i = 0; i < newMayus.length; i++) {

    if (newMayus.charCodeAt(i) >= 97 && newMayus.charCodeAt(i) <=  122){
      let formulaCifrado = (newMayus.charCodeAt(i) - 97 + parseInt(newValorOffset)) % 26 + 97;
      let resultadoFinal = String.fromCharCode(formulaCifrado);
      primerCifrado += resultadoFinal;
    } else if (newMayus.charCodeAt(i) >= 65 && newMayus.charCodeAt(i) <=  90){
     
      let formulaCifrado = (newMayus.charCodeAt(i) - 65 + parseInt(newValorOffset)+26) % 26 + 65;
      let resultadoFinal = String.fromCharCode(formulaCifrado);
      primerCifrado += resultadoFinal;

      } else{
      
      let resultadoFinal = String.fromCharCode(newMayus.charCodeAt(i));
      primerCifrado += resultadoFinal;

      }
      //document.getElementById('cajadecodificar').innerHTML= primerCifrado;
    }
    return primerCifrado
  },

  decode: (newValorOffset, newMayus) => {

    let primerCifrado = "";
    for (let i = 0; i < newMayus.length; i++) {
      if (newMayus.charCodeAt(i) >= 97 && newMayus.charCodeAt(i) <=  122){

        let formulaCifrado = (newMayus.charCodeAt(i) - 122 - parseInt(newValorOffset)) % 26 + 122;
        let resultadoFinal = String.fromCharCode(formulaCifrado);
        primerCifrado += resultadoFinal;
      
      } else if (newMayus.charCodeAt(i) >= 65 && newMayus.charCodeAt(i) <=  90){

      let formulaCifrado = (newMayus.charCodeAt(i) + 65 - parseInt(newValorOffset)) % 26 + 65;
      let resultadoFinal = String.fromCharCode(formulaCifrado);
      primerCifrado += resultadoFinal;
      } else{
      
        let resultadoFinal = String.fromCharCode(newMayus.charCodeAt(i));
        primerCifrado += resultadoFinal;
  
        }
    }
    return primerCifrado
  },




};
