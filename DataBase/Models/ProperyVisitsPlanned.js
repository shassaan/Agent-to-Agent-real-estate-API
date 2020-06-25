const mongoose = require('mongoose');
var PropertVisitsPlanned = mongoose.Schema({
    data:Date,
    timeBegin:Date,
    TimeClosed:Date,
    Comments:String,
})

module.exports = mongoose.model('PropertVisitsPlanned',PropertVisitsPlanned);