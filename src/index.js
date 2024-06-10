import dotenv from 'dotenv';
import mongoose from "mongoose";
import connectDB from './db/index.js'; //exception 

dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.on("error",()=>{
        console.log(`error: ${err}`)
        throw error
    })

    app.listen(process.env.PORT||800,()=>{
        console.log(`web running on port ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("encounter error from index,js catch segment and error is",error);
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
