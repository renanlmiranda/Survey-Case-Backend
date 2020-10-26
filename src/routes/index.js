const  Router  = require('express');
const usersRouter = require('./users.routes');
const sessionsRouter = require('./sessions.routes');
const questionsRouter = require('./questions.routes');
const alternativeRouter = require('./alternatives.routes');

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/questions', questionsRouter);
routes.use('/alternatives', alternativeRouter);

module.exports = routes;