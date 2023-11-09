const express = require("express");

const app = express();

const customMiddleware = (req,res,next) =>{
    console.log("Welcome to my middleware");
    next();
};

app.use(customMiddleware);

app.get("/",(req,res) =>{
    res.send("App is running");

});


app.post("/creat_user",(req,res) =>{
    console.log(req);
})

app.listen(5000,()=>{
    console.log("Listening to port 5000");
});