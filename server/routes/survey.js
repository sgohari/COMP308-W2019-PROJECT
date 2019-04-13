let express = require('express');
let router = express.Router();

let jwt = require('jsonwebtoken');

let passport = require('passport');

let surveyController = require('../controllers/survey');

function requireAuth(req, res, next) {
    // check if the user is logged in
    if(!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}

router.get('/', passport.authenticate('jwt', {session:false}), surveyController.displaySurveyList);
/* GET Survey questions page - READ Operation */

/* GET Route for the Add page 
   this will display the Add page */
router.get('/add', passport.authenticate('jwt', {session: false}), surveyController.displayQuestionAddPage);

/* POST Route for processing the Add page */
router.post('/add', passport.authenticate('jwt', {session: false}), surveyController.processQuestionAddPage);

/* GET request - display the Question Edit page */
router.get('/edit/:id', passport.authenticate('jwt', {session: false}), surveyController.displayQuestionEditPage);

/* POST request - Update the database with data from the Edit Page */
router.post('/edit/:id', passport.authenticate('jwt', {session: false}), surveyController.processQuestionEditPage);

/* GET request to perform the delete action */
router.get('/delete/:id', passport.authenticate('jwt', {session: false}), surveyController.performDelete);



module.exports = router;