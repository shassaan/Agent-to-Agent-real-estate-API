const mongoose = require('mongoose')
var Schema = mongoose.Schema;
var Agent = mongoose.Schema({
    email:String,
    firstName:String,
    lastName:String,
    phoneNumber:String,
    image:String,
    firm:{type:Schema.Types.ObjectId,ref:'Firm'},
    licenseNumber:String,
    idNumber:String,
    appCode:String,
    group:String,
    tags:[String],
    password:String,
});
module.exports = mongoose.model('Agent',Agent); 

