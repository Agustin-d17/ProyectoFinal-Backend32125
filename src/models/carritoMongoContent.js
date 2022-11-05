const CarritosDaoMongo = require('../daos/carritos/carritoDaoMongo')

const carritosMongoContent = new CarritosDaoMongo()

module.exports = carritosMongoContent

// carritosMongoContent.newCart()
// carritosMongoContent.getById('63667a8375663fbf14866ab8')
// carritosMongoContent.addProduct({title: 'producto de prueba'}, '63667a8375663fbf14866ab8')
