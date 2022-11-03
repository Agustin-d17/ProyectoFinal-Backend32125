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

    async deleteProdByid(cartId, prodId) {
        const cart = await this.getById(`${cartId}`)
        const index = cart.products.findIndex(product => product.id === prodId)

        cart.products.splice(index, 1)
        await this.modifyById(cartId, cart)
        console.log(cart)
    }
}

module.exports = CarritoDaoArchivo