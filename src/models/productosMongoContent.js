const ProductosDaoMongo = require('../daos/productos/productosDaoMongo')

const productosMongoContent = new ProductosDaoMongo()

module.exports = productosMongoContent

// productosFirebaseContent.saveDoc()
// productosFirebaseContent.getAll()
// productosFirebaseContent.getById()
// productosFirebaseContent.updateById('',{price: 1000})
// productosFirebaseContent.deleteById('')