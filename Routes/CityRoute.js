const express = require('express')
const router = express.Router();
const CityModel = require('../DataBase/Models/City');
const {createCity,getAllCities,updateCity} = require('../DataBase/BuisnessLayer/CityVM');
const { authenticateToken } = require('../Auth/Auth');
router.use((req,res,next)=>{
    next();
});



router
.route('/')
.post(authenticateToken,createCity)
.get(getAllCities)
.delete(authenticateToken,(req, res)=>{
    CityModel.findByIdAndDelete({_id: req.body.id})
    .then(doc => res.sendStatus(200))
    .catch(err => res.status(400).send(err))
})

.put(authenticateToken,updateCity)


module.exports = router;