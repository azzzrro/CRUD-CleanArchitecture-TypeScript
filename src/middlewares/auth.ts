import Jwt from 'jsonwebtoken'
import { UserInterface } from '../entities/user/userModel'
import {Request,Response,NextFunction} from 'express'

export const generateAuthToken = (existingUser:UserInterface):string=>{
    const { _id, username, email, mobile, isAdmin, image } = existingUser;
    const jwtSecretKey = "t9rXw5bF2mS7zQ8p"
    const token = Jwt.sign({ _id, username, email, mobile, isAdmin, image },jwtSecretKey)
    return token
}


export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const authHeader = req.headers.authorization;
      const token = authHeader && authHeader.split(' ')[1];
  
      if (!token) {
        return res.status(401).json({ error: 'No token provided' });
      }
  
      const decode = Jwt.verify(token, 't9rXw5bF2mS7zQ8p')
      next();
    } catch (error) {
      console.log(error);
      res.status(401).json({ error: 'Invalid token' });
    }
  };
 