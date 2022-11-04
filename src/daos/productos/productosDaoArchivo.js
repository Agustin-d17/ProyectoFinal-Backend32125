const ContenedorArchivo = require('../../controllers/contenedorArchivo')

class ProductosDaoArchivo extends ContenedorArchivo {
    constructor(file) {
        super(file)
    }
}

module.exports = ProductosDaoArchivo