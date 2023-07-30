import { dbConnect } from "@/utils/dbConnect";
import User from "@/models/User";


export const POST = async(request)=>{
  
    const { email, password } = await request.json();
  
    try {
    await dbConnect();
    
    const user = await User.findOne({email}).populate("blogs")
    
    if(user.password!==password){
        return new Response("Wrong password, try again", { status:404 })
    }

    return new Response(JSON.stringify(user), {status:201});

  } catch (error) {
    console.log(error);
  }  
}