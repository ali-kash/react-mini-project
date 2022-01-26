const express = require('express')
const products = require('./data/products.json')

const PORT = process.env.PORT || 3001

// create app
const app = express()

// route for api
app.get('/api', (req, res) => {
	res.json(products)
	// send array of products
})

// start server backend
app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`)
	// console message that it is listening
})
