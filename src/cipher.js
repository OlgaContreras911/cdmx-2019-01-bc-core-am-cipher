window.cipher = {
  
  continuar:() => {
  box2.classList.add('ocultar');
  box3.classList.remove('ocultar');
  },
  finalizar:() => {
  box3.classList.add('ocultar');
  box1.classList.remove('ocultar');
  location.reload (true);
  },

  encode:() => {

  },
  decode: () => {

  },
  acept:() => {
  const name=document.getElementById('name').value;
  userww=document.getElementById('userww');
  userww.innerHTML= 'Binevenido(a) ' +name ;
  box1.classList.add('ocultar');
  box2.classList.remove('ocultar');    
},


};
