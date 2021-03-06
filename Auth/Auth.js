const jwt = require('jsonwebtoken');
const JWT_TOKEN_SECRET =  require('../Others/Constants')



const grantAccessToken = (email,roles,fullName,Id)=>{
    const at = jwt.sign({email:email,role:roles,name:fullName,id:Id},JWT_TOKEN_SECRET);
    return at;
}


const authenticateToken = (req,res,next)=>{
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, JWT_TOKEN_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
}

module.exports = {authenticateToken,grantAccessToken};

