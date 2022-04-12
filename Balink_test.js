const express = require('express')
const app = express()
const port = 3000

const users = require('./routes/users')
const translations = require('./routes/translations')
const products = require('./routes/products')


// To display all the users available
app.get("/users", (req, res) => {
    res.send(users.getUsers())
})

// to return a mapping of all available translation in a specified language (given in QUERY parameter)
// Call example : Url/translations?languageCode=Eng
app.get("/translations", (req, res) => {
    res.send(translations.getTranslations(req.query.languageCode))
})

// to display a product catalog
app.get("/products", (req, res) => {
    res.send(products.getProducts())
})

// to display informations about a specific product
app.get("/products/:uid", (req, res) => {
    res.send(products.getProduct(req.params.uid))
})

app.post("/products", (req, res) => {
    res.send(products.postProduct(req.query))
})

app.put("/products/:uid", (req, res) => {
    res.send(products.PutProduct(req.query, req.params.uid))
})

app.delete("/products/:uid", (req, res) => {
    res.send(products.deleteProduct(req.params.uid))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
