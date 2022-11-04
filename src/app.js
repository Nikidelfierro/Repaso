//require path
const path = require("path");
//dotenv acceso a .env
require("dotenv").config();

//require express
const express = require("express");

//init express app
const app = express();

//require routes
const homeRoutes = require ("./routes/home");

//use routes
app.use(homeRoutes);

//1° get
app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname,"views/home.html"))
});

//start listening server
app.listen(process.env.PORT, () => {console.log("Server listening on Port: ", process.env.PORT)});

