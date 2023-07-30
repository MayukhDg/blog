import mongoose from "mongoose";


export const blogSchema = new mongoose.Schema({
    title:{
        type:String, 
        required:true
    },

    content:{
        type:String,
        required:true
    },

   creator:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",

    },

    image:{
        type:String,
        required:true
    },

   
})

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;