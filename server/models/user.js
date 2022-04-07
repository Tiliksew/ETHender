import mongoose from 'mongoose'
const userSchema=mongoose.model('User',mongoose.Schema({
    firstName:String,
    middleNam:String,
    lastName:String,
    email:String,
    phoneNumber:{
    countryCode:String,
    regionalCode:String,
    number:String,
    },
    address:addressSchema,
    sex:String,

})) 
const addressSchema=mongoose.model('Address',mongoose.Schema({
    city,String,
    subcity,String,
    wereda,String,
    kebele:String,
})) 
const officerSchema=mongoose.model('Officer',mongoose.Schema({
    personalInfo:userSchema,
    officerId:String,

})) 
const supplierSchema=mongoose.model('Supplier',mongoose.Schema({
    personalInfo:userSchema,
    bussinesType:String,
    tinNumber:String,
})) 
const systemAdminSchema=mongoose.model('SystemAdmin',mongoose.Schema({
    personalInfo:userSchema,
    adminId:String,
})) 
export {userSchema,addressSchema,officerSchema,supplierSchema,supplierSchema}