const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) =>
{
    res.json({ message: 'Home' })
})

require("./app/routes/customer.routes")(app)

app.listen(5000, () =>
{
    console.log('http://localhost:5000');
})