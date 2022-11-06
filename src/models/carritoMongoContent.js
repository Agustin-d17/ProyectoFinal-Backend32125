const CarritosDaoMongo = require('../daos/carritos/carritoDaoMongo')

const carritosMongoContent = new CarritosDaoMongo()

module.exports = carritosMongoContent

// carritosMongoContent.newCart()
// carritosMongoContent.getAll()
// carritosMongoContent.getById('')
// carritosMongoContent.addProduct({title: 'producto de prueba 1', id: '1'}, '')
// carritosMongoContent.addProduct({title: 'producto de prueba 2', id: '2'}, '')
// carritosMongoContent.removeProduct("1", '')
// carritosMongoContent.deleteById()