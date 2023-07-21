import { saveUser,findUserByEmail } from "../../repositories/userRepository";
import {securePassword} from '../../services/bcrypt'

export const createUser=async(
    username: string,
    email: string,
    mobile: string,
    password: string,
    image:any
)=>{
    const existingUser = await findUserByEmail(email)
    if(!existingUser){
    const securedPassword = await securePassword(password)
    return await saveUser(username,email,mobile,securedPassword,image)
    }
    else{
        throw new Error("Email already exists in the database")
    }
}