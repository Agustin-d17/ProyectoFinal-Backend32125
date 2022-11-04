const CarritoDaoArchivo = require('../daos/carritos/carritoDaoArchivo')

const carritoArchivoContent = new CarritoDaoArchivo('./data/carts.json')

module.exports = carritoArchivoContent

// carritoArchivoContent.newCart()
// carritoArchivoContent.getAll()
// carritoArchivoContent.deleteById()
// carritoArchivoContent.deleteById(1)
// carritoArchivoContent.addProduct()
// carritoArchivoContent.removeProduct()
