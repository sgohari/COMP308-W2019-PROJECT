let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');

// create a reference to the db schema
let surveyModel = require('../models/survey');

module.exports.displaySurveyList = (req, res, next) =>{
    surveyModel.find((err, surveyList) => {
        if(err) {
            return console.error(err);
        }
        else {
           res.json({success: true, msg: 'Survey List Displayed Successfully', surveyList: surveyList});
        }
    });
}

module.exports.displayQuestionAddPage = (req, res, next) => {

    res.json({success: true, msg: 'Successfully Displayed Add Survey Page'});
}

module.exports.processQuestionAddPage = (req, res, next) => {
    let id = req.params.id;

    let newSurvey = surveyModel({
        "_id": id,
        "question1": req.body.question1,
        "question2": req.body.question2,
        "question3": req.body.question3,
        "question4": req.body.question4,
        "question5": req.body.question5
    });

    surveyModel.create({_id: id}, newSurvey, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({success: true, msg: 'Successfully Added New Survey Questions'});
        }
    });
}

module.exports.displayQuestionEditPage = (req, res, next) => {
    let id = req.params.id;

    surveyModel.findById(id, (err, surveyObject) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.json({success: true, msg: 'Successfully Displayed survey to Edit', survey: surveyObject});
        }
    });
}


module.exports.processQuestionEditPage = (req, res, next) => {
    let id = req.params.id;

    let updateModel = surveyModel({
        "_id": id,
        "question1": req.body.question1,
        "question2": req.body.question2,
        "question3": req.body.question3,
        "question4": req.body.question4,
        "question5": req.body.question5
    });

    surveyModel.update({_id: id}, updateModel, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({success: true, msg: 'Successfully Edited Survey', survey: updateModel});
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
            res.json({success: true, msg: 'Successfully Deleted Survey'});
        }
    });
}



        
        

