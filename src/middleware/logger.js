const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const logger = morgan('common', {
    stream: fs.createWriteStream(path.resolve(__dirname, '..', 'logs/trace.log'), { flags: 'a' })
});

const loggerDev = morgan('dev');

module.exports = {
    logger,
    loggerDev
};