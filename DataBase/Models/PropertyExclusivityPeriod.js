const mongoose = require('mongoose');
var PropertyExclusivityPeriod = mongoose.Schema({
    from:Date,
    untill:Date,
    days:Number,
    exclusivityAgreement:String,
})

module.exports = mongoose.model('PropertyExclusivityPeriod',PropertyExclusivityPeriod);