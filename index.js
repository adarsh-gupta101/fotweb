const express=require('express');
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const cors=require('cors');
dotenv.config();

const app=express();
app.use(cors())

app.get("/",(req,res)=>{res.send("yummy tomato")})
app.use(express.json());
mongoose.connect(process.env.conn,{useNewUrlParser:true,useUnifiedTopology:true},()=>{


    console.log('connected to db');
 });

const datapage=require('./data.js');
app.use("/king",datapage);

app.listen(process.env.PORT|| 4000,(data,err)=>{
    console.log('AWW snap ');
    if(err)
    {
        console.log(err);
    }
});