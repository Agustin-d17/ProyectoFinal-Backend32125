const admin = require('../config/firebase/config')

class ContenedorFirebase{
    constructor(collection) {
        this.collection = collection
        this.db = admin.firestore()
        this.query = this.db.collection(`${this.collection}`)
    }

    

    async save(obj) {
        try {
            const doc = this.query.doc()
            await doc.create(obj)

            console.log('Se agrego el elemento a la coleccion')

        } catch (error) {
            console.error(error)
        }
    }

    async getAll() {
        try {
            const queryDocs = await this.query.get()
            let docs = queryDocs.docs.map(doc => ({id: doc.id, ...doc.data}))

            console.log(docs)
        } catch (error) {
            console.error(error)
        }
    }

    async getById(id) {
        try {
            const doc = this.query.doc(`${id}`)
            const item = await doc.get()
            const response = item.data

            console.log(response)
        } catch (error) {
            console.error(error)
        }
    }

    async updateById(id, data) {
        try {
            const doc = this.query.doc(`${id}`)
            let item = await doc.update(data)

            console.log('El documento se actualizo correctamente', item)
        } catch (error) {
            console.error(error)
        }
    }

    async deleteById(id) {
        try {
            const doc = this.query.doc(`${id}`)
            const item = await doc.delete()

            console.log('El documento se elimino correctamente', item)
        } catch (error) {
            console.error(error)
        }
    }
}

module.exports = ContenedorFirebase