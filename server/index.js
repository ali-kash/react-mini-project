const express = require('express')
const products = require('./data/products.json')

const PORT = process.env.PORT || 3001

const app = express()

app.get('/api', (req, res) => {
	res.json(products)
})

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`)
})
