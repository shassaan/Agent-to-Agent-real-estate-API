let AgentModel = require('../Models/Agent');
const { grantAccessToken } = require('../../Auth/Auth');

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

const loginAgent = (req, res) => {
    AgentModel.findOne(
        {
            email: req.body.email,
            password: req.body.password
        }
    )
    .then(doc => {
        if(doc){
            let token = grantAccessToken(req.body.email,[]);
            res.send({token,group:doc.group});
        }else{
            res.send("Invalid credentials")
        }
    })
    .catch(err => res.send("Invalid credentials"))
}

module.exports ={createAgent,getAllAgents,updateAgent,loginAgent};
