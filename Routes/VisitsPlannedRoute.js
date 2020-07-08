const express = require('express')
const router = express.Router();
const visitsPlanned = require('../DataBase/Models/ProperyVisitsPlanned');
const { authenticateToken } = require('../Auth/Auth');
router.route('/')
.post(authenticateToken,(req, res) => {
    let db = new visitsPlanned(req.body);
    db.save()
    .then(doc => {
        res.send(doc)
    })
    .catch(err => {
        res.status(400).send(err)
    })
})

.get((req, res) => {
    visitsPlanned.find({},(err,result)=>{
        res.send(result);
    })
})

.delete(authenticateToken,(req, res)=>{
    visitsPlanned.findByIdAndDelete({_id: req.body.id})
    .then(doc => res.sendStatus(200))
    .catch(err => res.status(400).send(err))
})

.put(authenticateToken,(req, res) => {
    
    PropertyModel.findOneAndUpdate(
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