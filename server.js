console.warn("THIS SCRIPT IS ONLY MADE FOR DEVELOPMENT PURPOSES");
console.warn("DO NOT USE IN PRODUCTION");

const express = require("express");
const request = require("request");

const app = express();
const port = 3001;

// app.use(express.raw({ "type": () => true }));

app.use("/res", express.static("."));
app.all("*", async (req, res) => {
    const method = req.method.toLowerCase();
    /*const options =  {
        "url": "http://localhost:3000" + req.url,
        "method": method.toUpperCase()
    }
    if(["patch", "post", "put"].includes(method))
        options.body = req.body;
    request(options).pipe(res);*/
    req.pipe(request[method]("http://localhost:3000" + req.url)).pipe(res);
})
app.listen(port);
