import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/my_tienda", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log("La base de datos está conectada"))
    .catch(err => console.log(err));