let mongoose = require('mongoose');

//create model class for survey..
let surveySchema= mongoose.Schema({
    question1: String,
    question1: String,
    question3: String,
    question4: String,
    question5: String
},
{
    collection : "question"
});

module.exports = mongoose.model('survey', surveySchema);
