const mongoose = require('mongoose')
var City = mongoose.Schema({
    name: String,
});
module.exports = mongoose.model('City',City);














