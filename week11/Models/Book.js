const mongoose = require("mongoose");

const {chapterSchema} = require("./Chapter.js");

// constructor
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  // put properties you would like each book to have
  title: {type: String, required: true, maxLength:100},
  author: {type: String, required: true, default: "anonymous"},
  chapters:[chapterSchema]

});

// create a virual property - getter method call

bookSchema.virtual('pages').get(function(){

  let pagesNum = 0;
  // this is referring to the current Schema
  this.chapters.forEach(chapter=>{
    pagesNum += chapter.pages;
  });

  return pagesNum;
});

// compile into a Model
exports.Book = mongoose.model('Book', bookSchema);
