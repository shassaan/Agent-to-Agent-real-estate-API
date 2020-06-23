let User = require('../Models');
const {grantAccessToken} = require('../../Auth/Auth')

const login = (req,res) => {
    const {email,password} = req.body;
    User.findOne({
        email:email,
        password:password,
        
    })
    .then(doc => {
        if(doc){
            if(!doc.isVerified) res.send("Your account is not verified")
            let token = grantAccessToken(email,password)
            res.send(token)
        }else{
            res.send("Invalid credentials")
        }
    })
    .catch(err => {
        console.log(err)
        res.send(err)
    })
}


const signup = (req,res) => {
    
    let db = new User(req.body);
    User.find({email:req.body.email})
    .then((doc)=>{
        if(doc.length > 0){
            res.send("Email already exists");
        }
    })
    .catch(err => {
        console.log(err)
    })
   
    db.save()
    .then(doc => {
        res.send(doc)
    })
    .catch(err => {
        
        res.sendStatus(422)
    })
}


module.exports = {login,signup};
