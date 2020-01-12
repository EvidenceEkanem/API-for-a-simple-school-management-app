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
mongoose.connect('mongodb+srv://Evidoski:Ee09031988989@cluster0-wrfbb.mongodb.net/test', { useNewUrlParser: true});
// mongoose.connect('mongodb://ekanemevidence:<password>@cluster0-shard-00-00-96sss.gcp.mongodb.net:27017,cluster0-shard-00-01-96sss.gcp.mongodb.net:27017,cluster0-shard-00-02-96sss.gcp.mongodb.net:27017/test?replicaSet=Cluster0-shard-0&ssl=true&authSource=admin', { useNewUrlParser: true});

let db = mongoose.connection;

// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

let port = process.env.PORT || 1261;

// app.get('/', (req, res) => res.send('Hello World with Express and Nodemon'));

app.listen(port, function () {
    console.log('Welcome, your app is running on ' + port)
});

// Use Api routes in the App
app.use('/api', apiRoutes)