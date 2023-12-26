const express=require("express");
const exphbs=require("express-handlebars");
const bodyParser=require("body-parser");
const mysql=require("mysql2");

require('dotenv').config();

const app=express();
let port=process.env.PORT||8000;

app.use(bodyParser.urlencoded({ extended: false }));

//Parser application /json
app.use(bodyParser.json());

app.use(express.static('public'));

//templeting Engine
app.engine('hbs',exphbs({extname: '.hbs'}));
app.set("view engine","hbs");

//Route

app.get("/about",(req,res)=>{
    res.render("home");
});


app.listen(port,()=>{
     console.log(`Server is running on port:${port}`);
})