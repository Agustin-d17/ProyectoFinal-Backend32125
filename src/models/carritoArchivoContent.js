const CarritoDaoArchivo = require('../daos/carritos/carritoDaoArchivo')

const carritoArchivoContent = new CarritoDaoArchivo('./data/carts.json')

module.exports = carritoArchivoContent

// carritoArchivoContent.newCart()
// carritoArchivoContent.getAll()
// carritoArchivoContent.getById()
// carritoArchivoContent.addProduct()
// carritoArchivoContent.removeProduct()
// carritoArchivoContent.deleteById()
// carritoArchivoContent.deleteById(1)

