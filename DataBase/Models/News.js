const mongoose = require('mongoose')
var News = mongoose.Schema({
    text: String,
    dateTime:Date,
})
module.exports = mongoose.model('News',News);

