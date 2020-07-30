const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser);
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
