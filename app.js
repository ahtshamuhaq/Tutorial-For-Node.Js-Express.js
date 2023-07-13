const express = require("express");
const app = express();
const fs = require('fs');
const path = require("path");
const port = 80;
// EXPRESS SPECIFIC STUFF
app.use("/static", express.static("static")); //for serving static files
app.use(express.urlencoded());
// Pug specidic stuff
app.set("view engine", "pug"); //set the template engine as PUG
app.set("views", path.join(__dirname, "views")); // set the views directory

//ENDPOINTS
app.get("/", (req, res) => {
  const con =
    "this is the best ever course you will find on internet so use it wisely ";
  const params = { title: "PubG is the best game ever", content: con };
  res.status(200).render("index.pug", params);
});
app.post("/", (req, res) => {
  name = req.body.name;
  age = req.body.age;
  gender = req.body.gender;
  address = req.body.address;
  more = req.body.more;
  
  let outputToWrite = `The name of the client is ${name},${age} years old,${gender} residing at ${address},more about him : ${more}`
  fs.writeFileSync("output.txt",outputToWrite)
  const params = { message: "Your form has been submiteed successfully " };
  res.status(200).render("index.pug", params);
});
//Start the server
app.listen(port, () => {
  console.log(`This application is running successfully on ${port}`);
});
