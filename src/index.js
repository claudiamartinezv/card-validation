import validator from './validator.js';

//Declarar e inicializar las variables
const button = document.getElementById("btnValidar");
let nombre = document.getElementById("nombre");
let tarjetaCredito = document.getElementById("tarjetaCredito");
let fecha = document.getElementById("fecha");
let cvv = document.getElementById("cvv");


button.addEventListener("click", function(e){
    e.preventDefault();  //Evitar que se recargue la página al tiro
    let creditCardNumber = tarjetaCredito.value;
    
    const val = validator.isValid(creditCardNumber);

}); 
/*
    const mask = validator.maskify(creditCardNumber);
    

    let msjValidator;
    if(val){
        msjValidator = "Su tarjeta " + mask + " es válida. ¡Gracias por su suscripción!"
    } else{
        msjValidator = "Su tarjeta " + mask + "no es válida. Intente nuevamente."   
    }
    alert(msjValidator);
*/










