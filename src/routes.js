const routes = require('express').Router();
const mockController = require('./controllers/mockController');


routes.post('/mock', mockController.createMock)
routes.get('/mock/:mockId', mockController.getMock);

module.exports = routes;