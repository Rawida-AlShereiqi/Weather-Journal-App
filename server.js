// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 8000;
// const server = 
app.listen(port, listening);
function listening(){
    console.log('server running');
    console.log(`running lcalhost:${port}`);
}

// GET route
function sendData (request, response) {
  // response.send(projectData);
  response.send(projectData);
}
app.get('/all', sendData);


// POST route


function callBack(req,res){
   const newData = req.body;
  
   Object.assign(projectData, newData)
  console.log("Data received in POST request:", req.body);
  res.send(projectData);
}

app.post('/addData', callBack);


