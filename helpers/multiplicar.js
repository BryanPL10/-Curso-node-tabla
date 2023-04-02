const fs = require("fs");
var colors = require('colors');


const createFile = async (base, listar, hasta) => {
  try {


    let salida = "";
    let consola = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${ base } x ${ i } = ${ base * i }\n`;
      consola += `${ base } ${'x'.green} ${ i } ${'='.america} ${ base * i }\n`;
    }

    if(listar) {
      console.log("=================================".blue);
      console.log("TABLA DE MULTIPLICAR DEL".green, colors.bold.red(base.toString()));
      console.log("=================================".blue);
      
      console.log(consola)
    };
  

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt creado`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createFile,
};
