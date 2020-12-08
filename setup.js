const {connectionPool} = require('./connection.js');

connectionPool.query(`
    CREATE TABLE animals (
      name  varchar(255)  NOT NULL,
      type  varchar(255)  DEFAULT "dog"   NOT NULL,
      id    int           AUTO_INCREMENT,
      PRIMARY KEY(id) 
    );

`, (error, results)=>{
      if(error) {
        console.log(error);
        process.exit();
      }
      else {
        console.log("Success!");
        console.log(results);
        process.exit();
    }

});