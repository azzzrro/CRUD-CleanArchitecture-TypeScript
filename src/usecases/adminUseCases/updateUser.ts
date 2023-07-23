import { updateUser } from "../../repositories/adminRepository";

export const adminUpdateUser = async(
    username:string,
    email:string,
    mobile:string,
    image:any
)=>{
    const userData = await updateUser(username,email,mobile,image)
    return userData
}