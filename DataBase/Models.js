const mongoose = require('mongoose')
let User = mongoose.Schema({
    email:String,
    fullName:String,
    password:String,
    gender:String,
    contactNumber:String,
    roles:[
        String
    ],
    isVerified:Boolean
});



module.exports = mongoose.model('User',User);

