
const express=require('express');
const app=express();



app.get('/',(req,res)=>res.send("Express Js is Open"));


app.listen(4000,()=>console.log("Lestening port 4000"));