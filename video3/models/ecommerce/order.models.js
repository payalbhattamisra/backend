import mongoose from "mongoose"
const orderItemSchema=new mongoose.Schema({
  productId:{
    type:mongoose.Schema.Types.OrderId,
    ref:"Product"
  },
  quantity:{
    type:Number,
    required:true
  }
})
const orderSchema=new mongoose.Schema({
    orderPrice:{
      type:Number,
      required:true
    },
    customer:{
      type:mongoose.Schema.Types.OrderId,
      ref:"User"
    },
    orderItems:{
      type:[orderItemSchema]
      //type:[ productId:{
      // type:mongoose.Schema.Types.OrderId,
       //ref:"Product"
      //},
      //]
    },
    address:{
      type:String,
      required:true
    },
    status:{
      type:String,
      enum:["PENDING","CANCELLED","DELIVERED"],
      //enum--options or choices
      default:"PENDING"
    }
},{timestamps:true})
export const Order=mongoose.model("Order",orderSchema)