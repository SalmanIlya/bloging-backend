const Category=require("../module/Category")
const express=require("express")
const app=express.Router()

app.post("/category",async(req,res)=>{
    try{
const category=await Category.create(req.body)
res.send(category)
    }catch(err){
res.send(err)
    }
})








module.exports=app