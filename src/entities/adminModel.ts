import mongoose,{Document,Schema} from "mongoose";

export interface AdminInterface extends Document{
    email:string,
    password:string
}

const adminSchema:Schema = new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

export default  mongoose.model<AdminInterface>('admin',adminSchema)
