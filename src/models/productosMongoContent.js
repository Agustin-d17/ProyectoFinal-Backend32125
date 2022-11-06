const ProductosDaoMongo = require('../daos/productos/productosDaoMongo')

const productosMongoContent = new ProductosDaoMongo()

module.exports = productosMongoContent

const product = {
    title:"Mouse RGB", 
    description:"Mouse rgb con cable",
    thumbnail:"https://tienda1.ledvideojuegosycomputacion.com.ar/4189-medium_default/mouse-gamer-redragon-griffin-m607-black-rgb.jpg",
    price:"4900",
    stock:"15"
}


// productosFirebaseContent.newProduct(product)
// productosFirebaseContent.getAll()
// productosFirebaseContent.getById()
// productosFirebaseContent.updateById('',{price: 1000})
// productosFirebaseContent.deleteById('')