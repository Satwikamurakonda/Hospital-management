const fs = require("fs");
const express = require("express")
const mongoose = require("mongoose")

const app = express()
const port = 9000
const User=require("./model/user") 

app.use(express.urlencoded({extended:true}))

mongoose.connect("mongodb://127.0.0.1:27017/UserDataDB").then(()=>{
    console.log("Database connected")
}).catch((e)=>{
    console.log(e)
    console.log("Database not connected")
})

app.post("/",async(req,res)=>{
   const userData = new User(req.body)
  await userData.save()
  let a = fs.readFileSync("submit.html")
    res.send(a.toString())
})
app.get("/",(req,res)=>{
    let a = fs.readFileSync("form.html")
    res.send(a.toString())
    //res.send("k")
})

app.listen(port,()=>{
    console.log("App running on port",port)
})
