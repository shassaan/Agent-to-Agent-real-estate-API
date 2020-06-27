const express = require('express')
const router = express.Router();

const {createCity,getAllCities,updateCity} = require('../DataBase/BuisnessLayer/CityVM');

router.use((req,res,next)=>{
    next();
});



router
.route('/')
.post(createCity)
.get(getAllCities)

router.route('/:id')
.put(updateCity)


module.exports = router;