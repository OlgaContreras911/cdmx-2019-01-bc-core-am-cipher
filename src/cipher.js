window.cipher = {
  
  continuar:() => {
    const box2 = document.getElementById("box2")
    const box3 = document.getElementById("box3")
    
    box2.classList.add('ocultar');
    box3.classList.remove('ocultar');
  },

  finalizar:() => {
    const box1 = document.getElementById("box1")
    const box3 = document.getElementById("box3")
  
    box3.classList.add('ocultar');
    box1.classList.remove('ocultar');
    location.reload (true);
  },
  
  encode:() => { 
    let primerCifrado="";    
    let valorOffset= parseInt(document.getElementById('numerosab').value);
    let mayus = document.getElementById('cajacodificar').value.toUpperCase();

    for(let i=0; i < mayus.length; i++){
      let formulaCifrado= (mayus.charCodeAt(i)- 65 + valorOffset) % 26 + 65;
      let resultadoFinal= String.fromCharCode(formulaCifrado);
      primerCifrado += resultadoFinal;
      document.getElementById('cajadecodificar').innerHTML= primerCifrado;
    }      
  },

    decode:()=>{

      let primerCifrado="";
      let valorOffset= parseInt(document.getElementById('numerosab').value);
      let mayus = document.getElementById('cajacodificar').value.toUpperCase();
      for(let i=0; i < mayus.length; i++){
        let formulaCifrado= (mayus.charCodeAt(i)+ 65 - valorOffset) % 26 + 65;
        let resultadoFinal= String.fromCharCode(formulaCifrado);
        primerCifrado += resultadoFinal;
        document.getElementById('cajadecodificar').innerHTML= primerCifrado;
      }
  },

  acept:() => {
    const name = document.getElementById('name').value;
    const userww = document.getElementById('userww');
    const box1 = document.getElementById("box1");
    const box2 = document.getElementById("box2");

    userww.innerHTML= 'Binevenido(a) ' +name;
    box1.classList.add('ocultar');
    box2.classList.remove('ocultar');    
},


};
