const ContenedorMongoDb = require('../../controllers/contenedorMongoDb')
const Carritos = require('../../config/mongoDb/models/productos.model')

class productosDaoMongo extends ContenedorMongoDb {
    constructor(){
        super(Carritos);
    }
}

module.exports = productosDaoMongo 