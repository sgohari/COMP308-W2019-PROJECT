let mongoose = require('mongoose');

<<<<<<< HEAD
//create model class for survey..
let surveySchema= mongoose.Schema({
    question1: String,
    question1:String,
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
    name: String,
    description: String,
    questions: [{
        qName: String,
        choices: [{
            cName
        }]
    }]
},
{
    collection: "survey"
});

module.exports = mongoose.model('survey', surveySchema);
>>>>>>> 57ef0de852a125f07eab109b272afdcebc697c6b
