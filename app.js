const { crearArchivo } = require('./helpers/multiplicar')
const yargs = require('./config/yargs1')
const colors = require('colors');

console.clear();


crearArchivo(yargs.b, yargs.l,yargs.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'.green))
    .catch(err => console.log(err));