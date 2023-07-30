import Blog from "@/models/Blog"
import { dbConnect } from "@/utils/dbConnect"


export const GET = async (request)=>{
  try {
    
    await dbConnect();
    const blogs = await Blog.find({}).populate("creator");
    return new Response(JSON.stringify(blogs),{ status:201 })
  } catch (error) {
    console.log(error);
  }
}