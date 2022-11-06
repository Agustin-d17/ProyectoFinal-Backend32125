const CarritoDaoArchivo = require('../daos/carritos/carritoDaoArchivo')

const carritoArchivoContent = new CarritoDaoArchivo('./data/carts.json')

module.exports = carritoArchivoContent

// carritoArchivoContent.newCart()
// carritoArchivoContent.getAll()
// carritoArchivoContent.getById()
// carritoArchivoContent.addProduct({title: 'producto de prueba 1', id: "1"}, 1)
// carritoArchivoContent.addProduct({title: 'producto de prueba 2', id: "2"}, 1)
// carritoArchivoContent.removeProduct(1, 2)
// carritoArchivoContent.deleteById(1)

