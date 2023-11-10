const mongoose= require("mongoose");

mongoose.connect("mongodb+srv://scurd1311:test123@cluster0.djurl1z.mongodb.net/user")
.then(()=>{
    console.log("mongodb connected")
})
.catch(()=>{
    console.log("failed");
})

const newSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
})

const collection= mongoose.model("collection",newSchema);

module.exports=collection;