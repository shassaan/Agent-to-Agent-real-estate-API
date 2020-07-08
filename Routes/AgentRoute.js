const express = require('express')
const router = express.Router();
const AgentModel = require('../DataBase/Models/Agent');
const {createAgent,getAllAgents,updateAgent,loginAgent} = require('../DataBase/BuisnessLayer/AgentVM');
const { authenticateToken } = require('../Auth/Auth');


router.route('/login')
.post(loginAgent);


router.route('/')
.post(authenticateToken,createAgent)
.get(getAllAgents)
.delete(authenticateToken,(req, res)=>{
    AgentModel.findByIdAndDelete({_id: req.body.id})
    .then(doc => res.sendStatus(200))
    .catch(err => res.status(400).send(err))
})
.put(authenticateToken,updateAgent)
module.exports = router;