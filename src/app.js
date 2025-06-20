const express=require("express");
const connectDB  = require("./config/databse");
const app=express();

const cookieparser=require("cookie-parser");

app.use(express.json());
app.use(cookieparser());

const authRouter=require("./routers/auth");
const profileRouter = require("./routers/profile");
const requestRouter=require("./routers/request");
const userRouter=require("./routers/user");

app.use("/",authRouter);
app.use("/",profileRouter);
app.use("/",requestRouter);
app.use("/",userRouter);
const startServer=async()=>{
    try {
await connectDB();
 await app.listen(3000,()=>console.log("server is running on port 3000"));
    }
    catch(err){
        console.log("Server not connected");
    }
}
startServer();