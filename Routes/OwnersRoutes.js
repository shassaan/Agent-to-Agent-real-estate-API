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
        res.send(err)
    })
})

.get((req, res) => {
    owners.find({},(err,result)=>{
        res.send(result);
    })
})
router.route('/:id')
.delete((req, res)=>{
    owners.findByIdAndDelete({_id: req.params.id})
    .then(doc => res.sendStatus(200))
    .catch(err => res.send(err))
})
.put((req, res) => {
    
    owners.findOneAndUpdate(
        {
            _id: req.params.id
        },
            
            req.body,
            


        {
            new: true
        }
    )
        .then(doc => res.send(doc))
        .catch(err => res.send(err))
})

module.exports = router;