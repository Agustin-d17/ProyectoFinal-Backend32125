const ContenedorFirebase = require('../../controllers/contenedorFirebase')

class ProductosDaoFirebase extends ContenedorFirebase {
    constructor(collection){
        super(collection)
    }
}

module.exports = ProductosDaoFirebase 