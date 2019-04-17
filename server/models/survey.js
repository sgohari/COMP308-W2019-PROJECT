let mongoose = require('mongoose');

// create a model class
let surveySchema = mongoose.Schema({
    surveyName: String,
    question1: String,
    question2: String,
    question3: String,
    question4: String,
    question5: String,
    start: Date,
    current: Date,
    end: Date
},
{
    collection: "surveysIII"
});

module.exports = mongoose.model('survey', surveySchema);