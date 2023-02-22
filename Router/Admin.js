const express=require("express")
const user=require("./user")
const Post=require("./post")
const auth=require("./auth")
const category = require("./categories")

const app=express.Router()

app.use("/user",user)
app.use("/auth",auth)
app.use("/post",Post)
app.use("/category",category)












module.exports=app