const Router = require('express');
const QuestionsController = require('../controllers/QuestionController');

const questionRouter = Router();

questionRouter.post('/', QuestionsController.store);


module.exports = questionRouter;