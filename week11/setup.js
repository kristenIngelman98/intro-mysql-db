const {Book} = require("./Models/Book.js");
const {Chapter} = require("./Models/Chapter.js");

const db = require("./connection.js");

// make sure that the db connection is successful
db.once("open", ()=>{
  console.log("connected!");

  // creating a new book document by calling the book model we created earlier
  // using a constructor function
  // param constructor will take is an object
  const book1 = new Book({
    title: "Gardening for beginners",
    author: "Kristen Ingelman"
  });

  book1.save(); // save and store document to the db (asynchronous!)


  
}); // end of connection open