import userModel, { UserInterface } from "../entities/user/userModel";

export const saveUser = async (
    username: string,
    email: string,
    mobile: string,
    password: string,
    image: any
): Promise<UserInterface> => {
    const user = new userModel({ username, email, mobile, password, image });
    return await user.save();
};

export const findUserByEmail = async (email: string): Promise<UserInterface | null> => {
    console.log(email);
    
    const userData =  await userModel.findOne({ email })
    console.log(userData,"userdataaa");
    return userData
    
};
