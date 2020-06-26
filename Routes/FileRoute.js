const express = require('express')
const router = express.Router();
const FileModel = require('../DataBase/Models/File');
router.route('/')
.post((req, res) => {
    let db = new FileModel(req.body);
    db.save()
    .then(doc => {
        res.send(doc)
    })
    .catch(err => {
        res.send(err)
    })
})

.get((req, res) => {
    FileModel.find({},(err,result)=>{
        res.send(result);
    })
})
router.route('/:id')
.put((req, res) => {
    FileModel.findOneAndUpdate(
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