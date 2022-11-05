const {Schema, model} = require('mongoose')

const carritosSchema = new Schema({
    products: {
        type: 'array'
    },
    timestamp: {
        type: 'string',
        unique: true
    }
})

module.exports = model('Carritos', carritosSchema)