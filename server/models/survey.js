let mongoose = require('mongoose');

<<<<<<< HEAD
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
=======
// create a model class
let surveySchema = mongoose.Schema({
    surveyName: String,
    surveyDescription: String,
    questions: [{
        questionDescription: String,
        choices: [{
            choiceDescription: String
        }]
    }]
},
{
    collection: "first"
});

module.exports = mongoose.model('survey', surveySchema);
>>>>>>> 159390066e5487160abad8bc9df345c003247dcd
