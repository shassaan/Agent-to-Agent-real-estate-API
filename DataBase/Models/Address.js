const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Address = mongoose.Schema({
   street:String,
   City:{type:Schema.Types.ObjectId,ref:'City'}
})

module.exports = mongoose.model('Address',Address);