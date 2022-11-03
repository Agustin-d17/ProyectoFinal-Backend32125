const ContenedorArchivo = require('../../controllers/contenedorArchivo')

class ProductosDaoArchivo extends ContenedorArchivo {
    constructor() {
        super('./data/products.json')
    }
}

module.exports = ProductosDaoArchivo