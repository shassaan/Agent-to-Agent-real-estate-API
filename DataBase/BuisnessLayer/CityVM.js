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
const updateCity = (req, res) => {
    CityModel.findOneAndUpdate(
        {
            _id: req.params.id
        },
        req.body,
        {
            new:true
        }
    )
    .then(doc => res.send(doc))
    .catch(err => res.send(err))
}
module.exports ={createCity,getAllCities,updateCity};
