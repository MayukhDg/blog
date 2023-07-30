import Blog from "@/models/Blog";
import { dbConnect } from "@/utils/dbConnect";


export const POST = async(request)=>{
  const { title, content, id, image } = await request.json();
   

  try {
    await dbConnect();
    const newBlog = await new Blog({title, content, image, user:id});
    await newBlog.save();
    return new Response(JSON.stringify(newBlog), { status:201}) 
  } catch (error) {
    console.log(error);   
  }

}