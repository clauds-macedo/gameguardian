// Libs
const express = require("express");
const bodyParser = require("body-parser");
// Routes
const steamRoute = require("./routes/steam");
const epicRoute = require("./routes/epic");
// App
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use("/steam", steamRoute).listen(() => console.log("oi teste"));
app.use("/epic", epicRoute);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
