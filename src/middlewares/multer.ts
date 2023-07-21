import multer from "multer";
import {Request} from 'express'
import path from "path"
const storage = multer.diskStorage({
  destination: function (req:Request, file:any, cb:any) {
    cb(null, 'public/images');
  },
  filename: function (req:Request, file:any, cb:any) {
    const name = Date.now() + '-' + file.originalname;
    cb(null, name);
  }
});

export const upload = multer({ storage: storage });