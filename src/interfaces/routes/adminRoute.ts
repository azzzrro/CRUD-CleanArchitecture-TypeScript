import { Router } from "express";
import {upload} from '../../middlewares/multer'
import { loadDashboard, loginAdmin ,findUpdateUser, updateUser, deleteUser} from "../controllers/adminController";

const adminRoute = Router()

adminRoute.post('/login',loginAdmin)
adminRoute.get('/loadDashboard',loadDashboard)
adminRoute.get('/editUser/:id',findUpdateUser)
adminRoute.put('/updateUser/:id',upload.single('image'),updateUser)
adminRoute.delete('/deleteUser/:id',deleteUser)



export default adminRoute