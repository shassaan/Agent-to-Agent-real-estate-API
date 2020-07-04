const express = require('express');
var cors = require('cors')
const app = express();
const fs = require('fs');
const UserRoute = require('./Routes/UserRoute');
const AgentRoute = require('./Routes/AgentRoute');
const FirmRoute = require('./Routes/FirmRoute');
const CityRoute = require('./Routes/CityRoute');
const NeighbourhoodRoute = require('./Routes/NeighbourhoodRoute');
const FileRoute = require('./Routes/FileRoute');
const NewsRoute = require('./Routes/NewsRoute');
const PropertyTypeRoutes = require('./Routes/PropertyTypeRoutes');
const PropertyRoutes = require('./Routes/PropertyRoute');
const visitsPlannedRoutes = require('./Routes/VisitsPlannedRoute');
const ownersRoutes = require('./Routes/OwnersRoutes');

const DataBase = require('./DataBase/Database');
const { authenticateToken } = require('./Auth/Auth');

const port = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());
global.__basedir = __dirname;

app.use('/uploads/',(req,res)=>{
    fs.readFile(__dirname+'/uploads/'+req.url,(err,data)=>{
        res.sendFile(__dirname+'/uploads/'+req.url);
    });
})


app.use('/api/users',UserRoute);
app.use('/api/agents',AgentRoute);
app.use('/api/firms',authenticateToken,FirmRoute);
app.use('/api/cities',authenticateToken,CityRoute);
app.use('/api/property-types',authenticateToken,PropertyTypeRoutes);
app.use('/api/news',authenticateToken,NewsRoute);
app.use('/api/files',authenticateToken,FileRoute);
app.use('/api/neighbourhood',authenticateToken,NeighbourhoodRoute);
app.use('/api/properties',authenticateToken,PropertyRoutes);
app.use('/api/visits-planned',authenticateToken,visitsPlannedRoutes);
app.use('/api/owners',authenticateToken,ownersRoutes);







app.listen(port,()=>{
    console.log("server Started Listening at :",port)
})