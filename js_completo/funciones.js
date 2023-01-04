function mostrarMensaje() {
  console.log("Hola, Mundo");
}
mostrarMensaje();

// Argumentos
function sumar(a, b) {
  var suma;
  suma = a + b;
  console.log("El resultado de " + a + " + " + b + " es: " + suma);
}
var x = 5;
var y = 3;
sumar(x, y);

function concatenarTresCadenas(cadena1, cadena2, cadena3) {
  console.log(cadena1 + " " + cadena2 + " " + cadena3);
}
concatenarTresCadenas("Erick", "Llanos", "Ríos");
