let FirmModel = require('../Models/Firm');
const createFirm = (req,res) => {
    
    let db = new FirmModel(req.body);
    FirmModel.find({email:req.body.email})
    .then((doc)=>{
        if(doc.length > 0){
            res.send("Email already exists");
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


const getAllFirms = (req, res) => {
    FirmModel.find({},(err, firms) => {
        res.send(firms)
    })
}
module.exports ={createFirm,getAllFirms};