const routes = require('express').Router();
const mockController = require('./controllers/mockController');


routes.post('/mock', mockController.createMock)
routes.get('/mock/:mockId', mockController.getMock);
routes.delete('/mock/:mockId', mockController.deleteMock);

module.exports = routes;