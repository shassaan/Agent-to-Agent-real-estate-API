const express = require('express')
const router = express.Router();
const CityModel = require('../DataBase/Models/City');
const {createCity,getAllCities,updateCity} = require('../DataBase/BuisnessLayer/CityVM');

router.use((req,res,next)=>{
    next();
});



router
.route('/')
.post(createCity)
.get(getAllCities)

router.route('/:id')
.delete((req, res)=>{
    CityModel.findByIdAndDelete({_id: req.params.id})
    .then(doc => res.sendStatus(200))
    .catch(err => res.send(err))
})
.put(updateCity)


module.exports = router;