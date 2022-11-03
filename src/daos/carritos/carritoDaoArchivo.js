const ContenedorArchivo = require('../../controllers/contenedorArchivo')

class CarritoDaoArchivo extends ContenedorArchivo {
    constructor(file) {
        super(file)
    }


    async addProduct(product, cartId) {
        const cart = await this.getById(`${cartId}`)

        cart.products.push(product)
        await this.modifyById(cartId, cart)
        console.log(cart)
    }
}

module.exports = CarritoDaoArchivo