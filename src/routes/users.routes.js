const Router = require('express');
const UserController = require('../controllers/UserController');

const usersRouter = Router();

usersRouter.post('/', UserController.store);


module.exports = usersRouter;