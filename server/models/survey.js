let mongoose = require('mongoose');

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