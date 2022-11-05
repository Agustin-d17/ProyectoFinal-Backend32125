const ContenedorMongoDb = require('../../controllers/contenedorMongoDb')
const Productos = require('../../config/mongoDb/models/productos.model')

class ProductosDaoMongo extends ContenedorMongoDb {
    constructor(){
        super(Productos);
    }
}

module.exports = ProductosDaoMongo 