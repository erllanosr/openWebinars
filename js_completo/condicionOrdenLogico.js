/*function clasificarValor(valor) {
  if (valor < 5) {
    console.log("Menor que 5.");
  } else if (valor < 10) {
    console.log("Menor que 10.");
  } else {
    console.log("Mayor o igual a 10.");
  }
}

clasificarValor(2);
clasificarValor(6);
clasificarValor(20); */

function interpretarIMC(imc) {
  if (imc < 18.5) {
    console.log("Bajo peso.");
  } else if (imc <= 24.9) {
    console.log("Normal.");
  } else if (imc <= 29.9) {
    console.log("Sobrepeso");
  } else {
    console.log("OBESIDAD");
  }
}
interpretarIMC(18);
interpretarIMC(50);
