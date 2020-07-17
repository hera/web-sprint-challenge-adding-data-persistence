const express = require("express");
const projectsRouter = require("./api/projects/projectsRouter");
const resourcesRouter = require("./api/resources/resourcesRouter");


const server = express();

server.use(express.json());

server.use("/api/projects", projectsRouter);
server.use("/api/resources", resourcesRouter);

module.exports = server;