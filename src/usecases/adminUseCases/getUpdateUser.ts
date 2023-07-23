import { UserInterface } from "../../entities/userModel";
import { findUpdateUser } from "../../repositories/adminRepository";

export const getUpdateUser = async(_id:string):Promise<UserInterface|null>=>{
    const userData = await findUpdateUser(_id)
    return userData
}