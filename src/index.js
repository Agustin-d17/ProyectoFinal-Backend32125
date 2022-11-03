const express = require('express')
const productsRouter = require('./routers/productsRouter.js')
const cartRouter = require('./routers/cartRouter.js')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.send('index')
})

// app.use('/api/productos', productsRouter)
// app.use('/api/carrito', cartRouter)

app.all('*', (req, res) => {
    res.status(404).send({error: '404 Not Found'})
})

const PORT = process.env.PORT || 8080

const server = app.listen(PORT, () => { 
    console.log(`listening on port ${server.address().port}`)
})
