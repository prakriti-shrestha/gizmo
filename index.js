import express from "express";

const app=express();
const port= 3000;


app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("homepage.ejs");
})


app.get("/product",(req,res)=>{
    res.render("product.ejs");
})

app.get("/support",(req,res)=>{
    res.render("support.ejs");
})

app.get("/account",(req,res)=>{
    res.render("account.ejs");
})

app.listen(port, ()=>{
    console.log("The server is running");
})