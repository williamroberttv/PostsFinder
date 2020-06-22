const express = require("express");
const routes = express.Router();
const usersController = require("./controllers/usersController");
const postsController = require("./controllers/postsController");

routes.get("/users", usersController.index);
routes.get("/posts", postsController.index);
routes.get("/posts/:id", postsController.filtered);

module.exports = routes;
