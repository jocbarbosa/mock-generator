const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.json({ message: 'hello' })
});

routes.get('/mock/:mockId', () => {

});

module.exports = routes;