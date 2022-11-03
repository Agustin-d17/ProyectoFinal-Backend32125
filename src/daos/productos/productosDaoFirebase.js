const ContenedorFirebase = require('../../controllers/contenedorFirebase')

class ProductosDaoFirebase extends ContenedorFirebase {
    constructor(){
        super('productos')
    }
}

module.exports = ProductosDaoFirebase