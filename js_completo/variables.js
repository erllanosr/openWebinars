// VARIABLES GLOBALES
var miVariableGlobal = 5;
console.log(miVariableGlobal);

function miFuncion() {
  console.log(miVariableGlobal);
}
miFuncion();

console.log(miVariableGlobal);

// VARIABLE LOCAL

function varLocal() {
  var miVarLocal = 4;
  console.log(miVarLocal);
}
varLocal();
// console.log(miVarLocal); Esto no se puede

var miNombre = "Erick";
// La local tiene prioridad.
function mostrarMiNombre() {
  var miNombre = "Joel";
  console.log(miNombre);
}
mostrarMiNombre();
console.log(miNombre);
