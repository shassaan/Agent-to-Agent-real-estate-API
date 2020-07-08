const express = require('express')
const router = express.Router();
const FirmModel = require('../DataBase/Models/Firm');
const {createFirm,getAllFirms,updateFirm} = require('../DataBase/BuisnessLayer/FirmVM');
const { authenticateToken } = require('../Auth/Auth');
router
.route('/')
.post(authenticateToken,createFirm)
.get(getAllFirms)
.delete(authenticateToken,(req, res)=>{
    FirmModel.findByIdAndDelete({_id: req.body.id})
    .then(doc => res.sendStatus(200))
    .catch(err => res.status(400).send(err))
})

.put(authenticateToken,updateFirm)

module.exports = router;