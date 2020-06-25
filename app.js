const express = require('express');
const app = express();
const UserRoute = require('./Routes/UserRoute');
const AgentRoute = require('./Routes/AgentRoute');

const DataBase = require('./DataBase/Database');

const port = 8080;
app.use(express.json());



app.use('/api/Users',UserRoute);
app.use('/api/agents',AgentRoute)






app.listen(port,()=>{
    console.log("server Started Listening at :",port)
})