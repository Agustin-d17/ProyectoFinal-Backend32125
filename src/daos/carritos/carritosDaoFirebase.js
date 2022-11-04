const ContenedorFirebase = require('../../controllers/contenedorFirebase')

class CarritosDaoFirebase extends ContenedorFirebase {
    constructor(collection){
        super(collection)
    }

    async newCart(){
        let timestamp = Date.now().toString()
        let newCart = {timestamp: timestamp, products: []}

        let cartId = await this.save(newCart)

        console.log(`Se creo un nuevo carrito. Id: ${cartId}`)
        return `Se creo un nuevo carrito. Id: ${cartId}`
    }

    async addProduct(product, cartId) {
        let cart = await this.getById(cartId)
        let productsList = [...cart.products, product]

        await this.updateById(cartId, {products: productsList})

        console.log('Se agrego un producto al carrito')
        return 'Se agrego un producto al carrito'
    }

    async removeProduct(prodId, cartId){
        let cart = await this.getById(cartId)
        let index = cart.products.findIndex(product => product.id === prodId)
        let productsList = cart.products

        productsList.splice(index, 1)
        await this.updateById(cartId, {products: productsList})

        console.log('Se elimino el producto al carrito')
        return 'Se elimino el producto al carrito'
    }
}

module.exports = CarritosDaoFirebase 