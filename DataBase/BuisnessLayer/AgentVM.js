let AgentModel = require('../Models/Agent');

const createAgent = (req,res) => {
    
    let db = new AgentModel(req.body);
    AgentModel.find({email:req.body.email})
    .then((doc)=>{
        if(doc.length > 0){
            res.send("Email already exists");
        }
    })
    .catch(err => {
        
    })
   
    db.save()
    .then(doc => {
        res.send(doc)
    })
    .catch(err => {
        res.send(err)
    })
}


const getAllAgents = (req, res) => {
    AgentModel.find({},(err, agents) => {
        res.send(agents)
    })
}
const updateAgent = (req, res) => {
    AgentModel.findOneAndUpdate(
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
}

module.exports ={createAgent,getAllAgents,updateAgent};
