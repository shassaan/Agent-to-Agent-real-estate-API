const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PropertyLocation = mongoose.Schema({
    city: {type:Schema.Types.ObjectId,ref:'City'},
    neighborhood: {type:Schema.Types.ObjectId,ref:'Neighborhood'},
    street:String,
    number:String,
    apt:String,
    entrance:String,
    block:String,
    plot:String,
    subPlot:String,
    latitude:String,
    longitude:String,
    publishHouseNumber:Boolean,
})
module.exports = mongoose.model('PropertyLocation',PropertyLocation);