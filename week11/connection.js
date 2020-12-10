let mongoose = require('mongoose');
let mongoDB =
`mongodb+srv://username:${encodeURIComponent('passwo rd!@#$%')}@cluster0-
4g0rk.gcp.mongodb.net/databasename?retryWrites=true`; mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology:true });

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:')); 
