const app=require("./app")
const dotenv=require("dotenv")
const mydb = require("./mydb/Db")
dotenv.config({path:"config/config.env"})

const port= process.env.port

mydb()

app.listen(port,()=>{
    console.log(`server is working on http://localhost:${port}`);
})