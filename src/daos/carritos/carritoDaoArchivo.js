const ContenedorArchivo = require('../../controllers/contenedorArchivo')

class CarritoDaoArchivo extends ContenedorArchivo {
    constructor() {
        super('./data/carts.json')
    }
}

module.exports = CarritoDaoArchivo