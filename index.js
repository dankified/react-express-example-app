//Require express as a dependency
const express = require('express');

//Create a new express app by calling the express function and store it in a constant named app
const app = express();

//Instruct express to use express.static middleware
//in order to serve static assets located at ./client/build
app.use(express.static(__dirname + '/client/build'));

//Create new request handler that when receiving a
//GET request to the /animals endpoint
//will send back a collection of objects
// app.get('/animals', (req, res) => {
// 	res.json({data: [{name: 'Cougar', image: 'https://twistedsifter.files.wordpress.com/2010/09/cougar-close-up-face-eyes.jpg?w=800&h=598'}, {name: 'Giraffe', image: 'https://images.pexels.com/photos/802112/pexels-photo-802112.jpeg?auto=compress&cs=tinysrgb&h=350'}]});
// })

//Assign dynamic port for server to listen on
const PORT = process.env.PORT || 5000;

//Tell server to listen for incoming requests on port PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
