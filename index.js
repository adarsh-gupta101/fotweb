const express=require('express');
const dotenv=require('dotenv');
const mongoose=require('mongoose');
dotenv.config();

const app=express();

app.get("/",(req,res)=>{res.send("yummy tomato")})
app.use(express.json());
mongoose.connect("mongodb+srv://dbadminuser:hHmi3r1F90uQ0OAW@cluster0.qd9fx.mongodb.net/userdbreview?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true},()=>{


    console.log('connected to db');
 });

const datapage=require('./data.js');
app.use("/king",datapage);

app.listen(process.env.PORT || 4000,(data,err)=>{
    console.log('AWW snap ');
    if(err)
    {
        console.log(err);
    }
});