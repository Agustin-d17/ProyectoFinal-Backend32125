const ProductosDaoFirebase = require('../daos/productos/productosDaoFirebase')

const productosFirebaseContent = new ProductosDaoFirebase('productos')

module.exports = productosFirebaseContent 


const product = {
    title:"Mouse RGB", 
    description:"Mouse rgb con cable",
    thumbnail:"https://tienda1.ledvideojuegosycomputacion.com.ar/4189-medium_default/mouse-gamer-redragon-griffin-m607-black-rgb.jpg",
    price:"4900",
    stock:"15"
}

const product2 = {
    title:"Teclado RGB", 
    description:"Teclado RGB",
    thumbnail:"https://example.com",
    price:"8000",
    stock:"10"
}

// productosFirebaseContent.newProduct(product)
// productosFirebaseContent.newProduct(product2)
// productosFirebaseContent.getAll()
// productosFirebaseContent.getById()
// productosFirebaseContent.updateById('',{price: 1000})
// productosFirebaseContent.deleteById('')