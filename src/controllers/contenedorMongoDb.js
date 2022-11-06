const mongoose = require('mongoose')

class ContenedorMongoDb {
    constructor(model){
        this.model = model
        this.connect()
    }

    connect(){
        try{
            const URL = 'mongodb+srv://AgustinD17:cpLsLc32abwXhNw@mycluster.pasmora.mongodb.net/ecommerce?retryWrites=true&w=majority'
            mongoose.connect(URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
        }catch (error) {
            console.error(error)
        }
    }

    async saveDoc(obj) {
        try {
            const newDoc = new this.model(obj)
            await newDoc.save()
            
            console.log('Se guardo el documento correctamente', newDoc._id)
            return `Se guardo el documento correctamente. Id: ${newDoc._id}`
        } catch (error) {
            console.error(error)
        }
    }

    async getAll(){
        try {
            let docs = await this.model.find({})

            console.log(docs)
            return docs
        } catch (error) {
            console.error(error)
        }
    }

    async getById(id){
        try {
            let doc = await this.model.findOne({_id: id})

            console.log(doc)
            return doc
        } catch (error) {
            console.error(error)
        }
    }

    async updateById(id, update){
        try {
            let docUpdate = await this.model.update({_id: id}, update)
            
            console.log('El documento se actualizo correctamente', docUpdate)
            return 'El documento se actualizo correctamente', docUpdate
        } catch (error) {
            console.error(error)
        }
    }

    async deleteById(id) {
        try {
            let docDelete = await this.model.deleteOne({_id: id})

            console.log('El documento se eliminate correctamente')
        } catch (error) {
            console.error(error)
        }
    }
}

module.exports = ContenedorMongoDb