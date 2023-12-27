const express = require("express");
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const mysql = require('mysql2');

const bodyParser = require("body-parser");

require('dotenv').config();

const app = express();
let port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Set EJS as the view engine
app.set("views", path.join(__dirname, "views")); // Verify that this path is correct
app.set("view engine", "ejs");


//  connection pool
const pool = mysql.createPool({
   connectionLimit:100,
   host           :process.env.DB_HOST,
   user           :process.env.DB_USER,
   password       :process.env.DB_PASS,
   database       :process.env.DB_NAME

  });

  //connect to DB
  pool.getConnection((err,connection)=>{
  if(err) throw err;//not connected
       console.log("connected id as "+connection.threadId);
    });

 const routes=require("./server/routes/user");
 app.use('/',routes);
require
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
