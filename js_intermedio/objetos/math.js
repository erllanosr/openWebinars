var pi = Math.PI;
console.log(pi);
console.log(Math.min(0, 1, 3, 4, 5, 6));
console.log(Math.max(0, 1, 3, 4, 5, 6));
console.log(Math.round(4.5)); // redondear al mayor
console.log(Math.floor(4.5)); //redondear al menor
console.log(Math.ceil(4.5));
var aleatorio = Math.random();
console.log(aleatorio);

function generarNumero(numMax) {
  return Math.round(Math.random() * numMax);
}
console.log(generarNumero(100));
