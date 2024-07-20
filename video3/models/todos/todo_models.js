import mongoose from 'mongoose'
const Todoschema=new mongoose.Schema({
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
        //this type writtern when reference requied,ref also see here user_models [mongoose.model("User",userSchema)] this User write
        ref:"User"
    },
    //array declare then
    subTodos:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"subTodo"
        //mongoose.model("subTodo",SubTodoSchema)
      }
    ]

},{timestamps:true})
export const Todo=mongoose.model("Todo",Todoschema)