const mysql = require('mysql');

const connectionPool = mysql.createPool({
    conectionLimit: 10, // max number of simultaneous connections
    host: 'localhost', // 'localhost' for test environment
    user: 'root', // 'root' if using test environment
    password: '', // blank for test environment
    multipleStatements: true // allows us to execute more than one statement in a query
});