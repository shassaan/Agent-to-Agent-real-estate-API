const express = require('express')
const router = express.Router();
const visitsPlanned = require('../DataBase/Models/ProperyVisitsPlanned');
router.route('/')
.post((req, res) => {
    let db = new visitsPlanned(req.body);
    db.save()
    .then(doc => {
        res.send(doc)
    })
    .catch(err => {
        res.send(err)
    })
})

.get((req, res) => {
    visitsPlanned.find({},(err,result)=>{
        res.send(result);
    })
})

.delete((req, res)=>{
    visitsPlanned.findByIdAndDelete({_id: req.body.id})
    .then(doc => res.sendStatus(200))
    .catch(err => res.send(err))
})
router.route('/:id')
.put((req, res) => {
    
    PropertyModel.findOneAndUpdate(
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