require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3001;
const LocationsData = require("./data/LocationsData.js");
const AttactData= require("./data/AttractData.js");
const LodgingData = require("./data/LodgingData");

const db = mongoose.connection

//CONST FOR BOOKING LINK
const Attractions = require("./models/attactdb.js");
const Lodging = require("./models/lodgingdb.js");
const Locations = require("./models/locationdb.js");


//GLOBAL CONFIGURATION
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connect to mongo");
});


  
//TO MAKE SURE THE NODEMON IS RUNNING
app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});

//EJS USED AS LOGIN TEMPLATE FOR VIEWS/PAGES
app.set('view-engine', 'ejs')
//EJS ROUTE
app.get('/', (req, res) => {
    res.render('index.ejs', { name: 'Ari'})
})

//LOGIN ROUTE
app.get('/login', (req, res) =>{
    res.json('login.ejs') 
})
//REGISTER ROUTE
app.get('/register', (req, res) =>{
    res.render('register.ejs') 
})
//REGISTER POST ROUTE
app.post('/register', (req,res) => {
    
})


//LOCATION ROUTE
app.get('/locations', (req, res) =>{
    res.json('locationdb.js') 
})
//ATTRACTIONS ROUTE
app.get('/attractions', (req, res) =>{
    res.json('attractdb.js') 
})
//LODGING ROUTE
app.get('/lodging', (req, res) =>{
    res.json('lodgingdb.js') 
})

app.listen(3001, () => {
    console.log('listening');
})



// //TESTER FOR MONGOOSE
// db.on("error", (err) => console.log(err.message + " is mongod not running?"));
// db.on("open", () => console.log("mongo connected: ", mongoURI));
// db.on("close", () => console.log("mongo disconnected"));

// // //THIS CODE WAS ALSO USED TO CONNECT DATA TO MONGO DB
// Lodging.insertMany(LodgingData)
// // if database transaction succeeds
// .then((lodgingData) => {
//   console.log(lodgingData)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
// //  db.close()
// })













