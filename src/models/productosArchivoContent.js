const ProductosDaoArchivo = require('../daos/productos/productosDaoArchivo')

const productosArchivoContent = new ProductosDaoArchivo('./data/products.json')

module.exports = productosArchivoContent

// productosArchivoContent.getAll()