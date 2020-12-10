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

  book1.save(error=>{
    // any code that relies on this document being saved should go here
    if(error) {
      console.log(error);
      process.exit();
    }
    else {
      // if successful, create a new chapter
      const chapter1 = new Chapter({
        title: "Prologue",
        text: "Gardening is easy",
        pages:3
      });

      const chapter2 = new Chapter({
        title: "Chapter2",
        text: "Gardening is fun",
        pages:5
      });

      book1.chapters.push(chapter1);
      book1.chapters.push(chapter2);

      book1.save(error=>{
        if(error) {
          console.log(error);
          process.exit();

        } else {
          console.log(book1);

        }
      });
    }
  }); // save and store document to the db (asynchronous!)


  
}); // end of connection open