const mongoose=require("mongoose")

const mydb=()=>{
    mongoose.connect(process.env.mongodb,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        // useCreateIndex:true
    }).then(()=>{
        console.log("dataBase is Connected ");
    }).catch(()=>{
        console.log("Error in Connection of DataBase");
    })
}
module.exports=mydb