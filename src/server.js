require('dotenv/config');

const express = require('express');
const app = express();
const logger = require('./middleware/logger');

app.use(logger.logger);
app.use(logger.loggerDev);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});