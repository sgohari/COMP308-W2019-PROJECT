let express = require('express');
let router = express.Router();

let jwt = require('jsonwebtoken');

let passport = require('passport');

let answersController = require('../controllers/answers');

function requireAuth(req, res, next) {
    // check if the user is logged in
    if(!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}

/* GET Contact List page - READ Operation */
router.get('/', passport.authenticate('jwt', {session: false}), answersController.displayAnswers);

/* GET Route for the Add page 
   this will display the Add page */
router.get('/add', passport.authenticate('jwt', {session: false}), answersController.displayAnswerAddPage);
/* POST Route for processing the Add page */
router.post('/add', answersController.processAnswersAddPage);

/* GET request - display the Edit page */
router.get('/edit/:id', passport.authenticate('jwt', {session: false}), answersController.displayAnswerEditPage);

/* POST request - Update the database with data from the Edit Page */
router.post('/edit/:id', passport.authenticate('jwt', {session: false}), answersController.processAnswerEditPage);

/* GET request to perform the delete action */
router.get('/delete/:id', passport.authenticate('jwt', {session: false}), answersController.performDelete);

module.exports = router;
