import mongoose from "mongoose";

mongoose.connect("mongodb+srv://admin:EUglKwMjDBrW5MTU@mytienda.pgtba.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log("La base de datos está conectada"))
    .catch(err => console.log(err));
    

/* Otra forma con atlas:

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://admin:<password>@mytienda.pgtba.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});*/


/* esta es otra forma, de manera local 

import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/my_tienda", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log("La base de datos está conectada"))
    .catch(err => console.log(err));
    */