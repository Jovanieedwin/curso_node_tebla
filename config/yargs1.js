const yargs = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe:'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe:'Muestra o no la tabla de multiplicar en consola'
    })    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe:'Es el tope de la tabla de multiplicar'
    })
    .check((yargs, options) => {
        if (isNaN(yargs.b)) {
            throw 'La base tiene qe ser un numero'
        }
        return true;

    })
    .argv;

    module.exports = yargs;
    
    