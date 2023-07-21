import {Router} from "express";
import { upload } from "../../middlewares/multer";
import { userSignup,userLogin, profile } from "../controllers/userController";
import { verifyToken } from "../../middlewares/auth";
 

const userRoute = Router()

userRoute.post('/register',upload.single('image'), userSignup)
userRoute.get('/login',userLogin)
userRoute.get('/profile',verifyToken,profile)

export default userRoute


