const express = require("express");
const api = express();
const routes = require("./routes");
const cors = require("cors");

api.use(express.json());
api.use(cors());
api.use(routes);
api.listen(3333);
