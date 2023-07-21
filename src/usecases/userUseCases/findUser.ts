import { UserInterface } from "../../entities/user/userModel";
import { findUserByEmail } from "../../repositories/userRepository";

export const findUser = async(email:string):Promise<UserInterface | null>=>{
    const userData = await findUserByEmail(email)
    return userData
}