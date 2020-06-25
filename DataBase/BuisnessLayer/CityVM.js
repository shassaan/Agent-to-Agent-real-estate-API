let CityModel = require('../Models/City');

const createCity = (req,res) => {
    
    let db = new CityModel(req.body);
    CityModel.find({name:req.body.name})
    .then((doc)=>{
        if(doc.length > 0){
            res.send("city already exists");
        }
    })
    .catch(err => {
        
    })
   
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
