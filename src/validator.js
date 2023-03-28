const validator ={

  isValid: function(creditCardNumber){

    let numberArray = creditCardNumber.split(""); //Pasar de String a Array
    let creditCardNumberReverse = numberArray.reverse(); //Reversar el array
    let arrayCreditCard = [];
    let sum = 0;
    let sumDoubled = 0;


    for (let i=0; i<creditCardNumberReverse.length; i++){ //Recorre el Array Reversado

        if (i % 2 === 0) {  //i posición par
            arrayCreditCard.push(Number(creditCardNumberReverse[i]));

        } else { //i posición impar
            (arrayCreditCard.push(creditCardNumberReverse[i]*2));
        } 

    };



    for (let i=creditCardNumberReverse.lenght - 1; i>=0; i--){
      let actualDigit = parseInt(creditCardNumberReverse.charAt(i));
      if((creditCardNumberReverse.lenght - i)% 2 === 0){
        if((actualDigit *=2)>9) actualDigit -=9;
        sumDoubled += actualDigit;
      } else {
        sum += actualDigit;
      }
    }
    const totalSum = sumDoubled + sum;
    console.log(totalSum);
    return totalSum % 10 === 0;
    
  }}

  export default validator;


/*    

  //Ocultar los números de la tarjeta excepto los cuatro últimos
  maskify(creditCardNumber){
    creditCardNumber = creditCardNumber.replace(/\s/g,'');
    
    let maskNumber ='';
    for (let i=0; i<creditCardNumber.lenght - 4; i++){
      maskNumber +="*";
    }
    maskNumber += creditCardNumber.substring(creditCardNumber.lenght - 4);
    return maskNumber;
  },
*/

