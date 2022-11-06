const ProductosDaoArchivo = require('../daos/productos/productosDaoArchivo')

const productosArchivoContent = new ProductosDaoArchivo('./data/products.json')

module.exports = productosArchivoContent

const product = {
    title:"Monitor gamer",
    description:"Monitor 27 pulgadas 144hz ",
    thumbnail:"https://langtecnologia.com.ar/2286-large_default/monitor-gamer-27-vga-hdmi-fullhd-144hz-5ms-westinghouse.jpg",
    price:"80500",
    stock:"5"
}

// productosArchivoContent.save(product)
// productosArchivoContent.getAll()
// productosArchivoContent.getById('2')
// productosArchivoContent.modifyById('4', {...product, stock: "0"})
// productosArchivoContent.deleteById(4)
