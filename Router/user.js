const User = require("../module/User")
const express = require("express")
const cryptojs = require("crypto-js")
const app = express.Router()
// all user 

app.get("/alluser", async (req, res) => {
    try {
        const user = await User.find()
        res.send(user)
    } catch (error) {
        res.send("server error")
    }
})
// single user 

app.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (user) {
            res.send(user)
        } else {
            res.send("user not found")
        }
    } catch (err) {
        res.send("error :", err)
    }
})
// update user 
app.put("/update/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (user) {
            const update = {
                name: req.body.name,
                email: req.body.email,
                password: cryptojs.RC4.encrypt(
                    req.body.password, process.env.secritkey
                ).toString()
            }
            const user1 = await User.findByIdAndUpdate(
                req.params.id,
                {
                    $set: update
                },
                { new: true }
            )
            res.send(user1)
        } else {
            res.send("user not found")
        }

    } catch (err) {
        res.send("error :", err)
    }

})
app.delete("/delete/:id",async(req,res)=>{
    try{
        const user = await User.findById(req.params.id)
        if (user){
            await user.remove()
            res.send("user delete successfully")
        }else{
            res.send("user not found ")
        }
    }catch(err){
        res.send("error")
    }
})

module.exports = app