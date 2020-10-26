const Router = require('express');
const AlternativesController = require('../controllers/AlternativeController');

const alternativeRouter = Router();

alternativeRouter.post('/', AlternativesController.store);


module.exports = alternativeRouter;