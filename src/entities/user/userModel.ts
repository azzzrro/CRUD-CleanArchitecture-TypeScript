import mongoose,{Document,Schema} from 'mongoose'

export interface UserInterface extends Document{
    username:string
    email:string
    mobile:string
    password:string
    image:any
    isAdmin:boolean
}


const userSchema:Schema = new Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },    
    password:{
        type:String,
        required:true
    },
    image:{
        type:String
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})


export default mongoose.model<UserInterface>('User',userSchema)