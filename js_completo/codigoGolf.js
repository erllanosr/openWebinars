/*
En el juego de golf cada hoyo tiene un par que 
representa el número promedio de golpes
que se espera que haga un golfista para introducir 
la pelota en el hoyo.
Hay un nombre diferente dependiendo de qué tan 
por encima o por debajo del par estén tus golpes.
Tu función tomará los argumentos par y golpes. 
Retorna la cadena correcta según esta tabla que muestra 
los golpes en orden de mayor a menor prioridad: 


Golpes             Retornar
-------------------------------
1                 "Hole-in-one!"
<= par - 2        "Eagle"
par - 1           "Birdie"
par               "Par"
par + 1           "Bogey"
par + 2           "Double Bogey"
>= par + 3        "Go Home!"
par y golpes siempre serán numéricos y positivos. 
*/

function puntajeDeGolf(par, golpes) {
  if (golpes == 1) {
    return "Hole-in-one!";
  } else if (golpes <= par - 2) {
    return "Eagle";
  } else if (golpes == par - 1) {
    return "Birdie";
  } else if (golpes == par) {
    return "Par";
  } else if (golpes == par + 1) {
    return "Bogey";
  } else if (golpes == par + 2) {
    return "Double Bogey";
  } else if (golpes >= par + 3) {
    return "Go Home!";
  }
}

console.log(puntajeDeGolf(4, 8));

function clasificarValor(valor) {
  var respuesta;
  switch (valor) {
    case 1:
      respuesta = "alpha";
      break;
    case 2:
      respuesta = "beta";
      break;
    case 3:
      respuesta = "gamma";
      break;
    case 4:
      respuesta = "delta";
      break;
  }
  return respuesta;
}
console.log(clasificarValor(1));

var producto = "pizza";
switch (producto) {
  case "pizza":
    console.log("La pizza cuesta 5€");
    break;
  case "hamburguesa":
    console.log("La hamburguesa cuestan 6€");
    break;
  case "helado":
    console.log("El helado cuesta 2€");
    break;
}

function seleccionarIdioma(valor) {
  var idioma;
  switch (valor) {
    case 1:
      idioma = "Español";
      break;
    case 2:
      idioma = "Francés";
    case 3:
      idioma = "Italiano";
      break;
    default:
      idioma = "Inglés";
      break;
  }
  return idioma;
}
console.log(seleccionarIdioma(4));

function clasificarVolumen(numero) {
  var volumen;
  switch (numero) {
    case 1:
      volumen = "Bajo";
      break;
    case 2:
    case 3:
      volumen = "Intermedio";
      break;
    case 4:
    case 5:
    case 6:
      volumen = "Alto";
      break;
  }
  return volumen;
}
console.log(clasificarVolumen(4));

function miFuncion() {
  console.log("Hola");
  return "Mundo";
  console.log("Adiós");
}
console.log(miFuncion());

function calcularRaizCuadrada(num) {
  if (num < 0) {
    return undefined;
  }
  return Math.sqrt(num);
}

console.log(calcularRaizCuadrada(-5));
