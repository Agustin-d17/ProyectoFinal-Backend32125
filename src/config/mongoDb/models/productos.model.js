const {Schema, model} = require('mongoose')

const productosSchema = new Schema({
    title: {
        type: 'string',
        max: 24,
        required: true
    }, 
    timestamp: {
        type: 'string',
        max: 100,
        unique: true
    }, 
    description: {
        type: 'string',
        max: 250,
    },
    code: {
        type: 'string',
        max: 100,
        unique: true
    },
    thumbnail: {
        type: 'string',
        max: 200,
    },
    price: {
        type: 'number',
        required: true,
    },
    stock: {
        type: 'number',
        required: true,
    }
})

module.exports = model('Productos', productosSchema)