const abrir = document.getElementById('abrir-form');
const modal_container = document.getElementById('modal-container');
const cerrar = document.getElementById('cerrar');

abrir.addEventListener('click', () =>{
  modal_container.classList.add('show');
});

cerrar.addEventListener('click', () =>{
  modal_container.classList.remove('show');
});



const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const error = document.getElementById('error');
error.style.color = 'red';



function enviarFormulario(){
  console.log('enviando formulario.');
  var mensajesError = [];

  if(nombre.value === null || nombre.value === ''){
    mensajesError.push('Escribe tu nombre');
  }

  if(email.value === null || email.value === ''){
    mensajesError.push('Escribe tu email');
  }

  if(telefono.value === null || telefono.value === ''){
    mensajesError.push('Escribe tu teléfono');
  }

    error.innerHTML = mensajesError.join(', ');
  return false;
}



var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

form.addEventListener('submit', e => {
  e.preventDefault();
  checksInputs();
});

function checkImputs() {
  const nombreValue = nombre.value.trim();
  const emailValue = email.value.trim();
  const telefonoValue = telefono.value.trim();

  if (nombreValue === '') {
    setErrorFor(nombre, 'Rellene el campo nombre');
  }
}

function setErrorFor(input, mensaje) {
  const formControl = input;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerHTML = mensaje;
}

function isEmail(email) {
  return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(email);
}

// NO ME SALE REALIZAR LAS VALIDACIONES CORRECTAMENTE.