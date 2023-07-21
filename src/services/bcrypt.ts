import bcrypt from 'bcrypt'

export const securePassword=async(
    password:string
)=>{
    return await bcrypt.hash(password,10)
}

export const matchPassword=async(
    passwordOne:string,
    passwordTwo:string
)=>{
    return await bcrypt.compare(passwordOne,passwordTwo)
}