const express = require('express')
const router = express.Router();
const {createAgent,getAllAgents} = require('../DataBase/BuisnessLayer/AgentVM');
router
.route('/')
.post(createAgent)
.get(getAllAgents)

module.exports = router;