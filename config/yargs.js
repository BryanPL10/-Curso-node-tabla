const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    description: "Es la base de la tabla de multiplicar"
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    description: "Muestra la tabla en consola"
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    description: "Es el rango hasta el que se desea multipicar"
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un número";
    }
    if (isNaN(argv.h)) {
      throw "El rango tiene que ser un número";
    }
    return true;
  }).argv;

module.exports = argv;
