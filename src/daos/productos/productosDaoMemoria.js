const ContenedorMemoria = require('../../controllers/contenedorMemoria')
let productosDB = []

class ProductosDaoMemoria extends ContenedorMemoria {
    constructor(){
        super(productosDB)
    }
}

module.exports = ProductosDaoMemoria