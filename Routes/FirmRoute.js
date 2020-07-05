const express = require('express')
const router = express.Router();
const FirmModel = require('../DataBase/Models/Firm');
const {createFirm,getAllFirms,updateFirm} = require('../DataBase/BuisnessLayer/FirmVM');
router
.route('/')
.post(createFirm)
.get(getAllFirms)
.delete((req, res)=>{
    FirmModel.findByIdAndDelete({_id: req.body.id})
    .then(doc => res.sendStatus(200))
    .catch(err => res.send(err))
})

.put(updateFirm)

module.exports = router;