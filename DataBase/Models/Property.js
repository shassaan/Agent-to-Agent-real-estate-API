const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Property = mongoose.Schema({
    status:String,
    approvedDisApprovedBy:{type:Schema.Types.ObjectId,ref:'Agent'},
    firm:{type:Schema.Types.ObjectId,ref:'Firm'},
    agent:{type:Schema.Types.ObjectId,ref:'Agent'},
    exclusivityPeriod:{type:Schema.Types.ObjectId,ref:'PropertyExclusivityPeriod'},
    mainImage:String,
    galleryImages:[String],
    additionalImages:[String],
    video:[String],
    visitsPlanned:{type:Schema.Types.ObjectId,ref:'PropertVisitsPlanned'},
    sale:{type:Schema.Types.ObjectId,ref:'PropertySale'},
    lease:{type:Schema.Types.ObjectId,ref:'PropertyLease'},
    owners:[{type:Schema.Types.ObjectId,ref:'PropertyOwner'}],
    type:{type:Schema.Types.ObjectId,ref:'PropertyType'},
    physicalAttributes:{type:Schema.Types.ObjectId,ref:'PropertyPhysicalAttributes'},
    systems:{type:Schema.Types.ObjectId,ref:'PropertySystems'},
    additionalData:{type:Schema.Types.ObjectId,ref:'PropertyAdditionalData'},
    description:String,
    commentsForAgents:String,
    publishOnHomePage:Boolean,
    publishInNAR:Boolean,
    location:{type:Schema.Types.ObjectId,ref:'PropertyLocation'}
});

module.exports = mongoose.model('Property',Property);