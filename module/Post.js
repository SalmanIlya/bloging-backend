const mongoose=require("mongoose")
const postSchema=mongoose.Schema({
  title:{
    type:String,
    required:true,
    unique:true
},
desc:{
    type:String,
    required:true,

},
photo:{    
        type:String,
        required:false,
},
name:{
    type:String,
    required:true,
},
categories:{
    type:Array,
    required:false
}

},{timestramps:true})
module.exports=mongoose.model("Post",postSchema)