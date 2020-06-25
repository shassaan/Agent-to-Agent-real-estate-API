const express = require('express')
const router = express.Router();
const {createFirm,getAllFirms} = require('../DataBase/BuisnessLayer/FirmVM');
router
.route('/')
.post(createFirm)
.get(getAllFirms)

module.exports = router;