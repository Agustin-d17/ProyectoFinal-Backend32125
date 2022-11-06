const ContenedorFirebase = require('../../controllers/contenedorFirebase')

class ProductosDaoFirebase extends ContenedorFirebase {
    constructor(collection){
        super(collection)
    }

    async newProduct(prod){
        let timestamp = Date.now().toString()
        let code = timestamp
        let newProduct = {timestamp: timestamp, code: code, ...prod}

        let response = await this.save(newProduct)
        console.log(`Se agrego el producto. Id: ${response}`)
    }
}

module.exports = ProductosDaoFirebase 