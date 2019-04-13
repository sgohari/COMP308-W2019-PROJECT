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
           res.json({success: true, msg: 'Contact List Displayed Successfully', surveyList: surveyList});
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.json({success: true, msg: 'Successfully Displayed Add Page'});
}

module.exports.processAddPage = (req, res, next) => {

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
        }
    });

    surveyModel.create(newSurvey, (err, surveyModel) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({success: true, msg: 'Successfully Added New Contact'});
        }
    });
}

