const express = require('express')
const router = express.Router();

const {createCity,getAllCities} = require('../DataBase/BuisnessLayer/CityVM');

router.use((req,res,next)=>{
    next();
});



router
.route('/')
.post(createCity)
.get(getAllCities)

module.exports = router;