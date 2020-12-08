const {cp} = require('./connection.js');

cp.then(pool=>{
    
    return pool.query(`
    DROP TABLE IF EXISTS party_votes, district, province;
  
    CREATE TABLE party_votes (
        party_name          varchar(255)    NOT NULL,
        district            varchar(255)    NOT NULL,
        province            varchar(255)    NOT NULL,
        votes               int             DEFAULT 0,
        PRIMARY KEY (party_name, district, province)
    );
     
    `)
    .then(result=>{
        
        let insertPromises = [];
       
        let districts = [
            {name:"Vancouver Kingsway", province:"BC"},
            {name:"Delta", province:"BC"},
            {name:"New Westminster—Burnaby", province:"BC"},
            {name:"Saanich—Gulf Islands", province: "BC"},
            {name:"Calgary Centre", province:"Alberta"},
            {name:"Edmonton Strathcona", province:"Alberta"},
            {name:"Lakeland", province:"Alberta"},
            {name:"Saskatoon—Grasswood", province:"Saskatchewan"},
            {name:"Regina Waskana", province:"Saskatchewan"}
            ]
       
        let parties = [
            "NDP",
            "Liberal",
            "Conservative",
            "Green"
            ]
        
        districts.forEach(district=>{
          parties.forEach(party=>{
              
            insertPromises.push(pool.query(`
                INSERT INTO party_votes (party_name, district, province, votes) VALUES 
                ("${party}","${district.name}", "${district.province}", ${Math.floor(Math.random()*100)});
            `));
              
          }) // party 
        });// district
        
        return Promise.all(insertPromises);
    })
    .then(result=>{
        console.log('setup successful');
        process.exit();
    })
    .catch(error=>{
        console.log(error);
        process.exit();
    });
})
.catch(error=>{
    console.log(error);
    process.exit();
});
