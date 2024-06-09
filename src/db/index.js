import mongoose from 'mongoose';
import { DB_Name } from '../constants.js'; // hume yaha .js lagana padhta hai exception hai 

const connectDB= async ()=>{
    try{
        const connectionInstance=  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
        console.log(`\n mongodb connects db hosts :${connectionInstance.connection.host}`)
    }catch(error){
        console.log("Mongodb connecton error occured",error)
        process.exit(1)
    }
}

export default connectDB