const express = require('express');
const mysql = require('mysql');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5050;

//CONNECT TO THE DATABASE
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password123AZERTY!',
  database : 'testDB'
});

db.connect((err)=>{
  if(err) throw err;
  console.log("DATABASE testDB-> Connected...");
});

app.use(express.static(path.join(__dirname, 'views')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
  res.send("Welcome To The Home Page :)");
})

app.listen(PORT, console.log(`Server running on PORT : ${PORT}`));
