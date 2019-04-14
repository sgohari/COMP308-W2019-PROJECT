let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');

// create a reference to the db schema
let answerModel = require('../models/answer');

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
            "answer1": req.body.answer1,
            "answer2": req.body.answer2,
            "answer3": req.body.answer3,
            "answer4": req.body.answer4,
            "answer5": req.body.answer5,
    });

    answerModel.create(newAnswer, (err, answerModel) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({success: true, msg: 'Successfully Added New Answers'});
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

