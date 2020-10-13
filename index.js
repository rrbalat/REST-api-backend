const express = require('express')
const Database = require('./manager/database')
const app = express()
const database = require('./manager/database')

const connection = new Database({
    host: 'localhost',
    user: 'root',
    password: 'rerootreroot',
    port: 3306,
    database: "restdb"
})

connection.query("SELECT * FROM Category", null).then(rows =>
{
    console.log(rows);
})

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