const mongoose = require('mongoose');
var PropertySale = mongoose.Schema({
   amountRequested:Number,
   currency:String,
   newPrice:Number,
   dateOfChangingNewPrice:Date,
   evacuationDate:Date
})

module.exports = mongoose.model('PropertySale',PropertySale);