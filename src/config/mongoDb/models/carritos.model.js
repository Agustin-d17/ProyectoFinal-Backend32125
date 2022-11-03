const {Schema, model} = require('mongoose')

const carritosSchema = new Schema({
    productos: {
        type: 'array'
    }
})

module.exports = model('Carritos', carritosSchema)