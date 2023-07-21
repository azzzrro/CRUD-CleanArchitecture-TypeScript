import {Request,Response} from 'express'
import {createUser} from '../../usecases/userUseCases/createUser'
import {loginUser} from '../../usecases/userUseCases/loginUser'
import { LoginResponse } from '../../usecases/userUseCases/loginUser'
import { findUser } from '../../usecases/userUseCases/findUser'

export const userSignup =  async(req:Request,res:Response)=>{
    try {
        const {username,email,mobile,password} = req.body
        const image = req.file?.filename
        await createUser(username,email,mobile,password,image)
        res.status(201).send()
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
        console.log(email);        
        if(!email){
            return res.status(400).json({ message: 'Somthing Error' });
        }
        const userData = await findUser(email)        
        res.json(userData)
    } catch (error:any) {
        throw new Error(error.message)      
    }
}



