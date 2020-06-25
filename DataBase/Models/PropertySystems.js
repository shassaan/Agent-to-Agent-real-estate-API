const mongoose = require('mongoose');
var PropertySystems = mongoose.Schema({
    ac:Boolean,
    acDescription:String,
    heating:Boolean,
    heatingDescription:String,
    closets:Boolean,
    gratedWindows:Boolean,
    furniture:String,
})
module.exports = mongoose.model('PropertySystems',PropertySystems);