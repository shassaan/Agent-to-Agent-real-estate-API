const express = require('express');
const app = express();
const UserRoute = require('./Routes/UserRoute');
const AgentRoute = require('./Routes/AgentRoute');
const FirmRoute = require('./Routes/FirmRoute');
const CityRoute = require('./Routes/CityRoute');

const DataBase = require('./DataBase/Database');

const port = 8080;
app.use(express.json());



app.use('/api/users',UserRoute);
app.use('/api/agents',AgentRoute);
app.use('/api/firms',FirmRoute);
app.use('/api/cities',CityRoute);






app.listen(port,()=>{
    console.log("server Started Listening at :",port)
})