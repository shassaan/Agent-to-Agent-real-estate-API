const mongoose = require('mongoose');
var PropertyLease = mongoose.Schema({
   amountRequested:Number,
   currency:String,
   newPrice:Number,
   dateOfChangingNewPrice:Date,
})

module.exports = mongoose.model('PropertyLease',PropertyLease);