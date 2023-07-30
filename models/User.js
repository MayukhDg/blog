import mongoose from "mongoose";
import { blogSchema } from "./Blog";


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },


    password:{
        type:String,
        required:true
    },

    image:{
        type:String,
        required:true
    },

    blogs:{
        type:[blogSchema],
        ref:"Blog"
    }
})


const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;