const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Neighborhood = mongoose.Schema({
    name: String,
    city: {type:Schema.Types.ObjectId,ref:'City'}
})
const NeighborhoodModel = mongoose.model('Neighborhood',Neighborhood);


