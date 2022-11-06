const ContenedorMongoDb = require('../../controllers/contenedorMongoDb')
const Carritos = require('../../config/mongoDb/models/carritos.model')

class CarritosDaoMongo extends ContenedorMongoDb {
    constructor(){
        super(Carritos);
    }

    async newCart(){
        let timestamp = Date.now().toString()
        let newCart = {timestamp: timestamp, products: []}
        
        let response = await this.saveDoc(newCart)
        console.log(response)
    }

    async addProduct(product, cartId){
        let cart = await this.getById(cartId) 
        let newProductList = [product, ...cart.products]

        let response = await this.updateById(cartId, {products: newProductList})
        console.log(response)
    }

    async removeProduct(productId, cartId){
        let cart = await this.getById(cartId) 
        let newProductList = cart.products
        let index = newProductList.findIndex(product => product.id === productId)
        newProductList.splice(index, 1)

        const response = await this.updateById(cartId, {products: newProductList})
        console.log(response)
    }
}

module.exports = CarritosDaoMongo 