const express = require('express')
const fileUplaod =  require('express-fileupload')

const router = express.Router();
const FileModel = require('../DataBase/Models/File');
router.use(fileUplaod(
    
))

router.post('/Upload', (req, res)=>{
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
      }
    
      // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
      let uploadedFile = req.files.file;
    
      // Use the mv() method to place the file somewhere on your server
      uploadedFile.mv(__basedir+'/uploads/'+uploadedFile.name.replace(/\s/g, ''), function(err) {
        if (err)
          return res.status(500).send(err);
    
        res.send('/uploads/'+uploadedFile.name.replace(/\s/g, ''));
      });
})
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
    r
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