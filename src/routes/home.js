const app = require("../app");

app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "views/home.html"))
});

module.exports = app;