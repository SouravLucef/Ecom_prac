const express = require("express");

require('./db/config');//import the config file
const User = require("./db/User");//import the user file


// const mongoose=require("mongoose");

const app = express();

//here we connect the mongoose by givig the connection route
// const connectDB=async()=>{
//     mongoose.connect('mongodb://localhost:27017/e-com');//mongodb runs on this port
//     //now we have to defiune schemas for insert ujpdate delete ,,we do not need for only get operation
//     const productSchema= new mongoose.Schema({})

//     //now we write a model which checks the schemas in mongoDB and applied which we have to get and wnich not to 
//     //example we have 3 field in schemas but we have database of 5 field so model will only fetch data of 3 field
//     const product=mongoose.model('product',productSchema);
    

//     //grtting data from databse is a time taking process so we use await
//     const data = await product.find();

//     console.log(data);
// }
// connectDB();

app.use(express.json()); //conver the req(given data) into json file so that it can understand

const customMiddleware = (req,res,next) =>{
    console.log("Welcome to my middleware");
    next();
};

app.use(customMiddleware);

//now we define the routes(the link the will consume the API) using expressjs
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