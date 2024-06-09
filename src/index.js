import dotenv from 'dotenv';
import mongoose from "mongoose";
import connectDB from './db/index.js'; //exception 

dotenv.config({
    path:'./env'
})









// ;(async ()=>{
//     try{
//        await mongoose.connect(`${process.env}/${DB_Name}`)
//         app.on("error",(error)=>{
//             console.log("ERRr:",error)
//             throw error
//         })

//         app.listen(process.env.PORT,(error)=>{
//             console.log(`app is running on port ${process.env.PORT}`)
//         })
//     }
//     catch(error){
//         console.error("Error: ",error)
//         throw error
//     }
// })
