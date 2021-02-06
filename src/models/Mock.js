const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MockSchema = new Schema({
    header: String,
    body: String,
    returnStatus: Number
});

const Mock = mongoose.model('Mock', MockSchema);

module.exports = Mock;