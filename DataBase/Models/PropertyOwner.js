const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PropertyOwner = mongoose.Schema({
   firstName:String,
   lastName:String,
   phone:String,
   email:String,
   address:{type:Schema.Types.ObjectId,ref:'Address'}
})

module.exports = mongoose.model('PropertyOwner',PropertyOwner);