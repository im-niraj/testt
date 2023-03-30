const express = require("express");
const app = express();

const port = 5050;

app.get("/", (req, res) => {
    res.send("hello world!");
})

app.listen(port, ()=> {
    console.log("app is running");
})