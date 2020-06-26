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
router.route('/:id')
.put((req, res) => {
    NeighborhoodModel.findOneAndUpdate(
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
})

module.exports = router;