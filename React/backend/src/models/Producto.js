import pkg from 'mongoose';
const { Schema, model } = pkg;

//import {Schema, model} from "mongoose";

const productoSchema = new Schema({
    nombre:{
        type: String,
        required: true
    },
    descrip: {
        type: String,
        required: true
    }, 
    almacen: {
        type: String,
        required: true
    }
});
export default model("Productos",productoSchema )