import mongoose from "mongoose";
accountSchema=mongoose.Schema({
    username:String,
    password:String,
    recoveryCode:String
})
