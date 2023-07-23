import { Router } from "express";
import {upload} from '../../middlewares/multer'
import { loadDashboard, loginAdmin ,findUpdateUser, updateUser} from "../controllers/adminController";

const adminRoute = Router()

adminRoute.post('/login',loginAdmin)
adminRoute.get('/loadDashboard',loadDashboard)
adminRoute.get('/editUser/:id',findUpdateUser)
adminRoute.put('/updateUser/:id',upload.single('image'),updateUser)



export default adminRoute