const express = require('express')
const router = express.Router();
const NeighborhoodModel = require('../DataBase/Models/NeighborHood');
router.route('/')
.post((req, res) => {
    let db = new NeighborhoodModel(req.body);
    db.save()
    .then(doc => {
        res.send(doc)
    })
    .catch(err => {
        res.send(err)
    })
})

.get((req, res) => {
    NeighborhoodModel.find({},(err,result)=>{
        res.send(result);
    })
})

.delete((req, res)=>{
    NeighborhoodModel.findByIdAndDelete({_id: req.body.id})
    .then(doc => res.sendStatus(200))
    .catch(err => res.send(err))
})

.put((req, res) => {
    NeighborhoodModel.findOneAndUpdate(
        {
            _id: req.body.id
        },
        req.body,
        {
            new:true
        }
    )
    .then(doc => res.send(doc))
    .catch(err => res.send(err))
})

module.exports = router;