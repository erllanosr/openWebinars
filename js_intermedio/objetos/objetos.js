var persona = {
  nombre: "Erick",
  edad: 23,
  saludar: function () {
    console.log("Hola " + this.nombre);
  },
};
persona.saludar();
