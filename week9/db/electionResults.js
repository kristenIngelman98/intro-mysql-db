const {cp} = require('./connection.js');

cp
.then(pool=>{
  // election results query
    pool.query(`SELECT SUM(votes) AS total_votes_for_party, party_name FROM party_votes
                GROUP BY party_name;`)
    .then(results=>{
      console.log("Final election results \n", results);
      
      // which parties got more than 25% of the vote?
      return pool.query(`
        /* Total Votes*/
        SELECT SUM(votes) INTO @total_votes FROM party_votes;
        /* Use total votes to figure out who got > 25% */
        
        SELECT total_votes_for_party, party_name FROM
        (SELECT SUM(votes) AS total_votes_for_party, party_name FROM party_votes
        GROUP BY party_name) AS results
        WHERE total_votes_for_party > 0.25*@total_votes;
        
        
      `);
    })
    .then(results=>{
      console.log("Parties with more than 25% of the vote \n ", results[1]);
      // vote counts by Province
      return pool.query(`
        SELECT SUM(votes) AS votes, province, party_name 
        FROM party_votes
        GROUP BY province, party_name;
        
      `);
    })
    .then(results=>{
      console.log("Vote counts by province \n", results);
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
