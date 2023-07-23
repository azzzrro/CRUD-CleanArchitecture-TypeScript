import { AdminInterface } from "../../entities/adminModel";
import { findAdmin } from "../../repositories/adminRepository";
import { generateadminToken} from '../../middlewares/auth'

export const adminLogin = async(email:string,password:string):Promise<AdminInterface|object>=>{
    const adminData = await findAdmin(email,password)
    if(adminData?.password === password){
        
        const adminToken = generateadminToken(adminData)
        return {adminData,adminToken}
    }else{
        console.log(adminData?.password,password);
        return ({message:"password not match"})
    }
}