import pkg from 'mongoose';
const { Schema, model } = pkg;

//import {Schema, model} from "mongoose";

const PostSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    }
});
export default model("Posts",PostSchema )