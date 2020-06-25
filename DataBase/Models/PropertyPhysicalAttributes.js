const mongoose = require('mongoose')
var PropertyPhysicalAttributes = mongoose.Schema({
    surface:Number,
    surfaceSource:String,
    registeredSurface:String,
    landSurface:String,
    numberOfRooms:Number,
    floors:Number,
    numberOfStairs:Number,
    Elevator:String,
    inPropertLevels:Number,
    bedRooms:Number,
    toiletRooms:Number,
    bathRooms:Number,
    overAllStatus:String,
    view:String,
    balconies:String,
})
module.exports = mongoose.model('PropertyPhysicalAttributes',PropertyPhysicalAttributes);

