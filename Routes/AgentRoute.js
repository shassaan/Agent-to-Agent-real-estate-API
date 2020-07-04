const express = require('express')
const router = express.Router();
const AgentModel = require('../DataBase/Models/Agent');
const {createAgent,getAllAgents,updateAgent,loginAgent} = require('../DataBase/BuisnessLayer/AgentVM');


router.route('/login')
.post(loginAgent);


router.route('/')
.post(createAgent)
.get(getAllAgents)

router.route('/:id')
.delete((req, res)=>{
    AgentModel.findByIdAndDelete({_id: req.params.id})
    .then(doc => res.sendStatus(200))
    .catch(err => res.send(err))
})
.put(updateAgent)
module.exports = router;