let CityModel = require('../Models/City');

const createCity = (req,res) => {
    
    let db = new CityModel(req.body);
    
   
    db.save()
    .then(doc => {
        res.send(doc)
    })
    .catch(err => {
        res.send(err)
    })
}


const getAllCities = (req, res) => {
    CityModel.find({},(err, cities) => {
        res.send(cities)
    })
}
module.exports ={createCity,getAllCities};
