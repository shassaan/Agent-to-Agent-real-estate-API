const express = require('express')
const router = express.Router();
const PropertyTypeModel = require('../DataBase/Models/PropertyType');
router.route('/')
.post((req, res) => {
    let db = new PropertyTypeModel(req.body);
    db.save()
    .then(doc => {
        res.send(doc)
    })
    .catch(err => {
        res.send(err)
    })
})

.get((req, res) => {
    PropertyTypeModel.find({},(err,result)=>{
        res.send(result);
    })
})

.delete((req, res)=>{
    PropertyTypeModel.findByIdAndDelete({_id: req.body.id})
    .then(doc => res.sendStatus(200))
    .catch(err => res.send(err))
})
router.route('/:id')
.put((req, res) => {
    PropertyTypeModel.findOneAndUpdate(
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