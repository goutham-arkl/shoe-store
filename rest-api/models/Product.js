const mongoose=require('mongoose')

const ProductSchema = new mongoose.Schema(
    {
        name:{type:String,required:true,unique:true},
        desc:{type:String,required:true},
        img:{type:String,required:true},
        category:{type:Array},
        price:{type:Number,required:true},
        color:{type:Array},
        size:{type:Array},
        quantity :{type : Number, default :1},
        rating:{type:Object}

        
    },
  {timestamps:true}
)

module.exports=mongoose.model('Products',ProductSchema)