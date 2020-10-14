const mysql = require('mysql')
const dbConfig = require('../config/db.config')

//  Create Connection
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
})


//  open mysql connection
connection.connect(error =>
{
    if (error) throw error
    console.log('Connected to DB');
})

module.exports = connection