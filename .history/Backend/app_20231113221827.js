const express =require("express");
const collection= require("../mongo");
const cors =require("cors");
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


app.get("/",cors(),(req,res)=>{

})


app.post("/",async(req,res)=>{
    const {username,password}=req.body

    try {
        const check=await collection.findOne({username:username})
        const checkPassword=await collection.findOne({password:password})

        if(check && checkPassword){
            res.json("exist")
        }else{
            res.json("not exist")
        }
    } catch (error) {
        console.log(error);
        res.json("not exist")
    }
})



app.post("/register",async(req,res)=>{
    const {username, password}=req.body

    const data={
        username:username,
        password:password
    }

    try {
        const check=await collection.findOne({username:username})

        if(check){
            res.json("exist")
        }else{
            res.json("not exist")
            await collection.insertMany([data])
        }
    } catch (error) {
        console.log(error);
        res.json("not exist")
    }
})


app.listen(3000,()=>{
    console.log("port connected");
})