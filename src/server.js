require('dotenv/config');

const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_STRING_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(logger.logger);
app.use(logger.loggerDev);
app.use(express.json());
app.use(require('./routes'));
app.use('*', (req, res) => {
    res.status(404).send({ message: 'Resource not found' });
});

app.listen(process.env.PORT, () => {
    console.log(`May the force be with you on port ${process.env.APP_PORT}`);
});