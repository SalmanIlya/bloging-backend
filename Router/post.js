const Post = require("../module/Post")
const express = require("express")
const app = express.Router()

// create post 
app.post("/",async(req,res)=>{
    try{
const post=await Post.create(req.body)
res.send(post)

    }catch(err){
        res.send(err)
    }
})
// get all post 
app.get("/all",async(req,res)=>{
    const name=req.query.name
    const cat=req.query.cat
    let post;
    try{
if(name){
    post= await Post.find({name})
    
}else if(cat){
    post= await Post.find({category:{
        $in:[cat]
    }})
}
else{
post=await Post.find()
}
res.send(post)
    }catch(err){
        res.send("error :",err)
    }
})
// single post 
app.get("/:id",async(req,res)=>{
    try{
const post=await Post.findById(req.params.id)
if(post){
    res.send(post)

}else{
    res.send("user not found")
}
    }catch(error){
        res.send("Error")
    }
})
// update post 
app.put("/update",async(req,res)=>{
    try{
        const post=await Post.findById(req.params.id)
        if(post){
        const post1=await Post.findByIdAndUpdate(
            req.params.id,
            {$set:req.body},
            {new:true}
        )
        res.send(post1)
        }else{
            res.send("user not found")
        }
            }catch(error){
                res.send("Error")
            }
})
// delete post 
app.delete("/delete/:id",async(req,res)=>{
    try{
        const post=await Post.findById(req.params.id)
        if(post){
     await post.remove()
     res.send("post delete successfully")
        }else{
            res.send("post not found")
        }
            }catch(error){
                res.send("Error")
            }
})
module.exports = app