const ProductosDaoMongo = require('../daos/productos/productosDaoMongo')

const productosMongoContent = new ProductosDaoMongo()

module.exports = productosMongoContent

// productosMongoContent.getAll()