const mongoose = require('mongoose')
var Schema = mongoose.Schema;
var File = mongoose.Schema({
    path: String,
    uploadedBy:{type:Schema.Types.ObjectId,ref:'Agent'},
    dateTime: Date,
})
module.exports = mongoose.model('File',File);

