class ContenedorMemoria {
    constructor(array){
        this.array = array;
    }

    async saveDoc(obj) {
        try {
            if (this.array.length !== 0) {
                let id = parseInt(this.array[this.array.length - 1].id) + 1
                await this.array.push({id: id, ...obj})
            } else {
                let id = 1
                await this.array.push({id: `${id}`, ...obj});
            }
            console.log('El documento se agrego correctamente')
            return 'El documento se agrego correctamente'
        } catch (error) {
            console.error(error)
        }
    }

    saveDocs(arrObjs) {
        arrObjs.forEach(obj => this.array.push(obj));
        console.log('Se agregaron todos los documentos')
        return 'Se agregaron todos los documentos'
    }

    getAll() {
        let docs = this.array
        console.log(docs)
        return docs
    }

    getById(id) {
        let docs = this.array
        let item = docs.find(obj => obj.id === id)
        console.log(item)
        return item
    }

    deleteById(id) {
        let docs = this.array
        this.array = docs.filter(obj => obj.id ==! id)
        console.log('El documento se elimino')
        return 'El documento se elimino'
    }

    deleteAll() {
        let docs = []
        this.array = docs
        console.log('Todos los documentos fueron eliminados')
        return 'Todos los documentos fueron eliminados'
    }
}

module.exports = ContenedorMemoria