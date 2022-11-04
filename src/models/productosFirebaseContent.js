const ProductosDaoFirebase = require('../daos/productos/productosDaoFirebase')

const productosFirebaseContent = new ProductosDaoFirebase('productos')

module.exports = productosFirebaseContent 

// productosFirebaseContent.getAll()