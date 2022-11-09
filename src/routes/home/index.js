const path = require("path");
const express = require ("express");

const router = express.Router();

//1° get
router.get("/", (req, res) => {
    res.status(200).sendFile(path.join(__dirname,"../../views/html/home.html"))
});

module.exports = router;