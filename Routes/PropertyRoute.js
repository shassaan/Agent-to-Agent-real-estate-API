const express = require('express')
const router = express.Router();
const PropertyModel = require('../DataBase/Models/Property');
const { authenticateToken } = require('../Auth/Auth');
router.route('/')
.post(authenticateToken,(req, res) => {
    let db = new PropertyModel(req.body);
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
    const { 
        galleryImages,
        additionalImages,
        visitsPlanned,
        owners,
        ...bodyWithoutCollections } = req.body;
    PropertyModel.findOneAndUpdate(
        {
            _id: req.body.id
        },
            
            {

                ...bodyWithoutCollections,
                $push: { 
                    galleryImages: req.body.galleryImages,
                    additionalImages: req.body.additionalImages,
                    visitsPlanned: req.body.visitsPlanned,
                    owners: req.body.owners,
                 },
                

            },
            


        {
            new: true
        }
    )
        .then(doc => res.send(doc))
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
