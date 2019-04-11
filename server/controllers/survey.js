let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');

//create reference to the Schema (DB)

let surveyModel = require('../models/survey');

module.displaySurveyQuestions =  (req, res, next ) => {

    surveyModel.find((err, surveyQuestion) => {

        if(err){
            return console.error(err);
        }
        else {
            res.json({success : true, msg : 'Survey', surveyQuestion: surveyQuestion, user: req.user});

        }
    });
}

module.exports.displayAddQuestionsPage = (req, res, next ) => {
    
    res.json({ success: true, msg: 'Question Add page displyed'});
}

module.exports.processAddQuestionsPage = (req, res, next ) =>{

    let newQuestions = surveyModel({
        "question1": req.body.question1,
        "question2": req.body.question2,
        "question3": req.body.question3,
        "question4": req.body.question4,
        "question5": req.body.question5
    });

    surveyModel.create(newQuestions, (err, surveyQuestion ) => {

        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.json({success: true, msg: 'Question is added!!'});
        }
    });
}

