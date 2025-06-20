const mongoose=require("mongoose");

const connectDB= async () => {
    try{
    await mongoose.connect("mongodb+srv://vishalnani21:Vishal17@devtinder.xsalga6.mongodb.net/devTinder");
    console.log("DB connected");
}
catch(err){
    console.log("DB not connected")
}
}


module.exports=connectDB;
