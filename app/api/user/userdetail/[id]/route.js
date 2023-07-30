import { dbConnect } from "@/utils/dbConnect";
import User from "@/models/User";



export const GET = async(request, { params})=>{
  

const id = params.id;

try {
    
await dbConnect();
const user = await User.findById(params.id).populate("blogs"); 
return new Response(JSON.stringify(user), { status:201})


} catch (error) {
  console.log(error);    
 }

}