require('dotenv/config');

const express = require('express');
const app = express();
const morgan = require('morgan');
const fs = require('fs');

app.use(morgan('common', {
    stream: fs.createWriteStream('./logs/track.log', { flags: 'a' })
}));

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});