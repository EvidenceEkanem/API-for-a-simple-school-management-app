require('dotenv').config()

let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Initialise the app
let app = express();

var cors = require('cors');

app.use(cors())

// Import routes
let apiRoutes = require("./app/Route/api");
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/sisApi', { useNewUrlParser: true});

let db = mongoose.connection;

// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

// let port = process.env.PORT || 1261;

// app.get('/', (req, res) => res.send('Hello World with Express and Nodemon'));

// app.listen(port, function () {
//     console.log('Welcome, your app is running on ' + port)
// });

// Use Api routes in the App
app.use('/api', apiRoutes)

const port = process.env.PORT || 3000;

app.listen(port);