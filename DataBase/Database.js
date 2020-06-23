let mongoose = require('mongoose');

const server = '127.0.0.1:27017'; // REPLACE WITH YOUR DB SERVER
const database ='propertyDb';      // REPLACE WITH YOUR DB NAME
const password = "hellocluster"
const url = `mongodb://${server}/${database}`;
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