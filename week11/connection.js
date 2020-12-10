let mongoose = require('mongoose');
let mongoDB =
`mongodb+srv://Kristen:Bermuda1998@cluster0.lxtuk.mongodb.net/4920demo?retryWrites=true&w=majority`;
mongoose.connect(mongoDB, {useNewUrlParser: true,
    useUnifiedTopology:true });
    
    
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:')); 
