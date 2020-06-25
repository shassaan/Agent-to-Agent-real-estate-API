const express = require('express')
const router = express.Router();
const {createAgent,getAllAgents,updateAgent} = require('../DataBase/BuisnessLayer/AgentVM');

router.route('/')
.post(createAgent)
.get(getAllAgents)

router.route('/:id')
.put(updateAgent)
module.exports = router;