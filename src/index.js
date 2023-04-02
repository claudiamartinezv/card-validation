import validator from './validator.js';

//Declarar e inicializar las variables
const button = document.getElementById("btnValidar");
//let nombre = document.getElementById("nombre");
const tarjetaCredito = document.getElementById("tarjetaCredito");
//let fecha = document.getElementById("fecha");
//let cvv = document.getElementById("cvv");


button.addEventListener("click", function(e){ //e => event
  e.preventDefault();//Evitar que se recargue la página al tiro
  const creditCardNumber = tarjetaCredito.value;
  const val = validator.isValid(creditCardNumber);
  const mask = validator.maskify(creditCardNumber);
  console.log(val, mask);

  if(val === true){
    alert("Tarjeta válida n° " + mask);
  }
  else{
    alert("Tarjeta inválida");
  }
}); 












