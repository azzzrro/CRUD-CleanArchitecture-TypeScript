import { getAllUsers } from "../../repositories/adminRepository";

export const getUsers = async()=>{
 const userData = await getAllUsers()
 return userData   
}

