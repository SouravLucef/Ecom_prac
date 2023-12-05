const express=require("express");
const { default: mongoose } = require("mongoose");

//now we define schema of databse
const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    password:String

});


module.exports = mongoose.model("users",userSchema);