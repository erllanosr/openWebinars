const assets = {
  /**
   * @param {string} urlDeLaImagen dirección web donde apunta
   * @returns elemento 'img' de la url escrita
   */

  constructorDeElementoP: function (cadenaAEscribir) {
    const p = document.createElement("p");
    p.innerText = cadenaAEscribir;
    const id = Math.random().toString().substring;
    p.id = id;
    document.body.appendChild(p);
    return id;
  },
  /**
   * @param {Function} callback permite tratar la asincronía
   * @returns {boolean} valor ejecutado previamente de forma asíncrona
   */

  plantillaAsincronia: function (callback) {
    setTimeout(
      () => {
        callback("Hola, me ejecuto de forma asíncrona");
      },
      5000 // 5 segundos
    );
  },

  constructorDeElementoH1: function (cadenaAEscribir) {
    const h1 = document.createElement("h1");
    h1.innerText = cadenaAEscribir;
    document.body.appendChild(h1);
  },

  constructorDeElementoImagen: function (urlDeLaImagen) {
    const img = document.createElement("img");
    img.src = urlDeLaImagen;
    document.body.appendChild(img);
  },

  factoriaDeElementosDOM: function () {
    this.constructorDeElementoH1("Bienvenidos a esta página web");
    this.constructorDeElementoP("Hola, me llamo Erick");
    this.constructorDeElementoImagen("https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_1280.png");
  },

  iteradorDeVectorLongitudDiez: function () {
    return Array.from(Array(10), (_, i) => {
      this.constructorDeElementoP("Me gusta programar en JS¿?");
    });
  },

  plantillaDePersonaIndecisa: function () {
    // let nElemn = 0;
    const plantilla = this.iteradorDeVectorLongitudDiez();
    plantilla[plantilla.length - 1] = this.constructorDeElementoP("No me gusta programar en JS¿?");
  },

  /**
   * @param {string} id
   */
  funcionATestear: function (id) {
    const textoDelElementoDOM = document.getElementById(id)?.innerText ?? false;
    if (textoDelElementoDOM != false) {
      return true;
    } else {
      return false;
    }
  },
};
