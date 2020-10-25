const Router = require('express');
const SessionsController = require('../controllers/SessionController');

const sessionsRouter = Router();

sessionsRouter.post('/', SessionsController.create);


module.exports = sessionsRouter;