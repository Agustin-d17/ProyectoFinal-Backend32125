const ContenedorArchivo = require('../../controllers/contenedorArchivo')
const fs = require('fs')

class CarritoDaoArchivo extends ContenedorArchivo {
    constructor(file) {
        super(file)
    }

    async newCart(){
        const content = await this.readFile();
        
        if (content.length !== 0){
            let timestamp = Date.now().toString()
            let newId = parseInt(content[content.length - 1].id) + 1
            await fs.promises.writeFile(this.file, JSON.stringify([...content, {products: [], timestamp, id: `${newId}`}]), 'utf8');
            console.log(`id del carrito agregado: ${newId}`)
            return `Se creo un nuevo carrito. Id: ${newId}`
        }else{
            let timestamp = Date.now().toString()
            await fs.promises.writeFile(this.file, JSON.stringify([{products: [], timestamp, id: "1"}]), 'utf8');
            console.log(`id del carrito agregado: ${1}`)
            return `Se creo un nuevo carrito. Id: 1`
        }
    }

    async addProduct(product, cartId) {
        const cart = await this.getById(`${cartId}`)

        cart.products.push(product)
        await this.modifyById(cartId, cart)
        console.log(cart)
    }

    async removeProd(cartId, prodId) {
        const cart = await this.getById(`${cartId}`)
        const index = cart.products.findIndex(product => product.id === prodId)

        cart.products.splice(index, 1)
        await this.modifyById(cartId, cart)
        console.log(cart)
    }
}

module.exports = CarritoDaoArchivo