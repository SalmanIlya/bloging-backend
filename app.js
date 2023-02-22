const express=require("express")
const bodyparser=require("body-parser")
const Admin=require("./Router/Admin")
const cors=require("cors")
const app=express()

app.use(cors())
app.use(bodyparser.json())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(bodyparser.urlencoded({extended:false}))

app.use("/api",Admin)

module.exports=app
