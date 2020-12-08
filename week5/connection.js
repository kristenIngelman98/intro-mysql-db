const mysql = require('mysql');

const connectionPool = mysql.createPool({
    conectionLimit: 10, // max number of simultaneous connections
    host: 'localhost', // 'localhost' for test environment
    user: 'root', // 'root' if using test environment
    password: '', // blank for test environment
    database: 'hello_mysql',
    multipleStatements: true // allows us to execute more than one statement in a query
});

module.exports = {connectionPool};