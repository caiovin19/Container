const express = require("express")
const path = require("path")
const app = express()
const port =  process.env.PORT || "8080";

app.get("/", (req, res) => {
    res.sendFile(__dirname +'/cadastro.html' )
  });

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });