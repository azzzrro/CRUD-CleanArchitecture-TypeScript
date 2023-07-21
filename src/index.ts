import express,{Request,Response} from 'express'
import connectDB from './config/mongo';
import cookieParser from 'cookie-parser'
import cors from 'cors'
import userRoute from './interfaces/routes/userRoute';


const app = express()
app.use(cors())

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/public/images',express.static('public/images'));


const allowedOrigins = ['http://localhost:3000'];
app.use(
  cors({
    origin: function (origin, callback) {
      // Check if the origin is in the allowedOrigins array or is undefined
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  })
);


app.use('/',userRoute)

const port:number = 5000;

connectDB()

app.get('/',(req:Request,res:Response)=>{
    res.send().status(200)
})

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);   
})