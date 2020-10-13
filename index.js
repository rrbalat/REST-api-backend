const express = require('express')
const app = express()

app.get('/', (req, res) =>
{
    res.send('Home')
})

app.get('/api/products', (req, res) =>
{
    res.send(['Product 1', 'Product 2', 'Product 3'])
})

app.listen(5000, () =>
{
    console.log('http://localhost:5000')
})