const mongoose = require('mongoose');
var PropertVisitsPlanned = mongoose.Schema({
    date:Date,
    timeBegin:Date,
    TimeClosed:Date,
    Comments:String,
    property:{type:mongoose.Schema.Types.ObjectId,ref:'Property'}
})

module.exports = mongoose.model('PropertVisitsPlanned',PropertVisitsPlanned);