const express = require('express')
const router = express.Router();
const {createAgent,getAllAgents,updateAgent,loginAgent} = require('../DataBase/BuisnessLayer/AgentVM');


router.route('/login')
.post(loginAgent);


router.route('/')
.post(createAgent)
.get(getAllAgents)

router.route('/:id')
.put(updateAgent)
module.exports = router;