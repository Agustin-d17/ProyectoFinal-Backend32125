const CarritoDaoArchivo = require('../daos/carritos/carritoDaoArchivo')

const carritoArchivoContent = new CarritoDaoArchivo('./data/carts.json')

module.exports = carritoArchivoContent

// carritoArchivoContent.getAll()
// carritoArchivoContent.addProduct({title: 'Product'},"2")