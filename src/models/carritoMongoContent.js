const CarritosDaoMongo = require('../daos/carritos/carritoDaoMongo')

const carritosMongoContent = new CarritosDaoMongo()

module.exports = carritosMongoContent

// carritosMongoContent.newCart()
// carritosMongoContent.getAll()
// carritosMongoContent.getById('63681aa008b023ecb404e416')
// carritosMongoContent.addProduct({title: 'producto de prueba 1', id: '1'}, '63681aa008b023ecb404e416')
// carritosMongoContent.addProduct({title: 'producto de prueba 2', id: '2'}, '63681aa008b023ecb404e416')
// carritosMongoContent.removeProduct("1", '63681aa008b023ecb404e416')
// carritosMongoContent.deleteById('63681aa008b023ecb404e416')