const express = require("express");
const projectsModel = require("./projectsModel");

const router = express.Router();

router.get("/", (req, res) => {
    projectsModel.getAllProjects()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(error => {
            res.status(500).json({
                error: "Server error. Could not get all projects.",
                description: error
            });
        });
});

module.exports = router;