let mongoose = require('mongoose');

// create a model class
let surveySchema = mongoose.Schema({
    name: String,
    description: String,
    questions: [{
        qName: String,
        choices: [{
            cName: String,
        }]
    }]
},
{
    collection: "survey"
});

module.exports = mongoose.model('survey', surveySchema);
