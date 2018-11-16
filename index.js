//Require express as a dependency
const express = require('express');

//Create a new express app by calling the express function and store it in a constant named app
const app = express();

//Instruct express to use express.static middleware
//in order to serve static assets located at ./client/build
app.use(express.static(__dirname + '/client/build'));

//Assign dynamic port for server to listen on
const PORT = process.env.PORT || 5000;

//Tell server to listen for incoming requests on port PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));