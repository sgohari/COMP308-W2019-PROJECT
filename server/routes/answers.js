let express = require('express');
let router = express.Router();

let jwt = require('jsonwebtoken');

let passport = require('passport');

let answerController = require('../controllers/answers');

// /* GET Contact List page - READ Operation */
// router.get('/', surveyController.displaySurveyList);
router.get('/', answerController.displayAnswerList);

router.get('/:id', answerController.exportSpecificReport);

// /* GET Route for the Add page 
//    this will display the Add page */
// router.get('/add', surveyController.displayAddPage);

/* POST Route for processing the Add page */
router.post('/add', answerController.processAddPage);

// /* GET Route for display a single survey */
// router.get('/:id', surveyController.displaySingleSurvey);


module.exports = router;