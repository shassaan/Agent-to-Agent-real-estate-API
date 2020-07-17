const express = require('express')
const router = express.Router();
const PropertyModel = require('../DataBase/Models/Property');
const { authenticateToken } = require('../Auth/Auth');
const { json } = require('body-parser');
router.route('/')
.post(authenticateToken,(req, res) => {
    var createdDate = new Date()
    let db = new PropertyModel({...req.body,createdDate});
    db.save()
    .then(doc => {
        res.send(doc)
    })
    .catch(err => {
        res.status(400).send(err)
    })
})

.get((req, res) => {
    PropertyModel.find({})
    .populate("approvedDisApprovedBy")
    .populate("agent")
    .populate("firm")
    .populate("visitsPlanned")
    .populate("owners")
    .populate("type")
    .populate("locationCity")
    .populate("locationNeighborhood")
    
    .exec((err, results) => {
        res.send(results);
    })
})
.delete(authenticateToken,(req, res)=>{
    PropertyModel.findByIdAndDelete({_id: req.body.id})
    .then(doc => res.sendStatus(200))
    .catch(err => res.status(400).send(err))
})

.put(authenticateToken,(req, res) => {
    var createdDate = new Date();
    const { 
        galleryImages,
        additionalImages,
        visitsPlanned,
        owners,
        priceChange,
        ...bodyWithoutCollections } = req.body;
    PropertyModel.findOneAndUpdate(
        {
            _id: req.body.id
        },
            
            {
                createdDate,
                ...bodyWithoutCollections,
                  $push: { 
                      ...(req.body.galleryImages && {galleryImages:req.body.galleryImages}),
                    ...(req.body.additionalImages && {additionalImages:req.body.additionalImages}) ,
                    ...(req.body.visitsPlanned && {visitsPlanned:req.body.visitsPlanned}) ,
                    ...(req.body.owners && {owners:req.body.owners}) ,
                    ...(req.body.priceChange && {priceChange:req.body.priceChange}),
                 },
                

            },
            


        {
            new: true
        }
    )
        .then(doc => 
            {
                res.send(doc)
            })
        .catch(err => res.status(400).send(err))
})

.get((req, res)=>{
    PropertyModel.findById({_id: req.body.id})
    .populate("approvedDisApprovedBy")
    .populate("agent")
    .populate("firm")
    .populate("visitsPlanned")
    .populate("owners")
    .populate("type")
    .populate("locationCity")
    .populate("locationNeighborhood")
    
    .then(doc => {
        res.send(doc)
    })
    .catch(err => res.status(400).send(err))
})

router.route('/house-visits')
.get((req, res) => {
    PropertyModel.findById({_id: req.body.id})
    .populate("approvedDisApprovedBy")
    .populate("agent")
    .populate("firm")
    .populate("visitsPlanned")
    .populate("owners")
    .populate("type")
    .populate("locationCity")
    .populate("locationNeighborhood")
    
    .then(doc => {
        res.send(doc)
    })
    .catch(err => res.status(400).send(err))
})
module.exports = router;
