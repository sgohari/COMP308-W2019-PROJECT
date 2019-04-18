let mongoose = require('mongoose');

// create a model class
let surveySchema = mongoose.Schema({
    surveyName: String,
    question1: String,
    answer1: String,
    question2: String,
    answer2: String,
    question3: String,
    answer3: String,
    question4: String,
    answer4: String,
    question5: String,
    answer5: String
},
{
    collection: "answersIII"
});

module.exports = mongoose.model('answer', surveySchema);