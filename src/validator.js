const validator ={

  isValid: function (creditCardNumber){
    console.log(creditCardNumber.value, "****");
    let numberArray = creditCardNumber.split(""); //Pasar de String a Array
    let creditCardNumberReverse = numberArray.reverse(); //Reversar el array
    let arrayCreditCard = [];

    for (let i=0; i<creditCardNumberReverse.length; i++){ //Recorre el Array Reversado

        if (i % 2 === 0) {  //i posición par
            arrayCreditCard.push(Number(creditCardNumberReverse[i]));

        } else { //i posición impar
            (arrayCreditCard.push(creditCardNumberReverse[i]*2));
        } 

    };
        return arrayCreditCard;
  },

  //Ocultar los números de la tarjeta, excepto los últimos 4.
  maskify: function (creditCardNumber){
    creditCardNumber = creditCardNumber.replace(/\s/g,'');
    
    let maskNumber ='';
    for (let i=0; i<creditCardNumber.lenght - 4; i++){
      maskNumber +="*";
    }
    maskNumber += creditCardNumber.substring(creditCardNumber.lenght - 4);
    return maskNumber;
  },

}

  export default validator;


