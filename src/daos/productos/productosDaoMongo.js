const ContenedorMongoDb = require('../../controllers/contenedorMongoDb')
const Productos = require('../../config/mongoDb/models/productos.model')

class ProductosDaoMongo extends ContenedorMongoDb {
    constructor(){
        super(Productos);
    }

    async newProduct(prod) {
        let timestamp = Date.now().toString()
        let code = timestamp
        let newProduct = {timestamp: timestamp, code: code, ...prod}

        let response = await this.saveDoc(newProduct)

        console.log(response)
    }
}

module.exports = ProductosDaoMongo 