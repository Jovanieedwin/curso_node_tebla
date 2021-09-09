const colors = require('colors');
const fs = require('fs');
const crearArchivo = async (base = 5, listar = false,hasta =10) => {
    try {

        if (listar) {

        }
        let salida = '';
        for (let i = 1; i <= hasta; i++) {
            salida += (`${base} x ${i} = ${i * base} \n`);
        }
        if (listar) {
            console.log('==============='.red);
            console.log(`  Tabla del ${base}`.trap);
            console.log('==============='.yellow);
            console.log(salida.blue)
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return (`tabla-${base}.txt`)
    } catch (err) {
        throw err;
    }
}
module.exports = {
    crearArchivo
}
