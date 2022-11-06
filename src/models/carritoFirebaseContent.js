const CarritosDaoFirebase = require('../daos/carritos/carritosDaoFirebase')

const carritosFirebaseContent = new CarritosDaoFirebase('carritos')

module.exports = carritosFirebaseContent 

// carritosFirebaseContent.newCart()
// carritosFirebaseContent.getAll()
// carritosFirebaseContent.getById('')
// carritosFirebaseContent.addProduct({title: 'Producto de prueba', id: 1}, '')
// carritosFirebaseContent.addProduct({title: 'Producto de prueba 2', id: 2}, '')
// carritosFirebaseContent.removeProduct(1, '')
// carritosFirebaseContent.deleteById()