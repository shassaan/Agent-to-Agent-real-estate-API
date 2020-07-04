let mongoose = require('mongoose');

const server = '127.0.0.1:27017'; // REPLACE WITH YOUR DB SERVER
const database ='propertyDb';      // REPLACE WITH YOUR DB NAME
const password = "hellocluster"
//const url = `mongodb://${server}/${database}`;

//const MongoClient = require('mongodb').MongoClient;
const url = `mongodb+srv://shassaan:${password}@cluster0-u7ps2.mongodb.net/${database}?retryWrites=true&w=majority`;
//const client = new MongoClient(uri, { useNewUrlParser: true });
 //client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

class Database {
  constructor() {
    this._connect()
  }
  
_connect() {
     mongoose.connect(url)
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error',err)
       })
  }
  
}

module.exports = new Database();
