const mongoose = require('mongoose')
var PropertyType = mongoose.Schema({
    type: String,
    dateTime:Date,
})
module.exports = mongoose.model('PropertyType',PropertyType);

