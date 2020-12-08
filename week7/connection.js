require("dotenv").config();

const promise_mysql = require("promise-mysql");

const connectionPool = promise_mysql.createPool({
    multipleStatements: true,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});


module.exports = connectionPool;
// this is a promise that resolves with the connectionPool value