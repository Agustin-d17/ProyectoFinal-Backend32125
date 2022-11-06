const ProductosDaoFirebase = require('../daos/productos/productosDaoFirebase')

const productosFirebaseContent = new ProductosDaoFirebase('productos')

module.exports = productosFirebaseContent 

// productosFirebaseContent.save()
// productosFirebaseContent.getAll()
// productosFirebaseContent.getById()
// productosFirebaseContent.updateById('',{price: 1000})
// productosFirebaseContent.deleteById('')