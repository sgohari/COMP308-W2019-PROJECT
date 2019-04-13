let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');

<<<<<<< HEAD
//create reference to the Schema (DB)

let surveyModel = require('../models/survey');

module.exports.displaySurveyQuestions =  (req, res, next ) => {

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
           res.json({success: true, msg: 'Contact List Displayed Successfully', surveyList: surveyList});
>>>>>>> 159390066e5487160abad8bc9df345c003247dcd
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
        }
    });

=======
module.exports.displayAddPage = (req, res, next) => {
    res.json({success: true, msg: 'Successfully Displayed Add Page'});
>>>>>>> 159390066e5487160abad8bc9df345c003247dcd
}


<<<<<<< HEAD
module.exports.displayQuestionEditPage = (req, res, next) => {
    let id = req.params.id;

    surveyModel.findById(id, (err, surveyObject) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.json({success: true, msg: 'Successfully Displayed Edited ', contact: contactObject});
=======
    let newSurvey = surveyModel({
        "surveyName": req.body.surveyName,
        "surveyDescription": req.body.surveyDescription,
        "$push": {
            "questions": {
                "questionDescription": req.body.questionDescription,
                "$push": {
                    "choices": {
                        "choiceDescription": req.body.choiceDescription
                    } 
                }
            }
>>>>>>> 159390066e5487160abad8bc9df345c003247dcd
        }
    });
}


module.exports.processQuestionEditPage = (req, res, next) => {
    let id = req.params.id;

    let updatedSurvey = surveyModel({
        "_id": id,
        "question1": req.body.question1,
        "question2": req.body.question2,
        "question3": req.body.question3,
        "question4": req.body.question4,
        "question5": req.body.question5
    });

    surveyModel.update({_id: id}, updatedSurvey, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
<<<<<<< HEAD
            res.json({success: true, msg: 'Successfully Edited Survey', survey: updatedSurvey});
        }
    })
}


module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    surveyModel.remove({_id: id}, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({success: true, msg: 'Successfully Deleted Survey question'});
=======
            res.json({success: true, msg: 'Successfully Added New Contact'});
>>>>>>> 159390066e5487160abad8bc9df345c003247dcd
        }
    });
}

        
        

