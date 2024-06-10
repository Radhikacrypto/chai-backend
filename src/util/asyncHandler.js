const asyncHandler=(requestHandler)=>{
    return(req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next))
        .catch((err)=>next(err))
    }
}

export  default asyncHandler


//another method

// const asyncHandler=(sunction)=>{async(req,res,next)=>{
//     try{
//         ...
//     }

//     catch(error){
//         res.status(err.code||300).json({
//             success:false,
//             message:err.message
//         })
//     }
// }}