import express from 'express'
import cookieParser from 'cookie-parser';
import cors from 'cors';

const corsOptions= {
    origin:process.env.CORS_ORG,
    credentials:true
}

app.use(cors(corsOptions))

app.use(express.json({limit: "16kb"}))

app.use(express.urlencoded({
    extended:true,
    limit:"10kb"
}))

app.use(express.static("public"))

app.use(cookieParser())

export {app}