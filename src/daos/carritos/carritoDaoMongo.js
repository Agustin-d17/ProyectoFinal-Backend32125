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
        let cart = await this.getById(cartId) //Me devuelve el array con el carrito adentro, arreglar eso
        let newProductList = [product, ...cart.products]

        let response = await this.updateById(cartId, {products: newProductList})
        console.log(response)
    }

    async removeProduct(product, cartId){}
}

module.exports = CarritosDaoMongo 