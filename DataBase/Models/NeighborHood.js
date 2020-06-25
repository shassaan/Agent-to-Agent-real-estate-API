const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Neighborhood = mongoose.Schema({
    name: String,
})
module.exports = mongoose.model('Neighborhood',Neighborhood);


