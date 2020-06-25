const mongoose = require('mongoose')
var City = mongoose.Schema({
    name: {type:String},
});
module.exports = mongoose.model('City',City);














