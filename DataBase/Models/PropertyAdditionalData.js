const mongoose = require('mongoose');
var PropertyAdditionalData = mongoose.Schema({
    builtBy:String,
    yearBuilt:String,
    registeredAt:String,
    landOwnerShip:String,
    additionalBuildingOption:String,
    buildingRightsAvailable:String,
    parking:Number,
    storage:Number,
    garden:Number,
    privateEntrance:Boolean,
    wheelChair:Boolean,
    directions:String
})
module.exports = mongoose.model('PropertyAdditionalData',PropertyAdditionalData);