let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');

// create a reference to the db schema
let answerModel = require('../models/answers');

module.exports.displayAnswerList = (req, res, next) =>{
    answerModel.find((err, answerList) => {
        if(err) {
            return console.error(err);
        }
        else {
           res.json({success: true, msg: 'Answer List Displayed Successfully', answerList: answerList});
        }
    });
}

// module.exports.displayAddPage = (req, res, next) => {
//     res.json({success: true, msg: 'Successfully Displayed Add Page'});
// }

module.exports.processAddPage = (req, res, next) => {

    let newAnswer = answerModel({
            "surveyName": req.body.surveyName,
            "question1": req.body.question1,
            "answer1": req.body.answer1,
            "question2": req.body.question2,
            "answer2": req.body.answer2,
            "question3": req.body.question3,
            "answer3": req.body.answer3,
            "question4": req.body.question4,
            "answer4": req.body.answer4,
            "question5": req.body.question5,
            "answer5": req.body.answer5,
    });

    answerModel.create(newAnswer, (err, answerModel) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({success: true, msg: 'Thank you for taking the survey'});
        }
    });
}

// module.exports.displaySingleSurvey = (req, res, next) => {
//     let id = req.params.id;

//     surveyModel.findById(id, (err, surveyObject) => {
//         if(err) {
//             console.log(err);
//             res.end(err);
//         }
//         else
//         {
//             res.json({success: true, msg: 'Successfully Displayed Survey to Take', survey: surveyObject});
//         }
//     });
// }

