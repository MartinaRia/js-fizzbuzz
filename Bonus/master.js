
var listaItems = ""

for (var i = 1; i <= 100; i++) { //Elenco di numeri da 1 a 100

  if ((i%3 == 0) && (i%5 == 0)) {

    listaItems += "<li>" + '<span class="fizz"><img src="img/fizz.png" alt="Fizz"><div class="tooltip"><p>FizzFizz</p></div></span>'+'<span class="buzz"><img src="img/buzz.png" alt="Buzz"><div class="tooltip-buzz"><p>Buzzzz</p></div></span>' + "</li>"

  } else if (i%3 == 0) {

    listaItems += "<li>" + ' <div class="fizz"><img src="img/fizz.png" alt="Fizz"><div class="tooltip"><p>FizzFizz</p></div></div> ' + "</li>"

  } else if (i%5 == 0) {

    listaItems += "<li>" + ' <div class="buzz"><img src="img/buzz.png" alt="Buzz"><div class="tooltip-buzz"><p>Buzzzz</p></div></div> ' + "</li>"

  } else {

    listaItems += "<li>" + i + "</li>"

  }

  document.getElementById('id').innerHTML = "<ul>" + listaItems + "</ul>";

}
