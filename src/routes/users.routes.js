const Router = require('express');

const usersRouter = Router();

usersRouter.post('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});


module.exports = usersRouter;