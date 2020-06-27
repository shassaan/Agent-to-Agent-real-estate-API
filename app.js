const express = require('express');
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
const port = process.env.PORT || 8080;
app.use(express.json());
global.__basedir = __dirname;

app.use('/uploads/',(req,res)=>{
    fs.readFile(__dirname+'/uploads/'+req.url,(err,data)=>{
        res.sendFile(__dirname+'/uploads/'+req.url);
    });
})

app.use('/api/users',UserRoute);
app.use('/api/agents',AgentRoute);
app.use('/api/firms',FirmRoute);
app.use('/api/cities',CityRoute);
app.use('/api/property-types',PropertyTypeRoutes);
app.use('/api/news',NewsRoute);
app.use('/api/files',FileRoute);
app.use('/api/neighbourhood',NeighbourhoodRoute);
app.use('/api/properties',PropertyRoutes);
app.use('/api/visits-planned',visitsPlannedRoutes);
app.use('/api/owners',ownersRoutes);







app.listen(port,()=>{
    console.log("server Started Listening at :",port)
})