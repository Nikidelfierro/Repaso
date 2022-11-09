
//dotenv acceso a .env
require("dotenv").config();

//require express
const express = require("express");

//init express app
const app = express();

//conf app
app.use(express.static("src/views"));

//require routers
const homeRoutes = require("./routes/home");
const productRoutes = require("./routes/products");

//use routers
app.use("/", homeRoutes);
app.use("/products", productRoutes);

//start listening server
app.listen(process.env.PORT, () => {console.log("Server listening on Port: ", process.env.PORT)});

