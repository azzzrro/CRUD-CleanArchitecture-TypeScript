import Jwt from 'jsonwebtoken'
import { UserInterface } from '../entities/userModel'
import {Request,Response,NextFunction} from 'express'
import { AdminInterface } from '../entities/adminModel';

export const generateAuthToken = (existingUser:UserInterface):string=>{
    const { _id, username, email, mobile, image } = existingUser;
    const jwtSecretKey = "t9rXw5bF2mS7zQ8p"
    const token = Jwt.sign({ _id, username, email, mobile, image },jwtSecretKey)
    return token
}

export const generateadminToken = (adminData:AdminInterface):string=>{
  const { email } = adminData;
  const jwtSecretKey = "t9rXw5bF2mS7zQ8p"
  const token = Jwt.sign({ email},jwtSecretKey)
  return token
}


export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const authHeader = req.headers.authorization;
      const token = authHeader && authHeader.split(' ')[1];
  
      if (!token) {
        return res.status(401).json({ error: 'No token provided' });
      }
  
      Jwt.verify(token, 't9rXw5bF2mS7zQ8p')
      
      next();
    } catch (error) {
      console.log(error);
      res.status(401).json({ error: 'Invalid token' });
    }
  };
 