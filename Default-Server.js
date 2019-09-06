const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.static(path.join(__dirname, 'views')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
  res.send("Welcome To The Home Page :)");
})

app.listen(PORT, console.log(`Server running on PORT : ${PORT}`));
