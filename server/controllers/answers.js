let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');

// create a reference to the db schema
let answerModel = require('../models/answers');

module.exports.displayAnswers = (req, res, next) =>{
    answerModel.find((err, answersList) => {
        if(err) {
            return console.error(err);
        }
        else {
           res.json({success: true, msg: 'Answers are displayedSuccessfully', answers: answersList});
        }
    });
}

module.exports.displayAnswerAddPage = (req, res, next) => {

    res.json({success: true, msg: 'Successfully Displayed Add Answer Page'});
}

module.exports.processAnswersAddPage = (req, res, next) => {
    let id = req.params.id;

    let newAnswers = answerModel({
        "_id": id,
        "answer1": req.body.answer1,
        "answer2": req.body.answer2,
        "answer3": req.body.answer3,
        "answer4": req.body.answer4,
        "answer5": req.body.answer5
    });

    answerModel.create({_id: id}, newAnswers, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({success: true, msg: 'Successfully added New Survey Answers'});
        }
    });
}

module.exports.displayAnswerEditPage = (req, res, next) => {
    let id = req.params.id;

    answerModel.findById(id, (err, answrObject) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.json({success: true, msg: 'Successfully Displayed survey to Edit', answersList: answrObject});
        }
    });
}


module.exports.processAnswerEditPage = (req, res, next) => {
    let id = req.params.id;

    let updateAnswers = surveyModel({
        "_id": id,
        "answer1": req.body.answer1,
        "answer2": req.body.answer2,
        "answer3": req.body.answer3,
        "answer4": req.body.answer4,
        "answer5": req.body.answer5
    });

    answerModel.update({_id: id}, updateAnswers, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({success: true, msg: 'Successfully Edited answer', answersList: updateAnswers});
        }
    })
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    answerModel.remove({_id: id}, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({success: true, msg: 'Successfully Deleted answer!!!'});
        }
    });
}



        
        

