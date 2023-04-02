//Tabla del 5 hasta 10
const { createFile } = require("./helpers/multiplicar");
const argv = require('./config/yargs');


console.clear();

console.log( argv );


//const base = 3;

createFile( argv.b, argv.l, argv.h)
 .then(nombreArchivo => console.log(nombreArchivo.green, "creado".bgRed))
 .catch(error=> console.log(error, "Eror al ejecutar la funcion"));


