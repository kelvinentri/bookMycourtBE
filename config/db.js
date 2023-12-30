const mongoose =require('mongoose')
const connectDb=async ()=>{
    try{
        const connection=await mongoose.connect('mongodb+srv://kelvingeorge:5s9EvLl6ahttzuAU@cluster0.6jt5d32.mongodb.net/')
        console.log("MongoDb data base connected");
    }
    catch(err){
        console.log(err);
    }
}
module.exports=connectDb