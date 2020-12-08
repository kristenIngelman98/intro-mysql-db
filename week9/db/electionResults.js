const {cp} = require('./connection.js');

cp
.then(pool=>{
  // queries go here
})
.catch(error=>{
    console.log(error);
    process.exit();
});
