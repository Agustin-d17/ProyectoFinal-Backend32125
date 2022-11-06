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

const product2 = {
    title:"Teclado RGB", 
    description:"Teclado RGB",
    thumbnail:"https://example.com",
    price:"8000",
    stock:"10"
}


// productosMongoContent.newProduct(product)
// productosMongoContent.newProduct(product2)
// productosMongoContent.getAll()
// productosMongoContent.getById('636818f90b196989b6360522')
// productosMongoContent.updateById('636818f90b196989b6360522',{price: 1000})
// productosMongoContent.deleteById('636818f90b196989b6360522')