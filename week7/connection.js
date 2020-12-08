const promise_mysql = require("primise-mysql");

const connectionPool = promise_mysql.createPool({
    multipleStatements: true,
    host: "",
    user: "",
    password: "",
    database: ""
});


module.exports = connectionPool;
// this is a promise that resolves with the connectionPool value