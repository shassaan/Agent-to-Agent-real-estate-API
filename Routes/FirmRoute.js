const express = require('express')
const router = express.Router();
const {createFirm,getAllFirms,updateFirm} = require('../DataBase/BuisnessLayer/FirmVM');
router
.route('/')
.post(createFirm)
.get(getAllFirms)

router.route('/:id')
.put(updateFirm)

module.exports = router;