const express = require('express');
const app = express();
const UserRoute = require('./Routes/UserRoute');
const AgentRoute = require('./Routes/AgentRoute');
const FirmRoute = require('./Routes/FirmRoute');
const CityRoute = require('./Routes/CityRoute');
const NeighbourhoodRoute = require('./Routes/NeighbourhoodRoute');
const FileRoute = require('./Routes/FileRoute');
const NewsRoute = require('./Routes/NewsRoute');
const PropertyTypeRoutes = require('./Routes/PropertyTypeRoutes');

const DataBase = require('./DataBase/Database');
const port = process.env.PORT | 8080;
app.use(express.json());



app.use('/api/users',UserRoute);
app.use('/api/agents',AgentRoute);
app.use('/api/firms',FirmRoute);
app.use('/api/cities',CityRoute);
app.use('/api/property-types',PropertyTypeRoutes);
app.use('/api/news',NewsRoute);
app.use('/api/files',FileRoute);
app.use('/api/neighbourhood',NeighbourhoodRoute);







app.listen(port,()=>{
    console.log("server Started Listening at :",port)
})