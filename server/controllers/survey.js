let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');

<<<<<<< HEAD
//create reference to the Schema (DB)

let surveyModel = require('../models/survey');

module.displaySurveyQuestions =  (req, res, next ) => {

    surveyModel.find((err, surveyQuestion) => {

        if(err){
            return console.error(err);
        }
        else {
            res.json({success : true, msg : 'Survey', surveyQuestion: surveyQuestion, user: req.user});

=======
// create a reference to the db schema
let surveyModel = require('../models/survey');

module.exports.displaySurveyList = (req, res, next) =>{
    surveyModel.find((err, surveyList) => {
        if(err) {
            return console.error(err);
        }
        else {
           res.json({success: true, msg: 'Survey ', surveyList: surveyList});
>>>>>>> 57ef0de852a125f07eab109b272afdcebc697c6b
        }
    });
}

<<<<<<< HEAD
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
=======
module.exports.displayAddPage = (req, res, next) => {
    res.json({success: true, msg: 'Successfully Displayed Add Page'});
}

module.exports.processAddPage = (req, res, next) => {

    let newSurvey = surveyModel({
        "name": req.body.name,
        "description": req.body.description,
        "questions": req.body.questions,
        "questionName": req.body.qName,
        "choices": req.body.choices,
        "choiceName": req.body.cName

    });

    surveyModel.create(newSurvey, (err, surveyModel) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({success: true, msg: 'Successfully Added New Survey'});
>>>>>>> 57ef0de852a125f07eab109b272afdcebc697c6b
        }
    });
}

