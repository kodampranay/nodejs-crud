import express from "express";
// import routes from './Route/routes.js';
// import mongoose from "mongoose";
// import UserModel from "./Model/Model.js";
const app=express();

const PORT=process.env.port||5000;


// import dotenv from 'dotenv'
// dotenv.config();
// app.use(express.json())

// mongoose.connect('mongodb+srv://pranay:123456AbCd@cluster0.du6zp.mongodb.net/MERNPROJECT?retryWrites=true&w=majority',()=>console.log('Connected to db'))

// app.use('/',routes)

// app.listen(PORT,()=>
// {
//     console.log('Server is running at http://localhost:'+PORT);
// })
app.get('/',(req,res)=>
{
    res.send("THis is home page")
})