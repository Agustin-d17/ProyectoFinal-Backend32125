const ContenedorMongoDb = require('../../controllers/contenedorMongoDb')
const Productos = require('../../config/mongoDb/models/productos.model')

class productosDaoMongo extends ContenedorMongoDb {
    constructor(){
        super(Productos);
    }
}

module.exports = productosDaoMongo