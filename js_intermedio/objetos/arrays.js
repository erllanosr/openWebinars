var colores = ["verde", "amarillo", "rojo"];

// for (let i = 0; i < colores.length; i++) {
//   console.log(i + " Soy el color " + colores[i]);
// }

// NÚMEROS PARES
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
for (let i = 0; i < numeros.length; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// SUMA DE NUMEROS DEL ARRAY
var sumArrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var total = 0;
for (let i = 0; i < sumArrays.length; i++) {
  total += sumArrays[i];
}
console.log("El total es " + total);

// console.log(colores);
// console.log(colores[0]);
// console.log(colores[1]);
// console.log(colores[2]);
// console.log(colores[3]);

// colores.push("negro"); // Agregar al array
// console.log(colores);
