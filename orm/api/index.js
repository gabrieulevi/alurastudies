const express = require("express");
const routes = require("./routes");

//chamando o express

const app = express();
const port = 5000;

routes(app);

app.listen(port, () => `server listening on ${port}`);

module.exports = app;
