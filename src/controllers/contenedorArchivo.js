const fs = require('fs');

class ContenedorArchivo {
    constructor(file) {
        this.file = file;
    }

    async readFile(){
        try{
            const content = await fs.promises.readFile(this.file, 'utf8');
            const parsedContent = JSON.parse(content)
            return parsedContent
        }catch(err){
            console.log(err)
        }
    }

    async save(obj){
        const content = await this.readFile();
        
        if (content.length !== 0){
            let timestamp = Date.now().toString()
            let code = timestamp
            let newId = parseInt(content[content.length - 1].id) + 1
            await fs.promises.writeFile(this.file, JSON.stringify([...content, {...obj, timestamp, code, id: `${newId}`}]), 'utf8');
            console.log(`id del elemento agregado: ${newId}`)
        }else{
            let timestamp = Date.now().toString()
            let code = timestamp
            await fs.promises.writeFile(this.file, JSON.stringify([{...obj, timestamp, code, id: "1"}]), 'utf8');
            console.log(`id del elemento agregado: ${1}`)
        }

    }

    async getById(id){
        try{
            const content = await this.readFile()
            const element = content.find(el => el.id === id)
            
            console.log(element)
            return element
        }catch(err){
            console.log(err)
        }
    }

    async getAll(){
        try{
            const content = await this.readFile()
            
            console.log(content)
            return content 
        }catch(err){
            console.log(err)
        }
    }
    
    async deleteById(id) {
        let newContent = [];

        try {
          const content = await this.readFile()
          newContent = content.filter((doc) => parseInt(doc.id) !== id)
          await fs.promises.writeFile(this.file, JSON.stringify(newContent), 'utf-8')
        
          return 'Elemento eliminado'
        } catch (error) {
          console.log(error);
        }
      }
    
    async deleteAll(){
        let newContent = []

        try {
            await fs.promises.writeFile(this.file, JSON.stringify(newContent), 'utf8') 
            console.log("Elementos eliminados")
        }catch(err){
            console.log(err)
        }
    }

    async modifyById(id, obj) {
        try {
            let content = await this.readFile();
            content = await content.map(el => {
                if (el.id === id) {
                    el = {
                        id: id,
                        ...obj,
                    };
                    return el;
                } else {
                    return el;
                }
            })
            await fs.promises.writeFile(this.file, JSON.stringify(content), 'utf-8');

            return 'Elemento actualizado'

        } catch (error) {
            return error;
        }
    }
}

module.exports = ContenedorArchivo