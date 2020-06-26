const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PropertyOwner = mongoose.Schema({
   firstName:String,
   lastName:String,
   phone:String,
   email:String,
   street:String,
   city:{type:Schema.Types.ObjectId,ref:'City'},
   property:{type:Schema.Types.ObjectId,ref:'Property'}
})

module.exports = mongoose.model('PropertyOwner',PropertyOwner);