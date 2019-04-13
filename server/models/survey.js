let mongoose = require('mongoose');

// create a model class
let surveySchema = mongoose.Schema({
    surveyName: String,
    surveyQuestion: [{
        question: String,
        choice1: String,
        choice2: String,
        choice3: String,
        choice4: String
    }]
},
{
    collection: "first"
});

module.exports = mongoose.model('survey', surveySchema);