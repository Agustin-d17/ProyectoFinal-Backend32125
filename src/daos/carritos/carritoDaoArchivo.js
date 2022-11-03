const ContenedorArchivo = require('../../controllers/contenedorArchivo')

class CarritoDaoArchivo extends ContenedorArchivo {
    constructor() {
        super('./data/carts.json')
    }

    async newCarts() {
        const content = await this.readFile()

        if (content.length !== 0){
            let timestamp = Date.now().toString()
            let newId = parseInt(content[content.length - 1].id) + 1
            await fs.promises.writeFile(this.file, JSON.stringify([...content, {products: [], timestamp, id: `${newId}`}]), 'utf8');
            console.log(`id del carrito agregado: ${newId}`)
            return `${newId}`
        }else{
            let timestamp = Date.now().toString()
            await fs.promises.writeFile(this.file, JSON.stringify([{products: [], timestamp, id: "1"}]), 'utf8');
            console.log(`id del carrito agregado: ${1}`)
            return `1`
        }
    }

    async addProduct(product, cartId) {
        const content = await this.readFile();
        const cart = await content.find(el => el.id === cartId)

        cart.products.push(product)
        await this.modifyCartById(cartId, cart)
        return cart
    }

    async deleteProdByid(cartId, prodId) {
        const cart = await this.getById(cartId)
        const index = cart.products.findIndex(product => product.id === prodId)

        cart.products.splice(index, 1)
        await this.modifyCartById(cartId, cart)
        return 'Se ha eliminado el producto del carrito'
        
    }
}

module.exports = CarritoDaoArchivo