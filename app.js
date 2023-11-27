const express = require("express");

const mongoose=require("mongoose");

const app = express();

app.use(express.json()); //conver the req into json file so that it can understand

const customMiddleware = (req,res,next) =>{
    console.log("Welcome to my middleware");
    next();
};

app.use(customMiddleware);

app.get("/",(req,res) =>{
    res.send("App is running");

});


app.post("/creat_user",(req,res) =>{
    console.log(req.body); // we write here req.body as we give our date in body as a json file
    
    // res.send("created your user "+ req.body.name+" whose age is "+req.body.age);
    res.send(`User name is ${req.body.name} and his age is ${req.body.age}`) //javascript tempalte(${..}) is used here so it requires backtick(`) insted of ("").
})

app.get("/users",(req,res) =>{
    let users=["Sourav","Nirveek","Abhirup"];
    // res.send("Here are your users" + users);
    res.send(
        {
         users:  users, 
        });
})

app.delete("/delete",(req,res)=> {
    

})
app.patch("/patch")

app.listen(5000,()=>{
    console.log("Listening to port 5000");
});