let mongoose = require('mongoose');

// create a model class
let answerSchema = mongoose.Schema({
  "answer1": String,
  "answer2": String,
  "answer3": String,
  "answer4": String,
  "answer5": String

},
{
    collection: "first"
});

module.exports = mongoose.model('answers', answerSchema);