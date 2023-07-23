import { UserInterface } from "../../entities/userModel"
import { findUserByEmail,updateOne } from "../../repositories/userRepository"
import { securePassword } from "../../services/bcrypt"


export const updateUser =async (
    username:string,
    email:string,
    mobile:string,
    image:any,
    userEmail:string
    ) => {
    try{
    const existingUser = await findUserByEmail(userEmail)
    
    if(existingUser){
        const userData = await updateOne(
            username,
            email,
            mobile,
            image
        )
        return userData
    }
}
catch(error){
    throw new Error ("User not found")
}
}