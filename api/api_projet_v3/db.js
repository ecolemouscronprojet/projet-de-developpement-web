const mysql = require('mysql');
const connection  = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'my_car'
});

connection.connect();

module.exports = connection;