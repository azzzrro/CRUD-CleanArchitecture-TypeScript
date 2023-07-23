import {Request,Response} from 'express'
import {createUser} from '../../usecases/userUseCases/createUser'
import {loginUser} from '../../usecases/userUseCases/loginUser'
import { LoginResponse } from '../../usecases/userUseCases/loginUser'
import { findUser } from '../../usecases/userUseCases/findUser'
import { updateUser } from '../../usecases/userUseCases/updateUser'

export const userSignup =  async(req:Request,res:Response)=>{
    try {
        const {username,email,mobile,password} = req.body
        const image = req.file?.filename
        const userData = await createUser(username,email,mobile,password,image)
        console.log(userData);
        res.status(201).json(userData)
    } catch (error:any) {
        console.error(error);
        res.json({message:error.message})
    }
}

export const userLogin = async(req:Request,res:Response)=>{
    try{
        const email = req.query.email?.toString()
        const password = req.query.password?.toString()
        console.log(email,password);
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required.' });
        }
        
        const response:LoginResponse = await loginUser(email,password)
        const {userData,token} = response
        res.json({userData,token})
        
    }catch(error:any){
        throw new Error(error.message)
    }
}


export const profile = async(req:Request,res:Response)=>{
    try {
        const email = req.query.email?.toString()
        if(!email){
            return res.status(400).json({ message: 'Somthing Error' });
        }
        const userData = await findUser(email)        
        res.json(userData)
    } catch (error:any) {
        throw new Error(error.message)      
    }
}

export const profileUpdate = async(req:Request,res:Response)=>{
    try {

        const {username,email,mobile} = req.body
        
        const image = req.file?.filename
        const userEmail = req.query.userEmail?.toString()
        
        if(!userEmail){
            return res.status(400).json({ message:'No email provided'});
        }
        const userData = await updateUser(username,email,mobile,image,userEmail)
        
        res.json(userData)
        
        
    } catch (error:any) {
        console.log(error.message);
        
    }
}



