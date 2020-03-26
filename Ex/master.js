//SOLUTION 1 ----------------------------

for (var i = 1; i <= 100; i++) { //Elenco di numeri da 1 a 100

  if (i%3 == 0) { //Se i, diviso per 3, ha resto uguale a 0:
    console.log("Fizz"); //stampalo ma anzichè il numero fai comparire la stringa Fizz

  } else if (i%5 == 0) { //Se i, diviso per 3, ha resto uguale a 0;
    console.log("Buzz"); //stampalo ma anzichè il numero fai comparire la stringa Buzz

  } else if ((i%3 == 0) && (i%5 == 0)){ //Se i, diviso per 3, ha resto uguale a 0 ma anche se diviso per 5 ha resto uguale a 0;
    console.log("FizzBuzz") //stampalo ma anzichè il numero fai comparire la stringa FizzBuzz

  } else { //Se nessuna delle condizioni precedenti si verifica;
    console.log(i) //stampa il numero
  }

}
