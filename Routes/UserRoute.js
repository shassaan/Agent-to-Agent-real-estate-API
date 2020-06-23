const express = require('express')
const router = express.Router();
const {authenticateToken} = require('../Auth/Auth')
const {login,signup} = require('../DataBase/BuisnessLayer/UserVM');

router.use((req,res,next)=>{
    next();
});


router.post('/login',login);
router.route('/')
.post(signup)

.get(authenticateToken,(req,res)=>{
    res.send(req.user)
    
})

module.exports = router;