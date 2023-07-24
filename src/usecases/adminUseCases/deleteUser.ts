import { UserInterface } from "../../entities/userModel";
import { deleteOne } from "../../repositories/userRepository";

export const adminDeleteUser = async(_id:string):Promise<UserInterface|object>=>{
    const response = await deleteOne(_id)
    return response
}