const mongoose = require("mongoose");

// constructor
const Schema = mongoose.Schema;

const chapterSchema = new Schema({
  // put properties you would like each book to have
  title: {type: String, required: true, maxLength:100},
  text: String,
  pages: {type:Number, min:1}

});

// compile into a Model
exports.Chapter = mongoose.model('Book', chapterSchema);
exports.chapterSchema = chapterSchema;
