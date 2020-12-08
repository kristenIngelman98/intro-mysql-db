const poolPromise = require("./connection.js");

poolPromise.then(pool=>{
    // this is where we put code that requires a successful connection
    console.log("connected!");

    pool.query(`
        DROP TABLE IF EXISTS pets, owners;
        CREATE TABLE owners (
            name    varchar(255)    NOT NULL,
            id      int             AUTO_INCREMENT,
            PRIMARY KEY (id)
        );
        CREATE TABLE pets (
            name        varchar(255)    NOT NULL,
            type        varchar(255)    NOT NULL,
            owner_id    int             NOT NULL,
            PRIMARY KEY (name, owner_id),
            CONSTRAINT owner_id_fk FOREIGN KEY (owner_id) 
                REFERENCES owners (id)
            );
        `)
    // this will return a promise
    .then(result=>{
        // console.log(result);
        console.log("owners and pets tables created!")
        
        return pool.query(`
            INSERT INTO owners (name) VALUES
                ("bob"),
                ("linda"),
                ("gene");
                
            INSERT INTO pets (name, type, owner_id) VALUES
                ("snoopy", "dog", 1),
                ("snuffles", "cat", 2),
                ("squiggly", "hamster", 2),
                ("nibbles", "hamster", 2);
                
        
        `);
        // returning because we want this query to be returned (return the promise) so that 
        // we can add a then() method
    })
    .then(result=>{
        console.log("owners and pets added!");
        // get a virtual table with names of pets and their owners
        
    })
    .catch(error=>console.log(error));
})
.catch(error=>console.log(error));