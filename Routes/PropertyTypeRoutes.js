const express = require('express')
const router = express.Router();
const PropertyTypeModel = require('../DataBase/Models/PropertyType');
const { authenticateToken } = require('../Auth/Auth');
router.route('/')
.post(authenticateToken,(req, res) => {
    let db = new PropertyTypeModel(req.body);
    db.save()
    .then(doc => {
        res.send(doc)
    })
    .catch(err => {
        res.status(400).send(err)
    })
})

.get((req, res) => {
    PropertyTypeModel.find({},(err,result)=>{
        res.send(result);
    })
})

.delete(authenticateToken,(req, res)=>{
    PropertyTypeModel.findByIdAndDelete({_id: req.body.id})
    .then(doc => res.sendStatus(200))
    .catch(err => res.status(400).send(err))
})

.put(authenticateToken,(req, res) => {
    PropertyTypeModel.findOneAndUpdate(
        {
            _id: req.body.id
        },
        req.body,
        {
            new:true
        }
    )
    .then(doc => res.send(doc))
    .catch(err => res.status(400).send(err))
})

module.exports = router;