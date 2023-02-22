const jwt=require("jsonwebtoken")
const dotenv=require("dotenv")
dotenv.config({path:"config/config.env"})

const authrosise=(req,res,next)=>{
    const token=req.headers.token
    if(token){
      const verifyication=  jwt.verify(token,process.env.tocken)
      if(verifyication){
        next()
      }else{
        res.send("token is not valid")
      }
    }else{
        res.send("you can not authroize")
    }
}
const verifyTockenandAuth = (req, res, next) => {
    verifitocken(req, res, () => {
      if (req.user.id === req.params.id || req.user.isAdmin) {
        next();
      } else {
        res.status(403).json({
          massage: "you are not able to use this account",
        });
      }
    });
  };
  module.exports = {
authrosise,    
    verifyTockenandAuth

  }