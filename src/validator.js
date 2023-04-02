const validator ={

  isValid: function (creditCardNumber){

    const numberArray = creditCardNumber.split(""); //Pasar de String a Array
    const creditCardNumberReverse = numberArray.reverse(); //Reversar el array
    const arrayCreditCard = [];
    let total = 0; //Declara var para la suma de la tarjeta

    for (let i=0; i<creditCardNumberReverse.length; i++){ //Recorre el Array Reversado

      if (i % 2 === 0) {  
        arrayCreditCard.push(Number(creditCardNumberReverse[i]));
      } else {
        const product = creditCardNumberReverse[i]*2; 
        if(product>9){
          const separateNumber = product.toString().split("");
          const suma = Number(separateNumber[0]) + Number(separateNumber[1]);
          arrayCreditCard.push(suma);
        }
        else{
          arrayCreditCard.push(product);
        }
      } 
      console.log(arrayCreditCard);
      total = total + arrayCreditCard[i];  
        
    }
    return total % 10 === 0;
  },

  //Ocultar los números de la tarjeta, excepto los últimos 4.
  maskify: function (creditCardNumber){
    const creditCardMask = creditCardNumber.replace(/\s/g,'');
    let maskNumber ='';
    for (let i=0; i<creditCardMask.length - 4; i++){
      console.log(creditCardMask[i]);
      maskNumber +="#";
    }
    maskNumber += creditCardMask.substring(creditCardMask, (creditCardMask.length -4)); //revisar 
    console.log(maskNumber);
    return maskNumber;
  },

}
export default validator;


