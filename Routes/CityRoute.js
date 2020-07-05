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
.delete((req, res)=>{
    CityModel.findByIdAndDelete({_id: req.body.id})
    .then(doc => res.sendStatus(200))
    .catch(err => res.send(err))
})
router.route('/:id')
.put(updateCity)


module.exports = router;