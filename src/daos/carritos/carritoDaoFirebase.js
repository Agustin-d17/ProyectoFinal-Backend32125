const ContenedorFirebase = require('../../controllers/contenedorFirebase')

class CarritosDaoFirebase extends ContenedorFirebase {
    constructor(){
        super('carritos')
    }

}

module.exports = CarritosDaoFirebase 