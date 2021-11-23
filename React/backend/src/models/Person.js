import pkg from 'mongoose';
const { Schema, model } = pkg;

//import {Schema, model} from "mongoose";

const personSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }, 
    post: {
        type: String,
        required: false
    }
});
export default model("Personas",personSchema )