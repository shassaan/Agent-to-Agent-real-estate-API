const express = require('express')
const router = express.Router();
const NewsModel = require('../DataBase/Models/News');
router.route('/')
.post((req, res) => {
    let db = new NewsModel(req.body);
    db.save()
    .then(doc => {
        res.send(doc)
    })
    .catch(err => {
        res.send(err)
    })
})

.get((req, res) => {
    NewsModel.find({},(err,result)=>{
        res.send(result);
    })
})
.delete((req, res)=>{
    NewsModel.findByIdAndDelete({_id: req.body.id})
    .then(doc => res.sendStatus(200))
    .catch(err => res.send(err))
})
router.route('/:id')
.put((req, res) => {
    NewsModel.findOneAndUpdate(
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

.get((req, res)=>{
    NewsModel.findById({_id: req.params.id})
    .then(doc => res.send(doc))
    .catch(err => res.send(err))
});

module.exports = router;
