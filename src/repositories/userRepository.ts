import userModel, { UserInterface } from "../entities/userModel";

export const saveUser = async (
    username: string,
    email: string,
    mobile: string,
    password: string,
    image: any,
    date:string
): Promise<UserInterface> => {
    const user = new userModel({ username, email, mobile, password, image, date });
    return await user.save();
};

export const findUserByEmail = async (email: string): Promise<UserInterface | null> => {
    const userData = await userModel.findOne({ email });
    return userData;
};

export const updateOne = async (
    username: string,
    email: string,
    mobile: string,
    image: any
): Promise<UserInterface | null> => {
    const userData = await userModel.findOneAndUpdate(
        { email },
        {
            $set: {
                username,
                email,
                mobile,
                image,
            },
        },
        { new: true }
    );
    return userData;
};


export const deleteOne = async(_id:string):Promise<UserInterface | object>=>{
    const response = await userModel.findByIdAndDelete(_id)
    if(response){
        return response
    }else{
        return ({message:"User not found"})
    }
}
