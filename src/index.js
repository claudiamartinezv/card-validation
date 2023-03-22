import validator from './validator.js';

//Declarar variable botón 
const button = document.getElementById("btnValidar");

var arrCreditCard = new Array();

function reverseCard(){

    var creditCardNumber = document.getElementById("tarjetaCredito").value;
    arrCreditCard[arrCreditCard.length] = creditCardNumber;
    
    var reverse = creditCardNumber.reverse();
    console.log(reverse)
};

function multiplyCard(reverseCard){

    
};


/*console.log(creditCardNumber);

//Propiedad reverse es el array invertido
const reverse = creditCardNumber.reverse();
console.log(reverse);

console.log(creditCardNumber);*/

button.addEventListener("click",()=>{

    validator.isValid()
});

button.addEventListener("click",()=>{

    validator.maskify()
});

console.log(validator);







function newFunction() {
    alert(reverseCard());
}

