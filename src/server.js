require('dotenv/config');

const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const cors = require('cors');

app.use(cors());
app.use(logger.logger);
app.use(logger.loggerDev);
app.use(express.json());
app.use(require('./routes'));

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});