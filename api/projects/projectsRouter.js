const express = require("express");
const projectsModel = require("./projectsModel");
const inspector = require("schema-inspector");

const projectSchema = require("./projectSchema");

const router = express.Router();


// Get all projects

router.get("/", (req, res) => {
    projectsModel.getProjects()
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


// Add a new project

router.post("/", (req, res) => {
    const validationResult = inspector.validate(projectSchema, req.body);

    if (!validationResult.valid) {
        res.status(400).json({
            error: "Bad request",
            description: validationResult.error
        });
    }

    projectsModel.addProject(req.body)
        .then(project => {
            res.status(200).json(project);
        })
        .catch(error => {
            res.status(500).json({
                error: "Server error. Could not add a project.",
                description: error
            });
        });
});



module.exports = router;