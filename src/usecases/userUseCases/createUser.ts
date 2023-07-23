import { saveUser,findUserByEmail } from "../../repositories/userRepository";
import {securePassword} from '../../services/bcrypt'
import { formatDate } from "../../services/moment";

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
    const formattedDate = await formatDate(Date.now())
    return await saveUser(username,email,mobile,securedPassword,image,formattedDate)
    }
    else{
        throw new Error("Email already exists in the database")
    }
}