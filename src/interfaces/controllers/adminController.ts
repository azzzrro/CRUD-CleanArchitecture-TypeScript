import { adminLogin } from "../../usecases/adminUseCases/adminLogin";
import {Request,Response} from 'express'
import { getUsers } from "../../usecases/adminUseCases/getUsers";
import { getUpdateUser } from "../../usecases/adminUseCases/getUpdateUser";
import { UserInterface } from "../../entities/userModel";
import { adminUpdateUser } from "../../usecases/adminUseCases/updateUser";

export const loginAdmin = async(req:Request,res:Response)=>{
    try {
        const {email,password} = req.body
        const adminData = await adminLogin(email,password)
        res.json(adminData)
    } catch (error) {
        throw new Error("Something error happened")
    }
}

export const loadDashboard = async(req:Request,res:Response)=>{
    try{

        const userData = await getUsers()        
        res.json(userData)

    }catch(error){
        throw new Error("Sommething error happened");
        
    }
}

export const findUpdateUser = async(req:Request,res:Response)=>{
    try {

        const userId = req.params.id
        console.log(userId,"idddd");
        const userData = await getUpdateUser(userId)
        res.json(userData)
        
    } catch (error) {
        throw new Error("Sommething error happened");
    }
}

export const updateUser = async(req:Request,res:Response)=>{
    try {
        const {username,email,mobile} = req.body
        const image = req.file?.filename
        const response = await adminUpdateUser(username,email,mobile,image)
        res.json(response)
    } catch (error) {
        res.json({message:"Couldnt Update the User"})
    }
}