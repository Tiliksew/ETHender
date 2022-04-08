import mongoose from "mongoose";
accountSchema=mongoose.Schema({
    username:String,
    password:String,
    recoveryCode:String
})
const account=mongoose.model('Account',accountSchema)
export {account}