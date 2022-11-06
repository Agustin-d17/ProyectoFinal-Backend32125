const CarritosDaoFirebase = require('../daos/carritos/carritosDaoFirebase')

const carritosFirebaseContent = new CarritosDaoFirebase('carritos')

module.exports = carritosFirebaseContent 

// carritosFirebaseContent.newCart()
// carritosFirebaseContent.getAll()
// carritosFirebaseContent.getById('hxrG2ro0TFRSvQiHqnlw')
// carritosFirebaseContent.addProduct({title: 'Producto de prueba', id: 1}, 'hxrG2ro0TFRSvQiHqnlw')
// carritosFirebaseContent.addProduct({title: 'Producto de prueba 2', id: 2}, 'hxrG2ro0TFRSvQiHqnlw')
// carritosFirebaseContent.removeProduct(1, 'hxrG2ro0TFRSvQiHqnlw')
// carritosFirebaseContent.deleteById('hxrG2ro0TFRSvQiHqnlw')