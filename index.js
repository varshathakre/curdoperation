const express=require("express");
let app=express();
const mongoose=require("mongoose");
const stucontrollers= require("./controllers/stucontrollers");
// const cors=require("cors");
//app.use(cors()); 
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/college");

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

app.get("/studisplay",stucontrollers.stuDisplay);

app.post("/datasave", stucontrollers.stuSave);

app.post("/stusearch", stucontrollers.stusearch);

app.get("/studelete/:id", stucontrollers.stuDelete);

app.get("/stuedit/:id" , stucontrollers.stuEdit);

app.post("/editsave/:id" ,stucontrollers.stueditsave);

app.listen(5000,function(){
    console.log("Server run !!!")
})