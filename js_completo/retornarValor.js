// Return, devolver un valor de la función
// function sumar(a, b) {
//   return a + b;
// }
// sumar(5, 3); // No lo muestra por consola
// console.log(sumar(5, 3)); //Lo muestra por consola.

// function sumas(a, b) {
//   console.log(a + b);
// }
// console.log(sumas(5, 3)); // 8 por consola

// ASIGNAR VALOR RETORNADO
function sumar(a, b) {
  return a + b;
}
var resultado = sumar(5, 3);
console.log(resultado);

function crearCadenaConMeta(lenguaje) {
  return "Mi meta es aprender " + lenguaje;
}
var miMeta = crearCadenaConMeta("JavaScript");
console.log(miMeta);
