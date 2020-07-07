const express = require('express')
const router = express.Router();
const owners = require('../DataBase/Models/PropertyOwner');
router.route('/')
.post((req, res) => {
    let db = new owners(req.body);
    db.save()
    .then(doc => {
        res.send(doc)
    })
    .catch(err => {
        res.status(400).send(err)
    })
})

.get((req, res) => {
    owners.find({},(err,result)=>{
        res.send(result);
    })
})

.delete((req, res)=>{
    owners.findByIdAndDelete({_id: req.body.id})
    .then(doc => res.sendStatus(200))
    .catch(err => res.status(400).send(err))
})

.put((req, res) => {
    
    owners.findOneAndUpdate(
        {
            _id: req.body.id
        },
            
            req.body,
            


        {
            new: true
        }
    )
        .then(doc => res.send(doc))
        .catch(err => res.status(400).send(err))
})

module.exports = router;