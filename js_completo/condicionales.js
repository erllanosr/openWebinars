// var x = 5;
// if (x > 2) {
//   console.log("x es mayor a 2");
// }

// if (false) {
//   console.log("verdadero");
// } else {
//   console.log("falso");
// }

function clasificarValor(valor) {
  if (valor % 2 == 0) {
    console.log("Divisible entre 2.");
  } else if (valor % 3 == 0) {
    console.log("Divisible entre 3.");
  } else {
    console.log("No es divisible entre las opciones");
  }
}
clasificarValor(15);
