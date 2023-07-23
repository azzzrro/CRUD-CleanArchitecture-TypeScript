import adminModel from "../entities/adminModel";
import { AdminInterface } from "../entities/adminModel";
import userModel, { UserInterface } from "../entities/userModel";

export const findAdmin = async(email:string,password:string):Promise<AdminInterface | null>=>{
    const adminData = await adminModel.findOne({email})
    return adminData
}

export const getAllUsers = async():Promise<UserInterface>=>{
    return await userModel.find().lean()
}

export const findUpdateUser = async(_id:string):Promise<UserInterface | null>=>{
    const userData = await userModel.findById(_id)
    return userData
}

export const updateUser = async(
    username:string,
    email:string,
    mobile:string,
    image:any
)=>{
    const userData=await userModel.findOneAndUpdate(
        {email},
        {
            $set:{
                username,
                email,
                mobile,
                image
            }
        },
        {new:true}    
    )
    return userData
}