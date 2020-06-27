const express = require('express')
const router = express.Router();
const PropertyModel = require('../DataBase/Models/Property');
router.route('/')
.post((req, res) => {
    let db = new PropertyModel(req.body);
    db.save()
    .then(doc => {
        res.send(doc)
    })
    .catch(err => {
        res.send(err)
    })
})

.get((req, res) => {
    PropertyModel.find({})
    .populate('visitsPlanned')
    .populate('owners')
    .exec((err, results) => {
        res.send(results);
    })
})
router.route('/:id')
.put((req, res) => {
    const { 
        galleryImages,
        additionalImages,
        visitsPlanned,
        owners,
        ...bodyWithoutCollections } = req.body;
    PropertyModel.findOneAndUpdate(
        {
            _id: req.params.id
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
        .catch(err => res.send(err))
})
.delete((req, res)=>{
    PropertyModel.findByIdAndDelete({_id: req.params.id})
    .then(doc => res.sendStatus(200))
    .catch(err => res.send(err))
})
.get((req, res)=>{
    PropertyModel.findById({_id: req.params.id})
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
    .catch(err => res.send(err))
})

module.exports = router;