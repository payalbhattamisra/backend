import mongoose from 'mongoose'
const hospitalSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    addressLine1:{
        type:String,
        required:true
    },
    addresLine2:{
        type:String
    },
    city:{
        type:String,
        required:true
    },
    pinCode:{
        type:String,
        //international characters present
        required:true
    },
    specialisedIn:[
        {
        type:String
        },
    ]
},{timestamps:true})
export const Hospital=mongoose.model("Hospital",hospitalSchema)