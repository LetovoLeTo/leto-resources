console.warn("THIS SCRIPT IS ONLY MADE FOR DEVELOPMENT PURPOSES");
console.warn("DO NOT USE IN PRODUCTION");

const express = require("express");
const request = require("request");

const app = express();
const port = 3001;

app.use("/res", express.static("."));
app.all("*", async (req, res) => {
    request[req.method.toLowerCase()]("http://localhost:3000" + req.url).pipe(res);
})
app.listen(port);
