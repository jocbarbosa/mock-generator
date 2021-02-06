const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MockSchema = new Schema({
    returnHeaders: Object,
    returnBody: Object,
    returnStatus: {
        type: Number,
        required: true
    }
});

const Mock = mongoose.model('Mock', MockSchema);

module.exports = Mock;