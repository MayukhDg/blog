import User from "@/models/User";
import { dbConnect } from "@/utils/dbConnect";



export const POST = async(request)=>{
 
const { name, email, password, image } = await request.json();


try {
  await dbConnect();
  
  const existingUser = await User.findOne({email});

  if(existingUser){
    throw new Error( "USer already exists")
  }
 
} catch (error) {
   console.log(error) 
}


try {
   await dbConnect();
   
   const newUser = new User({
    name, email, password, image
   }) 


   newUser.save();

   return new Response(JSON.stringify(newUser),{status:201})
   
} catch (error) {
    console.log(error);
}


}