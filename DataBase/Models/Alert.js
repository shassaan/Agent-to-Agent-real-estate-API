const mongoose = require('mongoose')
var Schema = mongoose.Schema;
var Alert = mongoose.Schema({
    agent:{type:Schema.Types.ObjectId,ref:'Agent'},
    alertTypes:[String]
})
const AlertModel = mongoose.model('Alert',Alert);