import mongoose from "mongoose";

// schema creation

const userSchema=mongoose.Schema({
    name:String,
    email:String
})

// model creation
const UserModel=  mongoose.model('User',userSchema)

export default UserModel;