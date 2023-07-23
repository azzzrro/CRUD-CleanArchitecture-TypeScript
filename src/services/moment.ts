import moment from "moment";
import { UserInterface } from "../entities/userModel";

export const formatDate = async(date:any)=>{
    const formattedDate = moment(date).format('YYYY-MM-DD')
    return formattedDate
}