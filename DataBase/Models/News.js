const mongoose = require('mongoose')
var News = mongoose.Schema({
    title:String,
    text: String,
    dateTime:Date,
})
module.exports = mongoose.model('News',News);

