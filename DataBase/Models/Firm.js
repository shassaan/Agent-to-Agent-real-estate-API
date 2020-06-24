const mongoose = require('mongoose')
var Schema = mongoose.Schema;
var Firm = mongoose.Schema({
    name: String,
    email:String,
    phone:String,
    fax:String,
    website:String,
    adminUser:{type:Schema.Types.ObjectId,ref:'Agent'},
    agents:[{type:Schema.Types.ObjectId,ref:'Agent'}],
    city:{type:Schema.Types.ObjectId,ref:'City'},
});
module.exports = mongoose.model('Firm',Firm);


