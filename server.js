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

//#region //CONTROLLERS
const lodgingController = require('./controller/lodging')
const attractController = require('./controller/attract')
const locationController = require('./controller/location')
//#endregion

//#region //GLOBAL CONFIGURATION
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connect to mongo");
});
//#endregion

  
//TO MAKE SURE THE NODEMON IS RUNNING
app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});

//#region EJS AND LOGIN ROUTES 
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
//#endregion

//LOCATION ROUTE
app.use("/location", locationController)
//ATTRACTIONS ROUTE
app.use("/attract", attractController)
//LODGING ROUTE
app.use("/lodging", lodgingController)

app.listen(3001, () => {
    console.log('listening');
})


//#region SEEDING DATA TO MONGO
//TESTER FOR MONGOOSE
db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("open", () => console.log("mongo connected: ", mongoURI));
db.on("close", () => console.log("mongo disconnected"));

// //THIS CODE WAS ALSO USED TO CONNECT DATA TO MONGO DB
Locations.insertMany(LocationsData)
// if database transaction succeeds
.then((locationData) => {
  console.log(locationData)
})
// if database transaction fails
.catch((error) => {
  console.log(error)
})
// close db connection either way
.finally(() => {
//  db.close()
})
//#endregion












