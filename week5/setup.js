const {connectionPool} = require('./connection.js');



connectionPool.query(`
    DROP TABLE IF EXISTS animals;
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
        console.log("Successfully created table!");
        // console.log(results);

        connectionPool.query(`
            INSERT INTO animals (name, type) VALUES 
            ("fluffy", "dog"),
            ("fred", "cat"),
            ("baily", "bunny");

      `, (error, results)=>{
            if(error) {
              console.log(error);
              process.exit();
            }
            else {
              console.log("Successfully inserted a row!!");
            //   console.log(results);
             connectionPool.query(`SELECT * FROM animals;
               
    
          `, (error, results)=>{
                if(error) {
                  console.log(error);
                  process.exit();
                }
                else {
                  console.log("Successfully selected rows!!");
                  console.log(results);
                  process.exit();
              }

});
              
          }

});
    }

});