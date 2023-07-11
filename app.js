const express = require("express");
const app = express()
const path = require("path")
const port = 8000 
app.use("/static",express.static("static"))
app.set('view engine', 'pug')
app.set('views',path.join(__dirname,'views'))


app.get("/demo",(req,res)=>{

    res.status(200).render('demo', { title: 'Hey Developer', message: 'Hello there!,Thanks for providing me this code' })
})
app.get("/",(req,res)=>{

    res.status(200).send("This is Home page of my first application with harry")
})
app.get("/about",(req,res)=>{

    res.send("This is About page of  my first application with harry")
})
app.post("/about",(req,res)=>{

    res.send("This is first post request from About page of  my first application with harry")
})
app.post("/this",(req,res)=>{

    res.status(404).send("Page iss Not Found")
})
app.listen(port,()=>{
    console.log(`This application is running successfully on ${port}`);
})