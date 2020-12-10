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

// compile into a Model
exports.Book = mongoose.model('Book', bookSchema);
