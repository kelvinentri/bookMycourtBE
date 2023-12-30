const mongoose =require('mongoose')
const connectDb=async ()=>{
    try{
        // mongodb+srv://kelvingeorge:<password>@cluster0.a9vgnxb.mongodb.net/?retryWrites=true&w=majority
    //    mongodb://127.0.0.1:27017/bookmycourt
        const connection=await mongoose.connect('mongodb+srv://kelvingeorge:BxJNJB65l6n1r9kz@cluster0.aou7wev.mongodb.net/bookmycourte19')
        console.log("MongoDb data base connected");
    }
    catch(err){
        console.log(err);
    }
}
module.exports=connectDb