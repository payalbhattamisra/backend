 import mongoose from "mongoose"
 const SubTodoSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    complete:{
        type:Boolean,
        default:false
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
 },{timestamps:true})
 export const subTodo=mongoose.model("subTodo",SubTodoSchema)