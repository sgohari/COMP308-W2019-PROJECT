let mongoose = require('mongoose');

// create a model class
let surveySchema = mongoose.Schema({
    answer1: String,
    answer2: String,
    answer3: String,
    answer4: String,
    answer5: String
},
{
    collection: "answersIII"
});

module.exports = mongoose.model('survey', surveySchema);